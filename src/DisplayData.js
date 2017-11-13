import React, { Component } from 'react';
import './App.css';

class DisplyData extends Component{

constructor(props){
  super(props);
  this.state =({
    name: this.props.fieldValues.name,
    age: this.props.fieldValues.age,
    mobile: this.props.fieldValues.mobile,
    email: this.props.fieldValues.email,
    education: this.props.fieldValues.education.slice(),
    profession: this.props.fieldValues.profession.slice()  
  });

}


render(){
return(
<div>
  <div className="container display-box" id="1" onClick={this.props.goTo}>
    <h2 id="1"> Basic Information </h2>
    <h3 id="1" >Name: </h3>
    <p id="1" > {this.state.name} </p>
    <h3 id="1" >Email id: </h3>
    <p id="1" > {this.state.email} </p>
    <h3 id="1" >Age: </h3>
    <p> {this.state.age} </p>
    <h3 id="1" >Mobile: </h3>
    <p id="1" > {this.state.mobile} </p>
  </div>
  <div className="container display-box" id="2" onClick={this.props.goTo}>
    <h2 id="2" > Educational Information </h2>
    {this.state.education.map((edu,id) =>(
    <div id="2" className="container m-display-box">
      <h3 id="2" > Detail: {id+1}</h3>
      <h3 id="2" >Degree: </h3>
      <p id="2" >{edu.degree}</p>
      <h3 id="2" >Institute: </h3>
      <p id="2" >{edu.institute}</p>
      <h3 id="2" >Year of passing: </h3>
      <p id="2" >{edu.year}</p>
      <h3 id="2" >Marks: </h3>
      <p id="2" >{edu.marks}</p>
    </div>
    ))}
  </div>
  <div className="container display-box"  id="3" onClick={this.props.goTo}>
    <h2 id="3" > Professional Information </h2>
    {this.state.profession.map((pro,id) =>(
    <div id="3" className="container m-display-box">
      <h3 id="3" > Detail: {id+1}</h3>
      <h3 id="3" >Company: </h3>
      <p id="3" >{pro.company}</p>
      <h3 id="3" >Designation: </h3>
      <p id="3" >{pro.designation}</p>
      <h3 id="3" >Years of experience: </h3>
      <p id="3" >{pro.yearOfExp}</p>
    </div>
    ))}
  </div>
</div>



)
}


}

export default DisplyData;