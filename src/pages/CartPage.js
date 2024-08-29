import { Delete } from "@mui/icons-material";
import { Container, Paper, Table, TableCell, TableHead, TableContainer, TableBody, TableRow, IconButton, Button, TextField, Typography } from "@mui/material";
import * as React from 'react';
import { Link, useNavigate } from "react-router-dom";
import useGet from "../CRUD/get";
import DataLoading from "../components/DataLoading";
import ErrorDisplay from "../components/ErrorDisplay";
import postOrUpdate from "../CRUD/postOrUpdate";


function CartPage(){
    const {data, error, isPending} = useGet('http://127.0.0.1:5000/api/core/purchases');
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        quantities: 0,
    });

    const handleDelete = async (id) => {
        const info={}
        const reqMethod="DELETE"
        await postOrUpdate(`http://127.0.0.1:5000/api/core/cart_products/${id}`, info, reqMethod);
        navigate("/cart");
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(formData.quantities);
        //navigate("/cart")
    };

    return (
        <Container>
            { data && 
                <Container sx={{mt:5, mb: 5}}>
                    <Container sx={{ width: 800, mt:5, mb: 5, textAlign: "center" }}>
                        {data[0].sold_products.length === 0 &&
                            <Typography variant="h6">Cart is empty yet!</Typography>
                        }
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="center"><b>Item Name</b></TableCell>
                                    <TableCell align="center"><b>Unit Price</b></TableCell>
                                    <TableCell align="center"><b>Quantities</b></TableCell>
                                    <TableCell align="center"><b>Total</b></TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data[0].sold_products.map((product, index) => (
                                        <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" align="center">
                                                {product.product_id}
                                            </TableCell>
                                            <TableCell align="center">${product.unit_price}</TableCell>
                                            <TableCell align="center">
                                                <TextField
                                                sx={{width:100}}
                                                type="number"
                                                variant="outlined"
                                                InputProps={{ inputProps: { min: 0 } }}
                                                name="quantities"
                                                value={formData.quantities === 0 ? product.quantities : formData.quantities}
                                                onChange={handleChange}
                                                />
                                            </TableCell>
                                            <TableCell align="center">
                                                ${product.quantities * product.unit_price}
                                                </TableCell>
                                            <TableCell align="center">
                                                <IconButton sx={{ color: "danger" }} onClick={() => handleDelete(product.id)}>
                                                    <Delete sx={{ color: 'red', }} />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>
                    <Container
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                    }}
                    >
                        <Link
                        to="/checkout"
                        sx={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                        >
                            <Button
                            sx={{
                                mr: 20
                            }}
                            variant="contained"
                            >
                                Proceed To Checkout
                            </Button>
                        </Link>
                    </Container>
                </Container>
            }
            { isPending && <DataLoading />}
            { error && <ErrorDisplay error={error} severity="warning"/>}
        </Container>
        
    );
}

export default CartPage;
