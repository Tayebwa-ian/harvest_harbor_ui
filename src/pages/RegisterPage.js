import { Container, TextField, Grid, Button, Typography, Link } from "@mui/material";
import * as React from 'react';


function RegisterPage(){

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        console.log(formData);
    };

    return (
        <Container sx={{ width: 650, mt:10, mb: 10, textAlign: "center" }}>
            <Typography
            variant="h5"
            sx={{ mb:2, mr:10 }}
            >
                User Registration
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={-8}>
                    <Grid md={12} lg={6}>
                        <TextField 
                        required
                        label="email"
                        sx={{ m: 1, width: 250 }}
                        variant="outlined"
                        />
                    </Grid>
                    <Grid md={12} lg={6}>
                        <TextField 
                        required
                        label="username"
                        sx={{ m: 1, width: 250 }}
                        variant="outlined"
                        />
                    </Grid>
                    <Grid md={12} lg={6}>
                        <TextField 
                        required
                        label="password"
                        sx={{ m: 1, width: 250 }}
                        variant="outlined"
                        />
                    </Grid>
                    <Grid md={12} lg={6}>
                        <TextField 
                        required
                        label="confirm password"
                        sx={{ m: 1, width: 250 }}
                        variant="outlined"
                        />
                    </Grid>
                    <Grid>
                        <Button
                        sx={{ m: 1, width: 520, text: "bold" }}
                        variant="contained"
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
            </form>
        </Container>
    );
}

export default RegisterPage;
