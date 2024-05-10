import { Delete } from "@mui/icons-material";
import { Container, Paper, Table, TableCell, TableHead, TableContainer, TableBody, TableRow, IconButton } from "@mui/material";
import * as React from 'react';


function CartPage(){

    return (
        <Container sx={{ width: 700, mt:10, mb: 10, textAlign: "center" }}>
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
                        <TableRow
                        key=""
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row" align="center">
                            Strewberry (kg)
                        </TableCell>
                        <TableCell align="center">$500</TableCell>
                        <TableCell align="center">4</TableCell>
                        <TableCell align="center">$2000</TableCell>
                        <TableCell align="center">
                            <IconButton sx={{ color: "danger" }}>
                                <Delete sx={{ color: 'red', }} />
                            </IconButton>
                        </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default CartPage;
