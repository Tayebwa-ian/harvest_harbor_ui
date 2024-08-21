import { Container, Grid, Typography } from "@mui/material";
import HorizontalHubCard from "../components/HorizontalHubCard";
import useGet from "../custom_hooks/useGet";

export default function HubsPage() {
    const {data: hubs, isPending, error} = useGet("http://127.0.0.1:5000/api/core/hubs");
    console.log(hubs);
    console.log(isPending);
    console.log(error);
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
