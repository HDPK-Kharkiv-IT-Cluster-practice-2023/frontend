import React, {useState} from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import {Box, Button, Grid, Slider, TextField} from "@mui/material";

function CreationFormCard(props) {
    const [name, setName] = useState('');
    const [attack, setAttack] = useState(10);
    const [armor, setArmor] = useState(5);
    const [health, setHealth] = useState(75);
    const [criticalAttack, setCriticalAttack] = useState(5);
    const [luck, setLuck] = useState(5);

    const handleNameChange = (newValue) => {
        setName(newValue);
    };
    const handleAttackChange = (newValue) => {
        setAttack(newValue);
    };
    const handleArmorChange = (newValue) => {
        setArmor(newValue);
    };
    const handleHealthChange = (newValue) => {
        setHealth(newValue);
    };
    const handleCriticalAttackChange = (newValue) => {
        setCriticalAttack(newValue);
    };
    const handleLuckAttackChange = (newValue) => {
        setLuck(newValue);
    };

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
                        Character creation
                    </Typography>
                    <Typography sx={{fontSize: 14}}>
                        Name
                    </Typography>
                    <TextField
                        value={name}
                        onChange={(e, newValue) => handleNameChange(newValue)}
                        fullWidth
                        variant="outlined"
                        label=""
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
                                value={attack}
                                onChange={(e, newValue) => handleAttackChange(newValue)}
                                valueLabelDisplay="auto"
                                min={5}
                                max={20}
                                defaultValue={10}
                                required
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                value={attack}
                                onChange={(e) => handleAttackChange(e.target.value)}
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
                                value={armor}
                                onChange={(e, newValue) => handleArmorChange(newValue)}
                                valueLabelDisplay="auto"
                                min={1}
                                max={10}
                                defaultValue={5}
                                required
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                value={armor}
                                onChange={(e) => handleArmorChange(e.target.value)}
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
                                value={health}
                                onChange={(e, newValue) => handleHealthChange(newValue)}
                                valueLabelDisplay="auto"
                                min={50}
                                max={100}
                                defaultValue={75}
                                required
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                value={health}
                                onChange={(e) => handleHealthChange(e.target.value)}
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
                                value={criticalAttack}
                                onChange={(e, newValue) => handleCriticalAttackChange(newValue)}
                                valueLabelDisplay="auto"
                                min={1}
                                max={10}
                                defaultValue={5}
                                required
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                value={criticalAttack}
                                onChange={(e) => handleCriticalAttackChange(e.target.value)}
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
                                value={luck}
                                onChange={(e, newValue) => handleLuckAttackChange(newValue)}
                                valueLabelDisplay="auto"
                                min={1}
                                max={10}
                                defaultValue={5}
                                required
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                value={luck}
                                onChange={(e) => handleLuckAttackChange(e.target.value)}
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
                    <Button variant="contained" color="orange">Generate</Button>
                </CardActions>
            </Card>
        </Box>
    )
}
export default CreationFormCard;