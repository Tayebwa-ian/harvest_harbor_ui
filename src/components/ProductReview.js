import { CalendarMonthOutlined } from "@mui/icons-material";
import { Avatar, Box, IconButton, Paper, Typography } from "@mui/material"

export default function ProductReview() {
    return (
        <Paper
        sx={{
            p: 5,
        }}
        >
            <Typography
            variant="body1"
            >
                The fruit was delicious and succulent.
            </Typography>
            <br />
            <Box
            sx={{
                display: "flex",
                ml: 1,
            }}
            >
                <Avatar
                alt="Reviewer"
                src="/src/static/images/avatar/avatar.jpg"
                sx={{
                    width: 25,
                    height: 25,
                    mr: 2
                }}
                />
                <em>From: tayebwa ian</em>
            </Box>
            <IconButton>
                <CalendarMonthOutlined
                fontSize="medium"
                sx={{
                    mr: 1
                }}
                />
                <Typography>
                    22/03/2023
                </Typography>
            </IconButton>
        </Paper>
    );
}
