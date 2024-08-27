import { Container, TextField, FormControl, InputLabel, OutlinedInput, IconButton, Grid, Button, Typography } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as React from 'react';
import postOrUpdate from "../CRUD/postOrUpdate";
import userToken from "../utils/userToken";
import { useNavigate, Link } from 'react-router-dom';


function LoginPage(){
    const [formData, setFormData] = React.useState({
        email: "",
        password: ""
    })
    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate();

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
        const {data} = await postOrUpdate(`http://127.0.0.1:5000/api/auth/login`, formData);
        // save the token in the local storage
        const { setToken } = userToken();
        setToken(data);
        navigate("/home");
    };

    return (
        <Container sx={{ width: 400, mt:10, mb: 10 }}>
            <Typography
            variant="h5"
            sx={{ mb:2 }}
            >
                Have an account Login here
            </Typography>
            <Grid>
                <Grid container>
                    <TextField 
                    required
                    label="email"
                    sx={{ m: 1, width: 300 }}
                    variant="outlined"
                    name="email"
                    value={FormData.email}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid container>
                    <FormControl sx={{ m: 1, width: 300 }} variant="outlined">
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
                <Grid container>
                    <Button
                    sx={{ m: 1, width: 300, text: "bold" }}
                    variant="contained"
                    onClick={handleSubmit}
                    >
                        Login
                    </Button>
                </Grid>
            </Grid>
            <Typography
            variant="h7"
            sx={{ mt:4, ml: 2 }}
            >
                Request password <Link>reset</Link> if you forgot it
            </Typography>
            <br />
            <Typography
            variant="h6"
            sx={{ mt:4, ml: 6 }}
            >
                New User, Register <Link to={`/register`}>here</Link>
            </Typography>
        </Container>
    );
}

export default LoginPage;
