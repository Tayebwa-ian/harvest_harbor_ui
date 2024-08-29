import { Container, Grid } from "@mui/material";
import HorizontalCard from "../components/HorizontalCard";
import { useParams } from "react-router-dom";
import useGet from "../CRUD/get";
import DataLoading from "../components/DataLoading";
import ErrorDisplay from "../components/ErrorDisplay";

function ProductPage(){
    const {product_id} = useParams();
    const {data: product, error, isPending} = useGet(`http://127.0.0.1:5000/api/core/products/${product_id}`);
    return (
        <Container className="body">
            <Grid>
                { product &&
                <HorizontalCard data={product} />
                }
                { isPending &&
                    <DataLoading />
                }
                { error && <ErrorDisplay error={error} severity="warning"/>}
            </Grid>
        </Container>
    );
}

export default ProductPage;
