import { Box, Button, Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import agri from "../static/images/agri.jpg"
import '../static/styles/LandingPage.css'
import { AddTask, ArrowDownwardOutlined, CompareArrowsOutlined, HandshakeOutlined, MonetizationOnOutlined, SecurityOutlined, ThumbUpOffAlt, TrendingUpOutlined } from "@mui/icons-material";

function LandingPage() {
    return (
        <Box
        sx={{
            backgroundImage: `url(${agri})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            height:700,
            textAlign: 'center',
            pt: 5,
        }}
        >
            <Typography
            variant="h2"
            >
                Harvest Harbor
            </Typography>
            <br />
            <Typography>
                We strive to reduce farm produce wastage and swiftly avail quality Agri products to consumers around Africa.
                <br />
                We believe we can contribute to better access of quality food while allowing farmers get maximum value from their work
            </Typography>
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pt: 8,
                pb: 8,
            }}
            >
                <Button
                sx={{
                    color: "white",
                    width: 150,
                    height: 50,
                }}
                variant="contained"
                color="dark"
                >
                    <b>Got to App</b>
                </Button>
            </Box> 
            <Typography
            variant="h4"
            mb={8}
            >
                <b>What we offer</b>
            </Typography>
            <Grid
            container
            sx={{
                backgroundColor: 'white',
                opacity:0.9,
            }}
            >
                <Grid
                item
                xs={12}
                md={5}
                mt={2}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
                >
                    <Typography
                    variant='h5'
                    color={"#ff6d00"}
                    >
                        <b><em>To Farmers</em></b>
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <MonetizationOnOutlined
                                fontSize="large"
                                sx={{color: "yellowgreen"}}
                                />
                            </ListItemIcon>
                            <ListItemText>
                                Maximum value from farm produce
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <TrendingUpOutlined
                                fontSize="large"
                                sx={{color: "yellowgreen"}}
                                />
                            </ListItemIcon>
                            <ListItemText>
                                Access to real time info about Agri markets
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CompareArrowsOutlined
                                fontSize="large"
                                sx={{color: "yellowgreen"}}
                                />
                            </ListItemIcon>
                            <ListItemText>
                                Linkages to new and existing markets
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowDownwardOutlined
                                fontSize="large"
                                sx={{color: "yellowgreen"}}
                                />
                            </ListItemIcon>
                            <ListItemText>
                                Minimum farm produce wastage
                            </ListItemText>
                        </ListItem>
                    </List>
                </Grid>
                <Grid
                item
                md={2}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                >
                    <div className="verticalLine"></div>
                </Grid>
                <Grid
                item
                xs={12}
                md={5}
                mt={2}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
                >
                    <Typography
                    variant='h5'
                    color={"#ff6d00"}
                    >
                        <b><em>To Consumers</em></b>
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <ThumbUpOffAlt
                                fontSize="large"
                                sx={{color: "yellowgreen"}}
                                />
                            </ListItemIcon>
                            <ListItemText>
                                Affordable and quality Agri products
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <AddTask
                                fontSize="large"
                                sx={{color: "yellowgreen"}}
                                />
                            </ListItemIcon>
                            <ListItemText>
                                Swift access to Agri products
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <HandshakeOutlined
                                fontSize="large"
                                sx={{color: "yellowgreen"}}
                                />
                            </ListItemIcon>
                            <ListItemText>
                                Shop Agri products at your convinience
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <SecurityOutlined
                                fontSize="large"
                                sx={{color: "yellowgreen"}}
                                />
                            </ListItemIcon>
                            <ListItemText>
                                Secure and trusted transactions
                            </ListItemText>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Box>
    );
}

export default LandingPage;
