import { Container, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";
import "../static/styles/ProductsPage.css"

function ProductsPage() {
    return (
        <div>
            <Container className="body">
                <Grid container spacing={1}>
                    <Grid item xs={6} md={4} lg={3}>
                        <ProductCard />
                    </Grid>
                    <Grid item xs={6} md={4} lg={3}>
                        <ProductCard />
                    </Grid>
                    <Grid item xs={6} md={4} lg={3}>
                        <ProductCard />
                    </Grid>
                    <Grid item xs={6} md={4} lg={3}>
                        <ProductCard />
                    </Grid>
                    <Grid item xs={6} md={4} lg={3}>
                        <ProductCard />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default ProductsPage;
