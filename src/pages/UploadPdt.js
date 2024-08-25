import { Container, Grid, TextField, Typography, FormControl, Select, InputLabel, MenuItem, Button, OutlinedInput, InputAdornment } from "@mui/material";
import * as React from 'react';
import UploadFile from "../components/UploadFile";
import postOrUpdate from "../CRUD/postOrUpdate";

function ProductUploadPage() {
    const [formData, setFormData] = React.useState({
        hub_id: "",
        cat_id: "",
        name: "",
        description: "",
        sell_volume: "",
        quantities: 0,
        unit_price: 0.0
    })
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const product = await postOrUpdate(`http://127.0.0.1:5000/api/core/${formData.hub_id}/products`, formData);
        const fileFormData = new formData();
        fileFormData.append("file", file)
        const response = await postOrUpdate(`http://127.0.0.1:5000/api/core/${product.id}/productimages`, fileFormData);
        console.log(response);
    };

    return(
        <Container sx={{ width: 750, mt:2, mb: 2, textAlign: "center" }}>
            <Typography
            variant="h4"
            sx={{ mb:2, mr:10 }}
            >
                Add Product
            </Typography>
            <Grid container spacing={-8}>
                <Grid item xs={12} md={12} lg={12} sx={{ m:2}}>
                    <TextField 
                    required
                    label="Product Name"
                    fullWidth
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} md={12} lg={12} sx={{ m:2}}>
                    <TextField
                    required
                    id="outlined-multiline-static"
                    fullWidth
                    label="Product Description"
                    multiline
                    rows={5}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} md={12} lg={12} sx={{ m:2}}>
                    <FormControl fullWidth required>
                        <InputLabel id="demo-simple-select-label">Hub the product belongs to</InputLabel>
                        <Select
                        fullWidth
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="hub"
                        name="hub_id"
                        value={formData.hub_id}
                        onChange={handleChange}
                        >
                            <MenuItem value="hub_1">Hub 1</MenuItem>
                            <MenuItem value="hub_2">Hub 2</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={12} lg={12} sx={{ m:2}}>
                    <FormControl fullWidth required>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                        fullWidth
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="category"
                        name="cat_id"
                        value={formData.cat_id}
                        onChange={handleChange}
                        >
                            <MenuItem value="cat_1">Category 1</MenuItem>
                            <MenuItem value="cat_2">Category 2</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={12} lg={12} sx={{ m:2}}>
                    <TextField 
                    required
                    label="Sell Volume (1kg, Piece, Dozen, Pair, Crate, Box, etc....)"
                    fullWidth
                    variant="outlined"
                    name="sell_volume"
                    value={formData.sell_volume}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} md={12} lg={12} sx={{ m:2}}>
                    <TextField
                    fullWidth
                    label="Avaliable Quantities"
                    type="number"
                    variant="outlined"
                    min={0}
                    name="quantities"
                    value={formData.quantities}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} md={12} lg={12} sx={{ m:2}} >
                    <FormControl fullWidth required>
                        <InputLabel htmlFor="outlined-adornment-amount">Unit Price</InputLabel>
                        <OutlinedInput
                        type="float"
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Amount"
                        name="unit_price"
                        value={formData.unit_price}
                        onChange={handleChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item sx={{ m:2}}>
                    <UploadFile 
                    label="Upload Product Image"
                    fileName={fileName}
                    handleFileChange={handleFileChange}
                    handleFileDelete={handleFileDelete}
                    />
                </Grid>
                <Grid item xs={12} sx={{ m:2}}>
                    <Button
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}
                    >
                        Add Category
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductUploadPage;
