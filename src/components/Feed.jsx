import { Box, Typography, Grid2 } from "@mui/material";
import Newsbody from './Newscard.jsx'
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import { useState } from "react";
export default function Feed({title, news}) {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));

    const articles = news.articles;
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 6;
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    return (
        <>
            <Box sx={{flexGrow: 1, m: 2}}>
                <Typography variant="h5" sx={{ m: 2, ml: 2.5 }}>
                    {title}
                </Typography>
                <Grid2
                    container
                    spacing={{ xs: 2, md: 8 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    justifyContent="center"
                >
                    {currentArticles.map((content, index) => (
                        <Grid2 xs={6} sm={4} md={4} key={index}>
                            <Newsbody content={content} />
                        </Grid2>
                    ))}
                </Grid2>
                <Box sx={{
                    textAlign: 'center',
                    position: 'sticky',
                    backgroundColor: '#fff',
                    mt: 3,
                    width:'100%',
                    bottom: 0,
                }}>
                    {(articles.length !== 0) 
                        ? 
                        <Pagination 
                        count={Math.ceil(articles.length / articlesPerPage)}
                        page={currentPage}
                        onChange={(event, page) => setCurrentPage(page)}
                        variant="outlined" 
                        color="primary" 
                        />
                        :<Typography variant='h4'>No results found</Typography>
                    }
                </Box>
            </Box >
        </>
    );
}