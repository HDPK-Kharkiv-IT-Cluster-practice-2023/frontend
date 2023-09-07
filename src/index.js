import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from "@mui/material";
import theme from './theme'
import CreationFormCard from "./components/CreationFormCard";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const resultDiv = document.getElementById("result");
    const attackSlider = document.getElementById("attack");
    const armorSlider = document.getElementById("armor");
    const healthSlider = document.getElementById("health");
    const critical_attackSlider = document.getElementById("critical_attack");
    const luckSlider = document.getElementById("luck");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Заполнение формы

        // Получение знач
        const name = form.elements.name.value;
        const attack = attackSlider.value;
        const armor = armorSlider.value;
        const health = healthSlider.value;
        const critical_attack = critical_attackSlider.value;
        const luck = luckSlider.value;

        // Выводод результата
        resultDiv.innerHTML = "Ім'я:" + name + "<br>" +
            "Атака:" + attack + "<br>" +
            "Захист:" + armor + "<br>" +
            "Здоров'я':" + health + "<br>" +
            "Критичний урон:" + critical_attack + "<br>" +
            "Удача:" + luck;
            });
            });