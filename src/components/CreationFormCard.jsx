import React, {useState} from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import {Button, Grid, Slider, TextField} from "@mui/material";

function CreationFormCard({ onSubmit, initialValues }) {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(values);
    };

    return (
        <form onSubmit={handleSubmit}>
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
                        Character creation
                    </Typography>
                    <Typography sx={{fontSize: 14}}>
                        Name
                    </Typography>
                    <TextField
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        InputProps={{
                            style: {
                                padding: '10px 16px',
                                borderRadius: '4px',
                                borderWidth: '2px',
                                borderColor: 'rgba(228, 232, 236, 0.25)',
                                borderStyle: 'solid',
                                background: 'rgba(255, 255, 255, 0)',
                                height: '48px',
                                color: 'white',
                            },
                        }}
                        required
                    />

                    <div style={{ marginBottom: '16px' }}></div>

                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={2}>
                            <Typography variant="body1" gutterBottom>
                                Attack
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Slider
                                id="attack"
                                name="attack"
                                value={values.attack}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                min={5}
                                max={20}
                                defaultValue={10}
                                required
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                id="attack"
                                name="attack"
                                value={values.attack}
                                onChange={handleChange}
                                type="number"
                                InputProps={{
                                    inputProps: { min: 5, max: 20 },
                                    style: { color: 'white' },
                                }}
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                    </Grid>

                    <div style={{ marginBottom: '16px' }}></div>

                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={2}>
                            <Typography variant="body1" gutterBottom>
                                Armor
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Slider
                                id="armor"
                                name="armor"
                                value={values.armor}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                min={1}
                                max={10}
                                defaultValue={5}
                                required
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                id="armor"
                                name="armor"
                                value={values.armor}
                                onChange={handleChange}
                                type="number"
                                InputProps={{
                                    inputProps: { min: 1, max: 10 },
                                    style: { color: 'white' },
                                }}
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                    </Grid>

                    <div style={{ marginBottom: '16px' }}></div>

                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={2}>
                            <Typography variant="body1" gutterBottom>
                                Health
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Slider
                                id="health"
                                name="health"
                                value={values.health}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                min={50}
                                max={100}
                                defaultValue={75}
                                required
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                id="health"
                                name="health"
                                value={values.health}
                                onChange={handleChange}
                                type="number"
                                InputProps={{
                                    inputProps: { min: 50, max: 100 },
                                    style: { color: 'white' },
                                }}
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                    </Grid>

                    <div style={{ marginBottom: '16px' }}></div>

                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={2}>
                            <Typography variant="body1" gutterBottom>
                                Crit. attack
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Slider
                                id="criticalAttack"
                                name="criticalAttack"
                                value={values.criticalAttack}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                min={1}
                                max={10}
                                defaultValue={5}
                                required
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                id="criticalAttack"
                                name="criticalAttack"
                                value={values.criticalAttack}
                                onChange={handleChange}
                                type="number"
                                InputProps={{
                                    inputProps: { min: 1, max: 10 },
                                    style: { color: 'white' },
                                }}
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                    </Grid>

                    <div style={{ marginBottom: '16px' }}></div>

                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={2}>
                            <Typography variant="body1" gutterBottom>
                                Luck
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Slider
                                id="luck"
                                name="luck"
                                value={values.luck}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                min={1}
                                max={10}
                                defaultValue={5}
                                required
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                id="luck"
                                name="luck"
                                value={values.luck}
                                onChange={handleChange}
                                type="number"
                                InputProps={{
                                    inputProps: { min: 1, max: 10 },
                                    style: { color: 'white' },
                                }}
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button type="submit" variant="contained" color="orange">Generate</Button>
                </CardActions>
            </Card>
        </form>
    )
}
export default CreationFormCard;