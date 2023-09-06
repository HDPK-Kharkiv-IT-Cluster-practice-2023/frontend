import React, { useState } from 'react';

function App() {
    const [name, setName] = useState('');
    const [attack, setAttack] = useState(50);
    const [armor, setArmor] = useState(50);
    const [health, setHealth] = useState(50);
    const [criticalAttack, setCriticalAttack] = useState(50);
    const [luck, setLuck] = useState(50);
    const [result, setResult] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Создайте объект бойца с характеристиками
        const fighter = {
            name,
            attack,
            armor,
            health,
            criticalAttack,
            luck,
        };

        // Здесь можно выполнить дополнительную логику, основанную на характеристиках бойца

        // Отобразите результат
        const resultText = `Створено бійця:\nІм'я: ${fighter.name}\nАтака: ${fighter.attack}\nЗахист: ${fighter.armor}\nЗдоров'я: ${fighter.health}\nКритичний урон: ${fighter.criticalAttack}\nУдача: ${fighter.luck}`;
        setResult(resultText);
    };

    return (
        <div>
            <h1>Заповніть форму</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Ім'я:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                /><br /><br />

                <label htmlFor="attack">Атака:</label>
                <input
                    type="range"
                    id="attack"
                    name="attack"
                    min="0"
                    max="100"
                    value={attack}
                    onChange={(e) => setAttack(parseInt(e.target.value))}
                /><br /><br />

                <label htmlFor="armor">Захист:</label>
                <input
                    type="range"
                    id="armor"
                    name="armor"
                    min="0"
                    max="100"
                    value={armor}
                    onChange={(e) => setArmor(parseInt(e.target.value))}
                /><br /><br />

                <label htmlFor="health">Здоров'я:</label>
                <input
                    type="range"
                    id="health"
                    name="health"
                    min="0"
                    max="100"
                    value={health}
                    onChange={(e) => setHealth(parseInt(e.target.value))}
                /><br /><br />

                <label htmlFor="critical_attack">Критичний урон:</label>
                <input
                    type="range"
                    id="critical_attack"
                    name="critical_attack"
                    min="0"
                    max="100"
                    value={criticalAttack}
                    onChange={(e) => setCriticalAttack(parseInt(e.target.value))}
                /><br /><br />

                <label htmlFor="luck">Удача:</label>
                <input
                    type="range"
                    id="luck"
                    name="luck"
                    min="0"
                    max="100"
                    value={luck}
                    onChange={(e) => setLuck(parseInt(e.target.value))}
                /><br /><br />

                <input type="submit" value="Згенерувати бійця" />
            </form>

            <div id="result">{result}</div>
        </div>
    );
}

export default App;