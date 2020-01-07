import React, { Component } from "react";
import Item from "./TodoInput";

export default class Todolist extends Component {
  render() {
    return (
      <section>
        <h2> todo list </h2>
        <Item />
      </section>
    );
  }
}
