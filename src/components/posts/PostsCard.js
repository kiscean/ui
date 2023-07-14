import React from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Link,
    Typography
} from "@mui/material";
import guitars from '../../static/guitars.png';

const PostsCard = () => {
    return (
        <Box
            mt={3}
        >
            <Link
                href="#"
                sx={{
                    textDecoration:"none"
                }}
            >
                <Card>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <CardMedia
                            component={'img'}
                            height="300"
                            image={guitars}
                            alt="guitars_image"
                            sx={{
                                width: '400px',
                                cursor: 'pointer',
                                "&:hover":{
                                    opacity: 0.8,
                                    boxSizing: 'border-box',
                                    zIndex: 1,
                                    transition: `all 0.50s ease`
                                }
                            }}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                align="center"
                                textTransform="uppercase"
                            >
                                Many cool guitars in our shop
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="body2"
                                align="center"
                            >
                                The guitar is a fretted musical instrument that typically has six strings. It is usually held flat against the player's body and played by strumming or plucking the strings with the dominant hand, while simultaneously pressing selected strings against frets with the fingers of the opposite hand. A plectrum or individual finger picks may also be used to strike the strings. The sound of the guitar is projected either acoustically, by means of a resonant chamber on the instrument, or amplified by an electronic pickup and an amplifier.
                            </Typography>
                            <CardActions>
                                <Button
                                    sx={{
                                        color: "#f44336"
                                    }}
                                    size="large"
                                >
                                    Share
                                </Button>
                                <Button
                                    sx={{
                                        color: "#f44336"
                                    }}
                                    size="large"
                                >
                                    Learn More
                                </Button>
                            </CardActions>
                        </CardContent>
                    </Box>
                </Card>
            </Link>
        </Box>
    );
};

export default PostsCard;