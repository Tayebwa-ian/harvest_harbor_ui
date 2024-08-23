import { Container, Grid, TextField, Typography, FormControl, Select, InputLabel, MenuItem, Button } from "@mui/material";
import * as React from 'react';

function RegisterCategoryPage() {
    const [formData, setFormData] = React.useState({
        name: "",
        description: "",
        category_id: ""

    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return(
        <Container sx={{ width: 650, mt:5, mb: 5, textAlign: "center" }}>
            <Typography
            variant="h4"
            sx={{ mb:2, mr:10 }}
            >
                Add Category
            </Typography>
            <Grid container spacing={-8}>
                <Grid xs={12} md={12} lg={12} sx={{m: 2}}>
                    <TextField 
                    required
                    label="Category Name"
                    name="name"
                    sx={{ width: 600 }}
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid xs={12} md={12} lg={12} sx={{m: 2}}>
                    <TextField
                    required
                    id="outlined-multiline-static"
                    sx={{width: 600 }}
                    label="Category Description"
                    multiline
                    rows={5}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid xs={12} md={12} lg={12} sx={{ m:2}}>
                    <FormControl fullWidth sx={{width: 600 }}>
                        <InputLabel id="demo-simple-select-label">Main category</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="category_id"
                        value={formData.category_id}
                        label="Main_category"
                        onChange={handleChange}
                        >
                            <MenuItem value="cat_1">Category 1</MenuItem>
                            <MenuItem value="cat_2">Category 2</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={12} sx={{ m:2}}>
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

export default RegisterCategoryPage;
