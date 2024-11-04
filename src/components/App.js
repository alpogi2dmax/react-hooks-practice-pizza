import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [ pizzas, setPizzas] = useState([])
  const [ pizzaEdit, setPizzaEdit ] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
      .then(r => r.json())
      .then(data => setPizzas(data))
  },[])

  function editPizza(id) {
    setPizzaEdit(id)
  }

  function editPizzas(newPizza) {
    fetch(`http://localhost:3001/pizzas/${newPizza.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        topping: newPizza.topping,
        size: newPizza.size,
        vegetarian: newPizza.vegetarian
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => setPizzas(pizzas.map(pizza => {
        if (pizza.id === updatedItem.id) {
          return updatedItem
        } else {
          return pizza
        }
      })))

    
  }

  return (
    <>
      <Header />
      <PizzaForm pizzaEdit={pizzaEdit} onEditPizzas={editPizzas}/>
      <PizzaList pizzas={pizzas} onEditPizza={editPizza}/>
    </>
  );
}

export default App;
