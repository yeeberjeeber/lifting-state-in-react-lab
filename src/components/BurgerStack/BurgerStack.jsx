// src/components/BurgerStack/BurgerStack.jsx
const BurgerStack = ( {currentIngredients, setCurrentIngredients} ) => { 

    const handleRemove = (item) => {
        setCurrentIngredients(currentIngredients.filter((el) => el.id !== item.id))
    }

    return (
        <ul>
            {currentIngredients.map((item) => (
                <li key={item.id} style={{backgroundColor: item.color}}>
                    <p>{item.name}</p>
                    <button onClick={() => handleRemove(item)}>X</button>
                </li>
            ))}
        </ul>
    );
};

export default BurgerStack;