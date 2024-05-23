import { Container, Grid, Typography } from "@mui/material";
import HorizontalHubCard from "../components/HorizontalHubCard";

export default function HubsPage() {
    return (
        <Container
        sx={{
            mb: 5,
            mt: 5,
        }}
        >
            <Grid container>
                <Grid item md={2}>
                    <Typography>
                        Filters
                    </Typography>
                </Grid>
                <Grid item xs={12} md={10}>
                    <HorizontalHubCard />
                    <HorizontalHubCard />
                    <HorizontalHubCard />
                    <HorizontalHubCard />
                </Grid>
            </Grid>
        </Container>
    );
}
