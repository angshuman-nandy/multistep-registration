import React, { Component } from 'react';
import BasicInfo from './BasicInfo'
import EducationInfo from './EducationInfo'
import './App.css';
import './progress.css';
import ProfessionInfo from './ProfessionInfo'
import Progress from './Progress';
import CircularProgressbar from 'react-circular-progressbar';



  let fieldvalues = {

  name : '',
  age : '',
  email : '',
  mobile: '',
  education: [{ degree: '', institute: '' , year: '' ,marks: ''}],
  profession: [{ company: '', designation: '', yearOfExp: ''}]

}


class Registration extends Component {
 
 constructor(props){
  super(props);
  this.state= {
    step: 1,
    f_valid: false
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

 updateBasic(v){
  fieldvalues.name = v.name
  fieldvalues.age = v.age
  fieldvalues.mobile = v.mobile
  fieldvalues.email = v.email
  
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
      <div className="container box">
      <Progress completed={25} color={"blue"}/>
      <div className="container progress-div">
      <CircularProgressbar percentage={25}/>
      </div>
      <h1>{this.state.step} |  Basic Information </h1>
        <BasicInfo onUpdate={this.updateBasic} fieldValues={fieldvalues} />
        </div>
        <div className="container navigate">
        <button className="btn btn-lg btn-primary" onClick={this.nextStep.bind(this)} ><span className="glyphicon glyphicon-step-forward"></span> Next </button>
        </div>
        </div>
       )
      case 2:
      return(
         <div className="container"> 
      <div className="container box">
      <Progress completed={50} color={"green"}/>
      <div className="container progress-div">
      <CircularProgressbar percentage={50}/>
      </div>
      <h1>{this.state.step} |  Education Information </h1>
        <EducationInfo onUpdate={this.updateEdu} fieldValues={fieldvalues} />
        </div>
        <div className="container navigate">
        <button className="btn btn-lg btn-primary"  onClick={this.previousStep.bind(this)}><span className="glyphicon glyphicon-step-backward"></span> back </button>
         <button className="btn btn-lg btn-primary" onClick={this.nextStep.bind(this)} ><span className="glyphicon glyphicon-step-forward"></span> Next </button>
        </div>
        </div>
        )
      case 3:
      return(
      <div className="container"> 
      <div className="container box">
      <Progress completed={75} color={"red"}/>
      <div className="container progress-div">
      <CircularProgressbar percentage={75}/>
      </div>
      <h1>{this.state.step} |  Professional Information </h1>
         <ProfessionInfo onUpdate={this.updatePro} fieldValues={fieldvalues}/>
        </div>
        <div className="container navigate">
        <button className="btn btn-lg btn-primary"  onClick={this.previousStep.bind(this)}><span className="glyphicon glyphicon-step-backward"></span> back </button>
         <button className="btn btn-lg btn-primary" onClick={this.nextStep.bind(this)} ><span className="glyphicon glyphicon-step-forward"></span> Next </button>
        </div>
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


