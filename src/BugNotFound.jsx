import React from "react";

export class BugNotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h2>Bug "{this.props.id}" not found</h2>;
  }
}
