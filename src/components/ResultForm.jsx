import {Box} from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

function ResultForm() {
    return (
        <Box p={2}>
            <Card sx={{
                borderRadius: '24px',
                width: 600,
                height: 600,
                padding: '18px 20px 18px 20px',
                bgcolor: 'dark2.main',
                color: 'lightD1.main',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                mx: '5px',
            }}>
                <CardContent>
                    <Typography sx={{fontSize: 50, textAlign: 'center'}}>
                        Result
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default ResultForm;
