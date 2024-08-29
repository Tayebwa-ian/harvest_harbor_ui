import { Container, Grid, CardMedia } from "@mui/material";
import agri from "../static/images/agri.jpg"
import ProductsPage from "./ProductsPage";
import { useParams } from "react-router-dom";
import useGet from "../CRUD/get";

export default function HubPage({}) {
    const { hub_id } = useParams();
    const {data: hub_pdts, error: p_er, isPending: pending} = useGet(`http://127.0.0.1:5000/api/core/${hub_id}/products`);
    return (
        <Container>
            <Grid container>
                <CardMedia
                component="img"
                sx={{ height: 200, mb: 1, mt: 1, textAlign: "center" }}
                image={agri}
                />
                <Grid>
                    { hub_pdts &&
                    <ProductsPage products={hub_pdts} />
                    }
                    { pending && <p>Fetching products............</p>}
                    { p_er && <p>{p_er}</p>}
                </Grid>
            </Grid>
        </Container>
    )
}
