// src/App.jsx

import './App.css';
import { useState } from 'react';
import { useId } from 'react';
import BurgerStack from './components/BurgerStack/BurgerStack';
import IngredientList from './components/IngredientList/IngredientList';

const App = () => {
  const availableIngredients = [
    { id: crypto.randomUUID(), name: 'Kaiser Bun', color: 'saddlebrown' },
    { id: crypto.randomUUID(), name: 'Sesame Bun', color: 'sandybrown' },
    { id: crypto.randomUUID(), name: 'Gluten Free Bun', color: 'peru' },
    { id: crypto.randomUUID(), name: 'Lettuce Wrap', color: 'olivedrab' },
    { id: crypto.randomUUID(), name: 'Beef Patty', color: '#3F250B' },
    { id: crypto.randomUUID(), name: 'Soy Patty', color: '#3F250B' },
    { id: crypto.randomUUID(), name: 'Black Bean Patty', color: '#3F250B' },
    { id: crypto.randomUUID(), name: 'Chicken Patty', color: 'burlywood' },
    { id: crypto.randomUUID(), name: 'Lettuce', color: 'lawngreen' },
    { id: crypto.randomUUID(), name: 'Tomato', color: 'tomato' },
    { id: crypto.randomUUID(), name: 'Bacon', color: 'maroon' },
    { id: crypto.randomUUID(), name: 'Onion', color: 'lightyellow' },
    { id: crypto.randomUUID(), name: 'Cheddar Cheese', color: '#FDE18B' },
    { id: crypto.randomUUID(), name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const [currentIngredients, setCurrentIngredients] = useState([]);

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList availableIngredients={availableIngredients} currentIngredients={currentIngredients} setCurrentIngredients={setCurrentIngredients}/>
      <BurgerStack currentIngredients={currentIngredients} setCurrentIngredients={setCurrentIngredients}/>
      </section>
    </main>
  );
};

export default App;