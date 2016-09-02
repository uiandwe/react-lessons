class ContactInfo extends React.Component {
  render() {
    return (
      <div>{this.props.contact.name} {this.props.contact.phone}</div>
    )
  }
}

class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contactData : [
        {name: 'aaa', phone:'010-1010-1010'},
          {name: 'bbb', phone:'010-1010-1010'},
          {name: 'ccc', phone:'010-1010-1010'},
          {name: 'ddd', phone:'010-1010-1010'},
      ]
    }
  }

  render(){
    const mapTocomponent = (data) =>{
      return data.map((x, i)=>{
        return (<ContactInfo contact={x} key={i} />);
      })
    };


    return (
      <div>
        { mapTocomponent(this.state.contactData) }
      </div>
    );

  }
}

class App extends React.Component{
  render(){
    
    return(
      <Contact/>
    )
  }
}

React.render(<App ></App>, document.getElementById('root'))

