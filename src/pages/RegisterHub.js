import { Container, Grid, TextField, Typography, FormControl, MenuItem, Select, InputLabel, Switch, FormControlLabel, Button } from "@mui/material";
import * as React from 'react';
import UploadFile from "../components/UploadFile";
import postOrUpdate from "../CRUD/postOrUpdate";
import { useNavigate } from "react-router-dom";
import fileOps from "../CRUD/fileOps";

function RegisterHub() {
    const [formData, setFormData] = React.useState({
        description: "",
        name: "",
        status: "",
        rank: "",
        is_bulk_seller: false,
        is_retailer: false,
    })
    const [fileName, setFileName] = React.useState(null);
    const navigate = useNavigate()
    const [image, setImage] = React.useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];    
        setFileName(file.name);
        setImage(file);
    };

    const handleFileDelete = (event) => {
        event.preventDefault();
        setFileName(null);
        setImage(null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const hub = await postOrUpdate(`http://127.0.0.1:5000/api/core/hubs`, formData);
        if (hub.data.id && image) {
            const fileForm = new FormData();
            fileForm.append('image', image);
            const response = await fileOps(`http://127.0.0.1:5000/api/core/181f21f7-a2e5-4591-924c-9fd611b5280b/hubimages`, fileForm);
            console.log(response);
        };
        navigate("/hub");
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleBoolChange = (event) => {
        const { name, checked } = event.target;
        setFormData({
            ...formData,
            [name]: checked
        });
    };

    return (
        <Container sx={{ width: 650, mt:5, mb: 5, textAlign: "center" }}>
            <Typography
            variant="h4"
            sx={{ mb:2, mr:10 }}
            >
                Hub Registration
            </Typography>
            <Grid container spacing={-8}>
                <Grid item xs={12} md={12} lg={12} sx={{ m:2}}>
                    <TextField 
                    required
                    label="Hub Name"
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
                    label="Hub Description"
                    multiline
                    rows={5}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item sx={{ m:1}}>
                    <FormControl sx={{ m: 1, width: 240 }}>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        >
                            <MenuItem value="atcive">active</MenuItem>
                            <MenuItem value="pending">pending</MenuItem>
                            <MenuItem value="approved">approved</MenuItem>
                            <MenuItem value="suspended">suspended</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: 240 }}>
                        <InputLabel id="demo-simple-select-label">Rank</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Rank"
                        name="rank"
                        value={formData.rank}
                        onChange={handleChange}
                        >
                            <MenuItem value="regular">regular</MenuItem>
                            <MenuItem value="star">star</MenuItem>
                            <MenuItem value="diamond">diamond</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item sx={{ m:2}}>
                    <FormControlLabel
                    control={
                        <Switch
                        name="is_bulk_seller"
                        value={formData.is_bulk_seller}
                        onChange={handleBoolChange}
                        />
                    }
                    label="Is Bulk Seller"
                    />
                    <FormControlLabel
                    control={
                        <Switch
                        name="is_retailer"
                        value={formData.is_retailer}
                        onChange={handleBoolChange}
                        />
                    }
                    label="Is Retailer"
                    />
                </Grid>
                <Grid item sx={{ m:2}}>
                    <UploadFile 
                    label="Upload Hub Image"
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
                        Register Hub
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default RegisterHub;
