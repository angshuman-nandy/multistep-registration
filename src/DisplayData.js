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
  <div className="container display-box" onClick={this.props.goTo1}>
    <h2> Basic Information </h2>
    <h3>Name: </h3>
    <p> {this.state.name} </p>
    <h3>Email id: </h3>
    <p> {this.state.email} </p>
    <h3>Age: </h3>
    <p> {this.state.age} </p>
    <h3>Mobile: </h3>
    <p> {this.state.mobile} </p>
  </div>
  <div className="container display-box" onClick={this.props.goTo2}>
    <h2> Educational Information </h2>
    {this.state.education.map((edu,id) =>(
    <div className="container m-display-box">
      <h3> Detail: {id+1}</h3>
      <h3>Degree: </h3>
      <p>{edu.degree}</p>
      <h3>Institute: </h3>
      <p>{edu.institute}</p>
      <h3>Year of passing: </h3>
      <p>{edu.year}</p>
      <h3>Marks: </h3>
      <p>{edu.marks}</p>
    </div>
    ))}
  </div>
  <div className="container display-box" onClick={this.props.goTo3}>
    <h2> Professional Information </h2>
    {this.state.profession.map((pro,id) =>(
    <div className="container m-display-box">
      <h3> Detail: {id+1}</h3>
      <h3>Company: </h3>
      <p>{pro.company}</p>
      <h3>Designation: </h3>
      <p>{pro.designation}</p>
      <h3>Years of experience: </h3>
      <p>{pro.yearOfExp}</p>
    </div>
    ))}
  </div>
</div>



)
}


}

export default DisplyData;