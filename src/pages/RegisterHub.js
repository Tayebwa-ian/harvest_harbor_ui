import { Container, Grid, TextField, Typography, FormControl, MenuItem, Select, InputLabel, Switch, FormControlLabel, Button } from "@mui/material";
import * as React from 'react';
import UploadFile from "../components/UploadFile";

function RegisterHub() {
    const [formData, setFormData] = React.useState({
        description: "",
        name: "",
        status: "",
        rank: "",
        owner_id: "",
        is_bulk_seller: false,
        is_retailer: false
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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
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
                <Grid xs={12} md={12} lg={12}>
                    <TextField 
                    required
                    label="Hub Name"
                    sx={{ m: 1, width: 600 }}
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid xs={12} md={12} lg={12}>
                    <TextField
                    required
                    id="outlined-multiline-static"
                    sx={{ m: 1, width: 600 }}
                    label="Hub Description"
                    multiline
                    rows={5}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid xs={12} md={12} lg={12} sx={{ m:2}}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Hub Owner</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Owner"
                        name="owner_id"
                        value={formData.owner_id}
                        onChange={handleChange}
                        >
                            <MenuItem value="id_1">owner 1</MenuItem>
                            <MenuItem value="is_2">owner 2</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid sx={{ mb:2}}>
                    <FormControl sx={{ m: 1, width: 250 }}>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        >
                            <MenuItem value="active">active</MenuItem>
                            <MenuItem value="pending">pending</MenuItem>
                            <MenuItem value="approved">approved</MenuItem>
                            <MenuItem value="suspended">suspended</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: 250 }}>
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
                <Grid sx={{ m:2}}>
                    <FormControlLabel
                    required
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
                    required
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
                <Grid sx={{ m:2}}>
                    <UploadFile 
                    label="Upload Hub Image"
                    fileName={fileName}
                    handleFileChange={handleFileChange}
                    handleFileDelete={handleFileDelete}
                    />
                </Grid>
                <Grid xs={12} sx={{ m:2}}>
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
