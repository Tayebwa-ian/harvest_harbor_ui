import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import strawberry from '../static/images/strawberry.jpg'
import { Grid, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HorizontalHubCard() {

  return (
    <Link
    style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        border: '1px solid #ccc',
        padding: 5,
        borderRadius: '8px',
        mb: 4,
    }}
    to='/hub'
    >
        <Card sx={{ display: 'flex' }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <CardMedia
                    component="img"
                    sx={{ height: 220, width: 350 }}
                    image={strawberry}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            <b>Hakimi Hub</b>
                        </Typography>
                        <Typography variant="subtitle1" component="div">
                            Since: 11/02/2022<br/>
                            <em>Location: Wandegeya, City Mall, Kampala</em>
                        </Typography>
                        <br/>
                        <Typography variant="subtitle1" component="div">
                            <b>Rating</b>
                        </Typography>
                        <Rating readOnly />
                        </CardContent>
                    </Box>
                </Grid>
            </Grid>
        </Card>
    </Link>
  );
}
