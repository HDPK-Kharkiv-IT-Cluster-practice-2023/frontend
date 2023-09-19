import React, { useState, useEffect } from 'react';
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

    const [submitted, setSubmitted] = useState(false);

    const [data, setData] = useState([{}]);

    useEffect(() => {
        fetch("http://localhost:5000/").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, []);

    const handleFirstFormSubmit = (values) => {
        setFormValues(values);
        setSubmitted(true);
    };

    return (
        <Box padding="44px 0 44px 0">
            <Stack direction="row" spacing={2} justifyContent="center">
                <CreationFormCard onSubmit={handleFirstFormSubmit} initialValues={formValues} />
                <ResultForm formValues={formValues} submitted={submitted} />

            </Stack>
        </Box>
    );
}

export default App;


