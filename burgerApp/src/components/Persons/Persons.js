import React, {Component} from 'react';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'
import Person from './Person/Person'

// const persons = (props) =>
class Persons extends Component {
  // static getDerivedStateFromProps(props, state){
  //   console.log('[persons.js] getDerivedStateFromProps');
  //   return state;
  // }
  // componentWillReceiveProps(props){
  //   console.log('[persons.js] componentWillReceiveProps', props);
  // }
  shouldComponentUpdate(nextProps, nextState){
    console.log('[persons.js] shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[persons.js] getSnapshotBeforeUpdate');   
    return {message: 'snapshot'}; 
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[persons.js] componentDidUpdate');  
    console.log(snapshot);
  }

  componentWillUnmountMount(){
    // can be used for clean up work like unbinding listeners or db connections
    console.log('[persons.js] componentWillUnmountMount');
  }
 
  render(){
    console.log('[persons.js] rendering...');
    return this.props.persons.map((person, index) => {
         return <ErrorBoundary key = {person.id}>
         <Person 
         name={person.name} 
         age={person.age}
         clickProperty = { () => this.props.clicked(index)}
         
         changed = {(event) => this.props.changed(event, person.id)}
         /></ErrorBoundary>
       })
}};

export default Persons;