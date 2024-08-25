import { Container, Grid, TextField, Typography, FormControl, MenuItem, Select, InputLabel, Switch, FormControlLabel, Button } from "@mui/material";
import * as React from 'react';
import UploadFile from "../components/UploadFile";
import postOrUpdate from "../CRUD/postOrUpdate";
import { useNavigate } from "react-router-dom";

function RegisterHub() {
    const [formData, setFormData] = React.useState({
        description: "",
        name: "",
        status: "",
        rank: "",
        is_bulk_seller: false,
        is_retailer: false
    })
    const [file, setFile] = React.useState(null);
    const [fileName, setFileName] = React.useState(null);
    const navigate = useNavigate()

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const hub = await postOrUpdate(`http://127.0.0.1:5000/api/core/hubs`, formData);
        const fileFormData = new formData();
        fileFormData.append("file", file)
        const response = await postOrUpdate(`http://127.0.0.1:5000/api/core/${hub.id}/hubimages`, fileFormData);
        console.log(response);
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
                            <MenuItem value="active">active</MenuItem>
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
