import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/Todolist";

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    // shd: false,
    editItem: false
  };
  handleChange = e => {
    this.setState({ item: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = { id: this.state.id, title: this.state.item };
    // if (newItem.title.length < 1) {
    //   this.setState({ shd: true });
    // }
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };
  clearList = () => {
    this.setState({ items: [] });
  };
  handleDelete = id => {
    const filteredItem = this.state.items.filter(item => item.id != id);
    this.setState({ items: filteredItem });
  };
  handleEdit = id => {
    const filteredItem = this.state.items.filter(item => item.id != id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({ items: filteredItem, item: selectedItem.title, id: id,editItem:true });
  };
  // addName = id => {
  //   console.log(`add name ${id}`);
  // };

  // Tabaway = ({ currentTarget: input }) => {
  //   console.log(input.value);
  // };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Todo Input </h3>
            <TodoInput
              shd={this.state.shd}
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              // handleDelete={() => this.handleDelete(this.state.id)}
              // Tabaway={this.Tabaway}
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              addName={this.addName}
            />
          </div>
        </div>
      </div>
    );
  }
}
