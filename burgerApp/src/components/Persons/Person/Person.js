import React, {Component} from 'react';
import classes from './Person.module.css';
// import styled  from "styled-components";
// import Radium from 'radium';

// const person = (props) => 
class Person extends Component {
// const style ={
//     '@media (min-width: 600px)':{
//         width:'95%'
//     }
// }
// const StyledDiv =  styled.div`
//     width: 60%;
//     margin: 16px;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

// @media (min-width: 600px):{
//     width:'95%'
// }`;


// const rnd = Math.random();
// if(rnd > 0.7){
//    throw new Error('something went wrong');
// }
render(){
   console.log('[person.js] rendering...');
   return (
      //  <div className="Person" style={style}>
      // <StyledDiv>
      // <p onClick={props.clickProperty}>I am {props.name}. I am {props.age} years old.</p>
      // <p>{props.children}</p>
      // <input type="text" onChange={props.changed} value={props.name}/>
      // </StyledDiv>
      <div className={classes.Person}>
      <p onClick={this.props.clickProperty}>I am {this.props.name}. I am {this.props.age} years old.</p>
      <p>{this.props.children}</p>
      <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
      // </div>
   )}
}

// export default Radium(person);
export default Person;