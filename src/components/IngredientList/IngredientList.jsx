// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({availableIngredients, currentIngredients, setCurrentIngredients}) => {

    const handleAdd = (item) => {
        setCurrentIngredients([...currentIngredients, item]);
    }

    return (
        <ul>
            {availableIngredients.map((item, index) => (
                <li key={index} style={{backgroundColor: item.color}}>
                    <p>{item.name}</p>
                    <button onClick={() => handleAdd(item)}>+</button>
                </li>
            ))}
        </ul>
    );
};

export default IngredientList;