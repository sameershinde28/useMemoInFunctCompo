import React from "react";

export default class User extends React.Component {
  render() {
    console.log("re-rendering ");
    return (
      <div>
        <h2>User Component {this.props.count}</h2>
      </div>
    );
  }
}
