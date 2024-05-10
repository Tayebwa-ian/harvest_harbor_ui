import { Container, Grid } from "@mui/material";
import HorizontalCard from "../components/HorizontalCard";

function ProductPage(){
    return (
        <Container className="body">
            <Grid>
                <HorizontalCard />
            </Grid>
        </Container>
    );
}

export default ProductPage;
