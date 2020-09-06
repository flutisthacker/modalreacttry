export default class Modal extends React.Component{
  constructor(){
    super();
    this.state = { showModal: false };
  handleToggleModal = () => this.setState({
   showModal: !this.state.showModal 
  });}

  render(){
    return(
      <h1>React modal</h1>
      <button onClick={!this.handleToggleModal}>Open modal</button>
      {this.state.showModal && (
        <div className="modal">
          <button onClick={this.handleToggleModal}>x</button>
          <p> hello world</p>
        </div>
      )}
    );
  }
}
