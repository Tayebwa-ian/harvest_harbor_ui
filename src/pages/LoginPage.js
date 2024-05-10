import { Container, TextField, FormControl, InputLabel, OutlinedInput, IconButton, Grid, Button, Typography, Link } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as React from 'react';


function LoginPage(){
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Container sx={{ width: 400, mt:10, mb: 10 }}>
            <Typography
            variant="h5"
            sx={{ mb:2 }}
            >
                Have an account Login here
            </Typography>
            <form>
                <Grid container>
                    <TextField 
                    required
                    label="email"
                    sx={{ m: 1, width: 300 }}
                    variant="outlined"
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
                        />
                    </FormControl>
                </Grid>
                <Grid container>
                    <Button
                    sx={{ m: 1, width: 300, text: "bold" }}
                    variant="contained"
                    >
                        Login
                    </Button>
                </Grid>
            </form>
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
                New User, Register <Link>here</Link>
            </Typography>
        </Container>
    );
}

export default LoginPage;
