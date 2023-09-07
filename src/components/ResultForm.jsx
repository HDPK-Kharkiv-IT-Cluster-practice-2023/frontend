import Card from "@mui/material/Card";
import React from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

function ResultForm({ formValues }) {
    return (
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
                <p>Name: {formValues.name}</p>
                <p>Attack: {formValues.attack}</p>
                <p>Armor: {formValues.armor}</p>
                <p>Health: {formValues.health}</p>
                <p>Critical attack: {formValues.criticalAttack}</p>
                <p>Luck: {formValues.luck}</p>
            </CardContent>
        </Card>
    )
}

export default ResultForm;
