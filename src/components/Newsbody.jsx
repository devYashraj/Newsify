import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { formatDate } from '../Utils.js';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Newsbody({ open, handleClickOpen, handleClose, content }) {
    return (
        <React.Fragment>
            <Button variant="text" onClick={handleClickOpen}>
                Learn More
            </Button>
            <Dialog
                open={open}
                scroll='body'
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>

                    <Card sx={{ maxWidth: 400 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={content.image}
                            title={content.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" sx={{ m: 1 }}>
                                {content.title}
                            </Typography>
                            <Typography
                                component="button"
                                variant='text'
                                onClick={() => window.open(content.source.url, '_blank')}
                                sx={{ m: 1, color: 'blue', border: 'none' }}
                            >
                                {content.source.name}
                            </Typography>
                            <Typography variant='body2' sx={{ m: 1, color: 'text.secondary' }}>
                                {formatDate(content.publishedAt)}
                            </Typography>
                            <Typography variant="body2" sx={{ m: 1, color: 'text.secondary' }}>
                                {content.description}
                            </Typography>
                            <Typography variant="body1" sx={{ m: 1, mt: 2 }}>
                                {content.content}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'space-between' }}>
                            <Button size="small" onClick={() => window.open(content.url, '_blank')} sx={{ ml: 1 }}>
                                Source
                            </Button>
                            <Button size="small" onClick={handleClose} sx={{ mr: 1 }}>
                                OK
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
            </Dialog>
        </React.Fragment>
    );
}
