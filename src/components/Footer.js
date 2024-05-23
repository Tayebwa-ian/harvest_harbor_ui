import { Box, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";

function Footer(){
    return (
        <Box
        sx={{
        backgroundColor: "black",
        display: "flex",
        textAlign: "center",
        color: "white",
        p: 5,
        flexDirection: "column",
        justifyContent: "space-between",
        height: "35vh"
        }}
        >
            <Grid container spacing={2}>
                <Grid item xs={6} md={4} lg={3}>
                    <Typography variant="h5"
                    sx={{fontWeight: "bold", fontSize: '25px'}}
                    >
                        Top Rated Hubs
                    </Typography>
                    <List>
                        <ListItem sx={{textAlign:"center"}}>
                            <ListItemText primary="Hilez Hub"/>
                        </ListItem>
                        <ListItem sx={{textAlign:"center"}}>
                            <ListItemText primary="markenzie's"/>
                        </ListItem>
                        <ListItem sx={{textAlign:"center"}}>
                            <ListItemText primary="Unrot"/>
                        </ListItem>
                        <ListItem sx={{textAlign:"center"}}>
                            <ListItemText primary="Jule's"/>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <Typography variant="h5"
                    sx={{fontWeight: "bold", fontSize: '25px'}}
                    >
                        let's do it together
                    </Typography>
                    <List>
                        <ListItem sx={{textAlign:"center"}}>
                            <ListItemText primary="Carriers"/>
                        </ListItem>
                        <ListItem sx={{textAlign:"center"}}>
                            <ListItemText primary="Farmers"/>
                        </ListItem>
                        <ListItem sx={{textAlign:"center"}}>
                            <ListItemText primary="Experts"/>
                        </ListItem>
                        <ListItem sx={{textAlign:"center"}}>
                            <ListItemText primary="Support Team"/>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <Typography variant="h5"
                    sx={{fontWeight: "bold", fontSize: '25px'}}
                    >
                        Useful links
                    </Typography>
                    <List>
                        <ListItem sx={{textAlign:"center"}}>
                            <ListItemText primary="know more about us"/>
                        </ListItem>
                        <ListItem sx={{textAlign:"center"}}>
                            <ListItemText primary="Locations"/>
                        </ListItem>
                        <ListItem sx={{textAlign:"center"}}>
                            <ListItemText primary="Get in touch with us"/>
                        </ListItem>
                        <ListItem sx={{textAlign:"center"}}>
                            <ListItemText primary="Support Team"/>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <Typography variant="h5"
                    sx={{fontWeight: "bold", fontSize: '25px'}}
                    >
                        Where to find us
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;
