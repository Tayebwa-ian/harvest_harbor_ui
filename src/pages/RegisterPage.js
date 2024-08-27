import { Container, TextField, Grid, Button, Typography, Link, InputLabel, FormControl, IconButton, OutlinedInput, Radio, FormControlLabel, RadioGroup, FormLabel } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as React from 'react';
import postOrUpdate from "../CRUD/postOrUpdate";


function RegisterPage(){

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        phone_number: "",
        username: "",
        confirm_password: "",
        is_farmer: false,
        is_admin: false,
        is_support: false,
        is_customer: true,
    });
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [userType, setUserType] = React.useState(null)

    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show)

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
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
        delete formData.confirm_password;
        formData[userType] = true;
        const {data, error, statusCode} = await postOrUpdate(`http://127.0.0.1:5000/api/auth/register`, formData);
        console.log(data);
        console.log(error);
        console.log(statusCode);
    };

    const handleUserType = (event) => {
        const value = event.target.value;
        setUserType(value);
    };

    return (
        <Container sx={{ width: 600, mt:5, mb: 5, textAlign: "center" }}>
            <Typography
            variant="h5"
            sx={{ m: 2 }}
            >
                User Registration
            </Typography>
            <Grid container spacing={-8}>
                <Grid item md={12} lg={12} sx={{m: 2}}>
                    <TextField
                    fullWidth
                    required
                    label="email"
                    variant="outlined"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item md={12} lg={12} sx={{m: 2}}>
                    <TextField
                    fullWidth
                    required
                    label="username"
                    variant="outlined"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item md={12} lg={12} sx={{m: 2}}>
                    <TextField
                    fullWidth
                    required
                    label="Phone Number"
                    variant="outlined"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item md={12} lg={12} sx={{m: 2}}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">What kind of account are you creating</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="userType"
                            onChange={handleUserType}
                            value={userType}
                        >
                            <FormControlLabel 
                            control={<Radio
                                value="is_customer"
                                />}
                            label="Customer"
                            />
                            <FormControlLabel 
                            control={<Radio
                                value="is_farmer"
                                />}
                            label="Farmer"
                            />
                            <FormControlLabel 
                            control={<Radio
                                value="is_support"
                                />}
                            label="Support"
                            />
                            <FormControlLabel 
                            control={<Radio
                                value="is_admin"
                                />}
                            label="Admin"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item md={12} lg={12} sx={{m: 2}}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                            required
                            name="password"
                            value={FormData.password}
                            onChange={handleChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={12} lg={12} sx={{m: 2}}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            id="confirm_password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowConfirmPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Confirm Password"
                            required
                            name="confirm_password"
                            value={FormData.confirm_password}
                            onChange={handleChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={12} lg={12} sx={{m: 2}}>
                    <Button
                    fullWidth
                    variant="contained"
                    onClick={handleSubmit}
                    >
                        Register
                    </Button>
                    <Typography
                    variant="h6"
                    sx={{ mt:4 }}
                    >
                        You have an account, Login <Link>here</Link>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default RegisterPage;
