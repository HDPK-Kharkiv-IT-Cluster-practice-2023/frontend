import React, { useState } from 'react';
import CreationFormCard from "./components/CreationFormCard";
import {Box, Stack} from "@mui/material";
import ResultForm from "./components/ResultForm";

function App() {
    const [formValues, setFormValues] = useState({
        name: '',
        attack: 0,
        armor: 0,
        health: 0,
        criticalAttack: 0,
        luck: 0,
    });

    const handleFirstFormSubmit = (values) => {
        setFormValues(values);
    };

    return (
        <Box padding="44px 0 44px 0">
            <Stack direction="row" spacing={2} justifyContent="center">
                <CreationFormCard onSubmit={handleFirstFormSubmit} initialValues={formValues} />
                <ResultForm formValues={formValues} />
            </Stack>
        </Box>
    );
}

export default App;


