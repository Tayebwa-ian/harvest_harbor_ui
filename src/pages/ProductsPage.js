import { Container, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";
import "../static/styles/ProductsPage.css"

function ProductsPage({products}) {
    return (
        <div>
            <Container className="body">
                <Grid container spacing={1}>
                    {products.map((pdt, key) => (
                        <Grid key={key} item xs={6} md={4} lg={3}>
                            <ProductCard data={pdt}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default ProductsPage;
