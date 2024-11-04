import React, { useState, useEffect } from "react";

function PizzaForm({pizzaEdit, onEditPizzas}) { 

  const [newTopping, setNewTopping] = useState(pizzaEdit.topping || "")
  const [newSize, setNewSize] = useState(pizzaEdit.size || "")
  const [newVegetarian, setNewVegetarian] = useState(pizzaEdit.vegetarian ? 'Vegetarian' : 'Not Vegetarian')

  useEffect(() => {
    setNewTopping(pizzaEdit.topping || '');
    setNewSize(pizzaEdit.size || 'Small');
    setNewVegetarian(pizzaEdit.vegetarian ? 'Vegetarian' : 'Not Vegetarian' || 'Vegetarian')
  }, [pizzaEdit]);

  console.log(newTopping, newSize, newVegetarian)

  function handleToppingChange(e) {
    setNewTopping(e.target.value)
  }

  function handleSizeChange(e) {
    setNewSize(e.target.value)
  }

  function handleVegetarianChange(e) {
    setNewVegetarian(e.target.value)
  }

  function handlePizzaSubmit(e) {
    e.preventDefault()
    let pizzaObj = {
      id: pizzaEdit.id,
      topping: newTopping,
      size: newSize,
      vegetarian: newVegetarian === 'Vegetarian' ? true : false
    }
    onEditPizzas(pizzaObj)
  }

  return (
    <form onSubmit={handlePizzaSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={newTopping}
            onChange={handleToppingChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={newSize} onChange={handleSizeChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={newVegetarian === 'Vegetarian'}
              onChange={handleVegetarianChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={newVegetarian === 'Not Vegetarian'}
              onChange={handleVegetarianChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
