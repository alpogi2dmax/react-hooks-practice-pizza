import React from "react";

function Pizza({pizza, onEditPizza}) {

  const { id, size, topping, vegetarian } = pizza

  function handleEditClick() {
    onEditPizza(pizza)
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? 'Vegetarinan' : 'Not Vegetarian'}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleEditClick}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
