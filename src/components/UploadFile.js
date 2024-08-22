import { Button, Grid, Input, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

function UploadFile({ label, fileName, handleFileChange, handleFileDelete }) {

    return (
        <Grid>
            <Input
            type="file"
            onChange={handleFileChange}
            >
            </Input>
            {fileName ?
            <Grid>
                <Grid xs={8}>
                    {fileName}
                </Grid>
                <Grid xs={4}>
                    <Button onClick={handleFileDelete}>
                        <IconButton sx={{ color: "danger" }}>
                            <Delete sx={{ color: 'red', }} />
                        </IconButton>
                    </Button>
                </Grid>
            </Grid>
             : <p>{label}</p>}
        </Grid>
    );
}

export default UploadFile;
