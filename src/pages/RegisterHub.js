import { Container, Grid, TextField, Typography, FormControl, MenuItem, Select, InputLabel, Switch, FormControlLabel, Button } from "@mui/material";
import * as React from 'react';
import UploadFile from "../components/UploadFile";

function RegisterHub() {
    const [status, setStatus] = React.useState('');
    const [rank, setRank] = React.useState('');
    const [owner, setOwner] = React.useState('');
    const [seller, setSeller] = React.useState(true);
    const [retailer, setRetailer] = React.useState(true);
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
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        console.log(formData);
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const handleRankChange = (event) => {
        setRank(event.target.value);
    };

    const handleOwnerChange = (event) => {
        setOwner(event.target.value);
    };

    const handleSellerChange = (event) => {
        setSeller(!event.target.checked)
    };

    const handleRetailerChange = (event) => {
        setRetailer(!event.target.checked)
    };

    return (
        <Container sx={{ width: 650, mt:5, mb: 5, textAlign: "center" }}>
            <Typography
            variant="h4"
            sx={{ mb:2, mr:10 }}
            >
                Hub Registration
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={-8}>
                    <Grid xs={12} md={12} lg={12}>
                        <TextField 
                        required
                        label="Hub Name"
                        sx={{ m: 1, width: 600 }}
                        variant="outlined"
                        />
                    </Grid>
                    <Grid xs={12} md={12} lg={12}>
                        <TextField
                        id="outlined-multiline-static"
                        sx={{ m: 1, width: 600 }}
                        label="Hub Description"
                        multiline
                        rows={5}
                        />
                    </Grid>
                    <Grid xs={12} md={12} lg={12} sx={{ m:2}}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Hub Owner</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={owner}
                            label="Owner"
                            onChange={handleOwnerChange}
                            >
                                <MenuItem value={"id_1"}>owner 1</MenuItem>
                                <MenuItem value={"is_2"}>owner 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid sx={{ mb:2}}>
                        <FormControl sx={{ m: 1, width: 250 }}>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={status}
                            label="Status"
                            onChange={handleStatusChange}
                            >
                                <MenuItem value={"active"}>active</MenuItem>
                                <MenuItem value={"pending"}>pending</MenuItem>
                                <MenuItem value={"approved"}>approved</MenuItem>
                                <MenuItem value={"suspended"}>suspended</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: 250 }}>
                            <InputLabel id="demo-simple-select-label">Rank</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={rank}
                            label="Rank"
                            onChange={handleRankChange}
                            >
                                <MenuItem value={"regular"}>regular</MenuItem>
                                <MenuItem value={"star"}>star</MenuItem>
                                <MenuItem value={"diamond"}>diamond</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid sx={{ m:2}}>
                        <FormControlLabel
                        required
                        control={
                            <Switch
                            value={seller}
                            onChange={handleSellerChange}
                            />
                        }
                        label="Is Bulk Seller"
                        />
                        <FormControlLabel
                        required
                        control={
                            <Switch
                            value={retailer}
                            onChange={handleRetailerChange}
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
                        >
                            Register Hub
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default RegisterHub;
