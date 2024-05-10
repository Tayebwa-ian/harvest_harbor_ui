import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, Rating } from '@mui/material';
import strawberry from '../static/images/strawberry.jpg';

function ProductCard() {
    const description = 'Description of the product being sold';

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
          return text;
        }
      
        const truncatedText = text.substring(0, maxLength);
        const lastSpaceIndex = truncatedText.lastIndexOf(' '); // Find the last space
      
        return lastSpaceIndex !== -1
          ? truncatedText.substring(0, lastSpaceIndex) + '...'
          : truncatedText + '...';
      };

    return (
        <Card sx={{ maxWidth: 250 }}>
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
                            <Typography gutterBottom variant="h7" component="div">
                                <b>Strawberries</b> <br /> <em>sold in Kilo</em>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom variant="h4" component="div">
                                $20
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography variant="body2" color="text.secondary">
                        {truncateText(description, 30)}
                    </Typography>
                    <Rating defaultValue={4.5} precision={0.5} readOnly/>
                </CardContent>
            </CardActionArea>
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
