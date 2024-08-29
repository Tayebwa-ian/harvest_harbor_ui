import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import strawberry from '../static/images/strawberry.jpg'
import { Container, Grid, Rating, Button } from '@mui/material';
import NavTab from './NavTab';
import userToken from '../utils/userToken';
import postOrUpdate from '../CRUD/postOrUpdate';
import { useNavigate } from 'react-router-dom';
import ErrorDisplay from './ErrorDisplay';

export default function HorizontalCard({data}) {
    const {token} = userToken();
    const [error, setError] = React.useState(null)
    const [formData, setFormData] = React.useState({
        "product_id": data.id,
        "quantities": 1,
        "unit_price": data.unit_price
    })
    const navigate = useNavigate();

    const addToCart = async (event) => {
        event.preventDefault();
        if (token) {
            const {data:req_data, error:err, statusCode:status} = await postOrUpdate(`http://127.0.0.1:5000/api/core/purchases`, formData);
            if (status !== 201) {
                setError(err);
                console.log(error);
            } else {
                console.log(req_data);
                navigate("/cart");
            };
        } else {
            console.log("please login to add a product to cart");
            navigate("/login");
        };
    };

    return (
        <Container>
            { error &&
                <ErrorDisplay error={error} severity='warning'/>
            }
            <Card sx={{ display: 'flex' }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <CardMedia
                        component="img"
                        sx={{ height: 300 }}
                        image={strawberry}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                {data.name}
                            </Typography>
                            <Typography variant="subtitle1" component="div">
                                <em>From: Hakimi Hub</em>
                            </Typography>
                            <br/>
                            <Typography variant="subtitle1" component="div">
                                Sale Unit: {data.sell_volume} <br/>
                                Available Quantities: {data.quantities} <br/>
                            </Typography>
                            <br />
                            <Grid container spacing={2}>
                                <Grid item md={6} lg={6}>
                                    <Typography variant="subtitle1" component="div">
                                        <b>Rating</b>
                                    </Typography>
                                    <Rating name='disabled' />
                                </Grid>
                                <Grid item md={6} lg={6}>
                                    <Button
                                    size="medium"
                                    color="secondary"
                                    variant='outlined'
                                    onClick={addToCart}
                                    >
                                        Select
                                    </Button>
                                </Grid>
                            </Grid>
                            </CardContent>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
            <NavTab data={data} />
        </Container>
    );
}
