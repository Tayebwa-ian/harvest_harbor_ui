import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import strawberry from '../static/images/strawberry.jpg'
import { Grid, Rating } from '@mui/material';

export default function HorizontalCard() {

  return (
    <Card sx={{ display: 'flex' }}>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <CardMedia
                component="img"
                sx={{ height: 400 }}
                image={strawberry}
                alt="Live from space album cover"
                />
            </Grid>
            <Grid item xs={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Product Name
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                        Sale Unit: Kilo <br/> <em>Hub Name: Hakimi</em>
                    </Typography>
                    <br/>
                    <Typography variant="subtitle1" component="div">
                        <b>Rating</b>
                    </Typography>
                    <Rating name='disabled' />
                    </CardContent>
                </Box>
            </Grid>
        </Grid>
    </Card>
  );
}
