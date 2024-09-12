import * as React from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {countries, languages, categories} from '../Utils.js'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Filters({ open, handleClose, handleClickOpen, filters, handleChange}) {
    return (
        <React.Fragment>
            <FilterAltIcon
                onClick={handleClickOpen}
            />
            <Dialog
                open={open}
                scroll='body'
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <Box sx={{
                    margin:'20px',
                    padding:'20px',
                }}>
                    <InputLabel className="filter" id="lang">Language</InputLabel>
                    <Select
                        labelId="lang"
                        value={filters.language}
                        onChange={handleChange}
                        autoWidth
                        name="language"
                        className="filter" 
                    >
                        {languages.map((lang)=>(
                            <MenuItem key={lang.code} value={lang.code}>{lang.label}</MenuItem>
                        ))}
                    </Select>

                    <InputLabel className="filter" id="count">Country</InputLabel>
                    <Select
                        labelId="count"
                        value={filters.country}
                        onChange={handleChange}
                        autoWidth
                        label="count"
                        name="country"
                        className="filter" 
                    >
                        {countries.map((count)=>(
                            <MenuItem key={count.code} value={count.code}>{count.label}</MenuItem>
                        ))}
                    </Select>

                    <InputLabel className="filter" id="categ">Category</InputLabel>
                    <Select
                        labelId="categ"
                        value={filters.category}
                        onChange={handleChange}
                        autoWidth
                        label="categ"
                        name="category"
                        className="filter" 
                    >
                        {categories.map((categ)=>(
                            <MenuItem key={categ.code} value={categ.code}>{categ.label}</MenuItem>
                        ))}
                    </Select>
                </Box>
            </Dialog>
        </React.Fragment>
    );
}
