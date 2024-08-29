import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, Rating } from '@mui/material';
import strawberry from '../static/images/strawberry.jpg';
import { Link } from 'react-router-dom';
import truncateText from '../utils/TruncateText';

function ProductCard({data}) {
    const description = data.description;

    return (
        <Card sx={{ width: 250 }}>
            <Link
            to={`/products/${data.id}`}
            style={{
                textDecoration: 'none',
                color: 'inherit',
            }}
            >
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={strawberry}
                    alt="strawberry"
                    />
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography gutterBottom variant="h6" component="div">
                                    <b>{data.name}</b> <br />
                                </Typography>
                                <em>sell quantity {data.sell_volume}</em>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom variant="h5" component="div">
                                    ${data.unit_price}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography variant="body2" color="text.secondary">
                            {truncateText(description, 30)} see more
                        </Typography>
                        <Rating defaultValue={4.5} precision={0.5} readOnly/>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                <Grid container spacing={2} sx={{paddingLeft: 3}}>
                    <Grid item xs={6}>
                        <Button size="small" color="secondary">
                            Share
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button size="small" color="primary">
                            Select
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default ProductCard;
