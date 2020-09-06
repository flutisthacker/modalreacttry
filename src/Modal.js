import React from "react";
export default class Modal extends React.Component {
  constructor() {
    super();
    this.state = { showModal: false };
    const handleToggleModal = () =>
      this.setState({
        showModal: !this.state.showModal
      });
  }

  render() {
    return (
      <div>
        <h1>React modal</h1>
        <button onClick={this.handleToggleModal}>Open modal</button>
        <small>samaahrjan</small>
        {this.state.showModal && (
          <div className="modal">
            <button onClick={this.handleToggleModal}>x</button>
            <p> hello world</p>
          </div>
        )}
      </div>
    );
  }
}
