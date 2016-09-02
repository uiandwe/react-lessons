class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value : 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      value : this.state.value +1
    });
  }
  render(){
    return(
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.handleClick}>Press</button>
      </div>
    );
  }
}


class App extends React.Component{
  render(){
    
    return(
      <Counter/>
    )
  }
}

React.render(<App ></App>, document.getElementById('root'))

