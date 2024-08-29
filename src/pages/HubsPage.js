import { Container, Grid, Typography } from "@mui/material";
import HorizontalHubCard from "../components/HorizontalHubCard";
import useGet from "../CRUD/get";

export default function HubsPage() {
    const {data: hubs, isPending, error} = useGet("http://127.0.0.1:5000/api/core/hubs");
    return (
        <Container
        sx={{
            mb: 5,
            mt: 5,
        }}
        >
            { hubs &&
            <Grid container>
                <Grid item md={2}>
                    <Typography>
                        Filters
                    </Typography>
                </Grid>
                <Grid item xs={12} md={10}>
                    { hubs.map((hub, index) => (
                        <HorizontalHubCard key={index} data={hub} />
                    ))}
                </Grid>
            </Grid>
            }
            { isPending && <p>Loading............</p>}
            { error && <p>{error}</p>}
        </Container>
    );
}
