import React, { useState } from 'react';
import CreationFormCard from "./components/CreationFormCard";
import {Box, Stack} from "@mui/material";
import ResultForm from "./components/ResultForm";

function App() {
    return (
        <Box padding="44px 0 44px 0">
            <Stack direction="row" spacing={2} justifyContent="center">
                <CreationFormCard />
                <ResultForm />
            </Stack>
        </Box>
    );
}

export default App;


