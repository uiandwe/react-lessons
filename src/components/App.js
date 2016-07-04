import React from 'react';
import ReactDOM from 'react-dom'

let mixin = InnerComponent => class extends React.Component{
	constructor(){
		super();
		this.update = this.update.bind(this);
		this.state = {val: 0}
	}
	update(){
		this.setState({val: this.state.val + 1})
	}
	componentWillMount(){
		console.log('will')
	}

	render(){
		return <InnerComponent 
		update = {this.update}
		{...this.state}
		{...this.props} />
	}
	componentDidMount(){
		console.log('mounted')
	}

}

const Button = (props) => <button onClick={props.update}> {props.txt}-{props.val}</button>

let ButtonMixed  = mixin(Button)
class App extends React.Component{

	
	render(){
		return(
			<div>
				<ButtonMixed txt="Button" />
			</div>
		);
	}

	
}

App.defaultProps = {txt : 'button'}
export default App