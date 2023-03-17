import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export const GitItem = ({ title, url, description }) => {

    return (
        <div className='card'>

            <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        image={url}
                        alt={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography> */}
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>



    )
}

