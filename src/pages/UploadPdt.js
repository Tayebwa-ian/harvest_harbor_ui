import { Container, Grid, TextField, Typography, FormControl, Select, InputLabel, MenuItem, Button, OutlinedInput, InputAdornment } from "@mui/material";
import * as React from 'react';
import UploadFile from "../components/UploadFile";

function ProductUploadPage() {
    const [cat, setCat] = React.useState('');
    const [hub, setHub] = React.useState('');
    const [file, setFile] = React.useState(null);
    const [fileName, setFileName] = React.useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if(selectedFile) {
            setFile(selectedFile);
            setFileName(selectedFile.name);
        }
    };

    const handleFileDelete = (event) => {
        event.preventDefault();
        setFileName(null);
        setFile(null);
    };

    const handleCategory = (event) => {
        setCat(event.target.value);
    };

    const handleHub = (event) => {
        setHub(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return(
        <Container sx={{ width: 650, mt:5, mb: 5, textAlign: "center" }}>
            <Typography
            variant="h4"
            sx={{ mb:2, mr:10 }}
            >
                Add Product
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={-8}>
                    <Grid xs={12} md={12} lg={12}>
                        <TextField 
                        required
                        label="Product Name"
                        sx={{ m: 1, width: 600 }}
                        variant="outlined"
                        />
                    </Grid>
                    <Grid xs={12} md={12} lg={12}>
                        <TextField
                        required
                        id="outlined-multiline-static"
                        sx={{ m: 1, width: 600 }}
                        label="Product Description"
                        multiline
                        rows={5}
                        />
                    </Grid>
                    <Grid xs={12} md={12} lg={12} sx={{ m:2}}>
                        <FormControl fullWidth required>
                            <InputLabel id="demo-simple-select-label">Hub the product belongs to</InputLabel>
                            <Select
                            sx={{width: 600 }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={hub}
                            label="hub"
                            onChange={handleHub}
                            >
                                <MenuItem value={"hub_1"}>Hub 1</MenuItem>
                                <MenuItem value={"hub_2"}>Hub 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={12} md={12} lg={12} sx={{ m:2}}>
                        <FormControl fullWidth required>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                            sx={{width: 600 }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={cat}
                            label="category"
                            onChange={handleCategory}
                            >
                                <MenuItem value={"cat_1"}>Category 1</MenuItem>
                                <MenuItem value={"cat_2"}>Category 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={12} md={12} lg={12} sx={{ m:2}}>
                        <TextField 
                        required
                        label="Sell Volume (1kg, Piece, Dozen, Pair, Crate, Box, etc....)"
                        sx={{width: 600 }}
                        variant="outlined"
                        />
                    </Grid>
                    <Grid xs={12} md={12} lg={12} sx={{ m:2}}>
                        <TextField
                        sx={{width: 600 }}
                        label="Avaliable Quantities"
                        type="number"
                        variant="outlined"
                        fullWidth
                        min={0}
                        />
                    </Grid>
                    <Grid xs={12} md={12} lg={12} sx={{ m:2}} >
                        <FormControl fullWidth required>
                            <InputLabel htmlFor="outlined-adornment-amount">Unit Price</InputLabel>
                            <OutlinedInput
                            sx={{width: 600 }}
                            type="float"
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Amount"
                            />
                        </FormControl>
                    </Grid>
                    <Grid sx={{ m:2}}>
                        <UploadFile 
                        label="Upload Product Image"
                        fileName={fileName}
                        handleFileChange={handleFileChange}
                        handleFileDelete={handleFileDelete}
                        />
                    </Grid>
                    <Grid xs={12} sx={{ m:2}}>
                        <Button
                        variant="contained"
                        type="submit"
                        >
                            Add Category
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default ProductUploadPage;
