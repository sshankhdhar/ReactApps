import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
      console.log('Cockpit.js useEffect');
      // http request can be used here
      setTimeout(() => {
        alert('save datat to the cloud');
      }, 1000)
      return ()=> {
        // this will cleanup only when cockpit conponent is removed
        console.log('Cockpit.js cleanup work in useeffect')
      }
    }, [])

    useEffect(() => {

      console.log('Cockpit.js 2 nd useEffect');
      return ()=> {
        // this will clean up every time or it runs on every update cycle or whenever cockpit component rerenders
        console.log('Cockpit.js cleanup work in 2nd useeffect')
      }
    })
    let assignedClasses = [];
    let btnClass = '';

    if(props.persons.length <=2){
      // assignedClasses.push('red');
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <=1){
      // assignedClasses.push('bold');
      assignedClasses.push(classes.bold);
    }
    if (props.showPersons){
        btnClass = classes.Red;        
    }
    return (
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className = {assignedClasses.join(' ')}>This is really Working</p>
        <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;