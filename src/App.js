import React, { Component } from "react";
import ListItem from "./components/listItem"
import Title from "./components/title"

class App extends Component {
  state = {
    newTodo: "",
    todos: [
      "Matcha Latte",
      "Vanilla Latta",
      "Caramel Latte"
    ]
  };

  render() {
    return (
      <div>
        <Title title={"BrewLab"}> </Title>
        {this.state.todos.map((todo, i) => (
          <div>
            <ListItem key={i} item={todo} />
            <p> </p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;