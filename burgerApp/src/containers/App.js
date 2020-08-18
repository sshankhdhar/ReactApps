import React, { Component , useState} from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import styled from 'styled-components';
import classes from './App.css';
// import Radium, {St yleRoot} from 'radium';

// const StyledButton = styled.button`
//       background-color: ${props => props.alt ? 'red' : 'green'};
//       color: white;
//       font: inherit;
//       border:1px solid blue;
//       padding:8px;
//       cursor: pointer;

//       &:hover {
//         background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//         color:black;
//       }`;

// Class Component
class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    // this.state = {
    //   persons:[
    //     {id: 'dfdf' , name: 'Max', age: 28},
    //     {id: 'dfh' , name: 'Manu', age: 29},
    //     {id: 'ghjgh' , name: 'Suzie', age: 29}
    //   ],
    //   otherState:'',
    //   showPersons:false
    // }
  }
  state = {
    persons:[
      {id: 'dfdf' , name: 'Max', age: 28},
      {id: 'dfh' , name: 'Manu', age: 29},
      {id: 'ghjgh' , name: 'Suzie', age: 29}
    ],
    otherState:'',
    showPersons:false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }
  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }
  deleteNameHandeler = (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons:persons });
  }
  nameCHangedHandler =(event, id) =>{
    // Don't do this.  this.state.persons[0].name = "Maximalian"
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});
  }

  togglePersonsHandeler = () =>{
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
  }
  render() {
    // const style ={
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font:'inherit',
    //   border:'1px solid blue',
    //   padding:'8px',
    //   cursor:'pointer',
    //   ':hover':{
    //     backgroundColor: 'lightgreen',
    //     color:'black'
    //   }
    // };

    console.log('[App.js] render');
    let persons = null;

    if(this.state.showPersons){
        persons= (
            <Persons
             persons = {this.state.persons}
             clicked = {this.deleteNameHandeler}
             changed = {this.nameCHangedHandler}
            />
        );
        // style.backgroundColor = 'red';
        // style[':hover']={
        //   backgroundColor: 'salmon',
        //   color:'black'
        // }
       
    }

    return (
      // <StyleRoot>
      <div className={classes.App}>
        {/* <button onClick={() => {
          this.setState({showCockpit : false});
        }
        }>Remove Cockpit</button> */}
        {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandeler}>Toggle Persons</StyledButton> */}
          {this.state.showCockpit ? <Cockpit title={this.props.appTitle}
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandeler}/>: null
      }
          {persons}  
      </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;


// Hooks Function Component 

// const app = (props) => {

//   const [personState, setPersons] = useState({
//     persons:[
//       {name: 'Max', age: 28},
//       {name: 'Manu', age: 29},
//       {name: 'Suzie', age: 29}
//     ],
//     otherProperty:"sdfsdfsd"
//   });
  
  
//   const [otherState, setOtherstate] = useState("dfsdgdfdf");
  
//   console.log(personState, otherState);
//   const switchNameHandeler = () =>{
//     // Don't do this.  this.state.persons[0].name = "Maximalian"
//     setPersons({
//       persons:[
//         {name: 'Maximalian', age: 28},
//         {name: 'Manu', age: 29},
//         {name: 'Stephanie', age: 29}
//       ]
//     })
//   }
   
//       return (
//         <div className="App">
//           <h1>Hi I am React App!</h1>
//           <p>This is really Working</p>
//           <button onClick={switchNameHandeler}>Switch Name</button>
//           <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
//           <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies are Makig Love!!</Person>
//           <Person name={personState.persons[2].name} age={personState.persons[2].age}>My Hobbies are Makig Love!!</Person>
//         </div>
//       );
//   }
  
//   export default app;
