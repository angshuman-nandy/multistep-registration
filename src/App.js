import React, { Component } from 'react';
import BasicInfo from './BasicInfo'
import EducationInfo from './EducationInfo'
import './App.css';
import './progress.css';
import ProfessionInfo from './ProfessionInfo'
import Progress from './Progress';
import CircularProgressbar from 'react-circular-progressbar';
import DisplayData from './DisplayData'



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
    f_valid: false,
    update: false
  };
 }

 reset(){
  alert("confirmed submit!!!")
  window.location.reload();
 }

 nextStep = () => {
  this.setState({
    step: this.state.step + 1
  })
 }

 goToStep1=()=> {
  this.setState({
    step: 1,
    update: true
  });
 }
 goToStep2=()=> {
  this.setState({
    step: 2,
    update: true
  });
 }
 goToStep3=()=> {
  this.setState({
    step: 3,
    update: true
  });
 }
 goToStep4=()=> {
  this.setState({
    step: 4,
    update: false
  });
 }
 previousStep = () => {
  this.setState({
    step: this.state.step - 1
  })
 }

 updateBasic = (v) => {
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

goToStep(n){
  this.setState({
    step: n
  });
  
}
 

  render() {
  switch(this.state.step){

    case 1:
      return(

        <div className="container">
          <div className="container box">
          <label className="lbl" >25%</label>
            <Progress completed={25} color={"#D50000"}/>
            <div className="container progress-div">
              <CircularProgressbar percentage={25} className="progressbar-red" />
            </div>
            <h1>{this.state.step} |  Basic Information </h1>
            <BasicInfo onUpdate={this.updateBasic} goTo4={this.goToStep4} updateVal={this.state.update} fieldValues={fieldvalues} onNext={this.nextStep}/>
          </div>
        </div>
      )

    case 2:
      return(
        <div className="container"> 
          <div className="container box">
           <label className="lbl" >50%</label>
            <Progress completed={50} color={"#01579B"}/>
            <div className="container progress-div">
              <CircularProgressbar percentage={50} className="progressbar-blue" />
            </div>
            <h1>{this.state.step} |  Education Information </h1>
            <EducationInfo onUpdate={this.updateEdu} goTo4={this.goToStep4} updateVal={this.state.update} fieldValues={fieldvalues} onNext={this.nextStep} />
            <button className={this.state.update? "hidden":"btn btn-md btn-primary"}  onClick={this.previousStep.bind(this)}><span className="glyphicon glyphicon-step-backward"></span> back </button>
          </div>
        </div>
      )

    case 3:
    return(
      <div className="container"> 
        <div className="container box">
           <label className="lbl" >75%</label>
          <Progress completed={75} color={"#FFD600"}/>
          <div className="container progress-div">
            <CircularProgressbar percentage={75} className="progressbar-yellow"/>
          </div>
          <h1>{this.state.step} |  Professional Information </h1>
          <ProfessionInfo onUpdate={this.updatePro} goTo4={this.goToStep4} updateVal={this.state.update} fieldValues={fieldvalues} onNext={this.nextStep}/>
          <button className={this.state.update? "hidden":"btn btn-md btn-primary"}  onClick={this.previousStep.bind(this)}><span className="glyphicon glyphicon-step-backward"></span> back </button>
        </div>
      </div>
      )
    case 4:
    return(
    <div className="container box" >
     <label className="lbl" >100%</label>
      <Progress completed={100} color={"#1B5E20"}/>
      <div className="container progress-div">
        <CircularProgressbar percentage={100} className="progressbar-green"/>
      </div>
      <h1>{this.state.step} |  Confirmation </h1>
      <DisplayData goTo1={this.goToStep1} goTo2={this.goToStep2} goTo3={this.goToStep3} fieldValues={fieldvalues} />
      <label> Check your details before submitting, click/tap on any information to edit </label>
      <button className="btn btn-md btn-primary"  onClick={this.reset}> Submit </button>
    </div>
    )

    }
  }
}





export default Registration;


