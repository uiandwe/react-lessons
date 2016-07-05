import React from 'react';
import ReactDOM from 'react-dom'


class App extends React.Component{
    constructor() {
        super();
        this.state = {
            data: [
                {id: 1, name: "simon b"},
                {id: 2, name: "Thomas b"},
                {id: 3, name: "will button"},
                {id: 4, name: "Ben clinkcinbeard"},
                {id: 5, name: "kent dodds"},
                {id: 6, name: "trevor ewen"},
                {id: 7, name: "aaron frst"},
                {id: 8, name: "joel hooks"},
                {id: 9, name: "jafar husain"},
                {id: 10, name: "tim kindberg"},
                {id: 11, name: "john lindquist"},
                {id: 12, name: "joe maddalone"},
                {id: 13, name: "tyler mcginnes"},
                {id: 14, name: "scott moss"},
                {id: 15, name: "robert penner"},
                {id: 15, name: "keith peters"},
                {id: 16, name: "lukas ruebbelke"},
                {id: 17, name: "keith peters"},
                {id: 18, name: "bretts sholl"}

            ]
        }
    }
    render(){
        let rows = this.state.data.map( person=> {
            return <PersonRow key={person.id} data={person} />
        })

        return <table>
            <tbody>{rows}</tbody>
        </table>
    }
}

const PersonRow = (props) =>{
    return <tr>
        <td>{props.data.id}</td>
        <td>{props.data.name}</td>
    </tr>
}


export default App