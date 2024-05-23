import { Container, Grid, CardMedia } from "@mui/material";
import agri from "../static/images/agri.jpg"
import ProductsPage from "./ProductsPage";

export default function HubPage() {
    return (
        <Container>
            <Grid container>
                <CardMedia
                component="img"
                sx={{ height: 200, mb: 1, mt: 1 }}
                image={agri}
                />
                <Grid></Grid>
                <Grid item>
                    <ProductsPage />
                </Grid>
            </Grid>
        </Container>
    )
}
