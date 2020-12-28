import React from "react";
import ToDoItem from "../components/ToDoItem";
import dat from "../data.json";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dat,
    };
  }

  handleChange = (n) => {
    this.setState((prevState) => {
      const updatedData = prevState.data.map((item) => {
        if (item.name === n) {
          item.done = !(item.done);
        }
        console.log(item)
        return item;
      });
      console.log(updatedData)
      return { data: updatedData };
    });
  };

  render() {
    return (
      <div>
        {this.state.data.map((item) => (
          <ToDoItem
            key={item.id}
            data={item}
            handleChange={this.handleChange}
          />
        ))}
      </div>
    );
  }
}

export default App;
