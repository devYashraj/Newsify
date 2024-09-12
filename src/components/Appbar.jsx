import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Feed from './Feed.jsx'
import Filters from './Filters.jsx';
import { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import axios from 'axios'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(1),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
  },
}));

export default function Appbar() {

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const menuId = 'primary-search-account-menu';

  const [loading, setLoading] = useState(true);

  const [filters, setfilters] = useState(() => {
    const aconewsFilters = localStorage.getItem("aconewsFilters");
    return aconewsFilters ? JSON.parse(aconewsFilters) : {
      country: "in",
      language: "en",
      category: "general"
    };
  })

  useEffect(() => {
    localStorage.setItem("aconewsFilters", JSON.stringify(filters));
  }, [filters])

  const handleChange = (event) => {
    const field = event.target.name;
    const val = event.target.value;
    setfilters({ ...filters, [field]: val })
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [news, setnews] = useState({})

  const [query, setquery] = useState("");
  
  const handleQueryChange = (event) => {
    setquery(event.target.value);
  }

  const [title, setTitle] = useState("Top Headlines");

  const getNews = async () => {
    try {
      setLoading(true);
      const searchData = { ...filters, query: query };
      let result;

      if (searchData.query.trim() !== "") {
        result = await axios.post(`${baseUrl}acoserver/search`, searchData, {
          headers: {
            'Content-Type': 'application/json',
          }
        });
      }
      else {
        result = await axios.post(`${baseUrl}acoserver/topheadlines`, searchData, {
          headers: {
            'Content-Type': 'application/json',
          }
        });
      }
      console.log(result);
      
      if(result.status === 200){
          setnews(result.data);
          setLoading(false);
      }
    }
    catch (error) {
      console.log("Something went wrong");
    }
  }

  useEffect(()=>{
    getNews();
  },[])

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getNews();
    }
  }

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h3"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' }, p: 1 }}
            >
              aconews
            </Typography>
            <Search>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                name='query'
                value={query}
                onChange={handleQueryChange}
                onKeyDown={handleKeyDown}
              />
            </Search>
            <IconButton
              sx={{ color: 'white' }}
              onClick={() => {
                setTitle(() => (
                  (query.trim() === "" ? "Top Headlines" : "Showing results for: " + query)
                ))
                getNews();
              }}
            >
              <SearchIcon />
            </IconButton>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
              >
                <Filters
                  open={open}
                  handleClose={handleClose}
                  handleClickOpen={handleClickOpen}
                  filters={filters}
                  handleChange={handleChange}
                />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                color="inherit"
              >
                <Filters
                  open={open}
                  handleClose={handleClose}
                  handleClickOpen={handleClickOpen}
                  filters={filters}
                  handleChange={handleChange}
                />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {(loading) ? <LinearProgress/> : <Feed title={title} news={news}/>}
    </>
  );
}
