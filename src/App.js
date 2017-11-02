import React, { Component } from 'react';
import logo from './logo.svg';
import BasicInfo from './BasicInfo'
import EducationInfo from './EducationInfo'
import ProfessionInfo from './ProfessionInfo'


  let fieldvalues = {

  name : null,
  age : null,
  email : null,
  mobile: null,
  education: [{ degree: '', institute: '' , year: '' ,marks: ''}],
  profession: [{ company: '', designation: '', yearOfExp: ''}]

}


class Registration extends Component {
 
 constructor(props){
  super(props);
  this.state= {
    step: 1
  };
 }

 nextStep(){
  this.setState({
    step: this.state.step+1
  })
 }
 previousStep(){
  this.setState({
    step: this.state.step-1
  })
 }

 update(n,v){
  fieldvalues[n] = v
 }

 updateEdu(edu){
  fieldvalues.education = edu.slice();
 }

 updatePro(pro){
   fieldvalues.profession = pro.slice();
 }

  render() {
    switch(this.state.step){

      case 1:
      return(
      <div className="container">
      <h1>step: {this.state.step} | Basic Information </h1>
        <BasicInfo onUpdate={this.update} fieldValues={fieldvalues} />
        <button className="btn btn-lg" onClick={this.nextStep.bind(this)}> Next </button>
        </div>
       )
      case 2:
      return(
        <div className="container">
        <EducationInfo onUpdate={this.updateEdu} fieldValues={fieldvalues} />
        <button className="btn btn-lg"  onClick={this.previousStep.bind(this)}> back </button>
         <button className="btn btn-lg"  onClick={this.nextStep.bind(this)}> Next </button>
        </div>
        )
      case 3:
      return(
        <div>
        <ProfessionInfo onUpdate={this.updatePro} fieldValues={fieldvalues}/>
        <button onClick={this.previousStep.bind(this)}> back </button>
         <button onClick={this.nextStep.bind(this)}> ok </button>
        </div>
        )
      case 4:
      return(
        <div>
        {fieldvalues.education.map((edu) =>(
          <div>
          <p>{edu.degree}</p>
          <p>{edu.institute}</p>
          <p>{edu.year}</p>
          <p>{edu.marks}</p>
          </div>
          ))}
          {fieldvalues.profession.map((pro) =>(
          <div>
          <p>{pro.company}</p>
          <p>{pro.designation}</p>
          <p>{pro.yearOfExp}</p>
          </div>
          ))}
           <button onClick={this.previousStep.bind(this)}> back </button>
           <button onClick={this.nextStep.bind(this)}> ok </button>
        </div>
        )
  
    }
    }
  }





export default Registration;


