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
goToStep1(){
  this.setState({
    step: 1,
    update: true
  });
}
goToStep2(){
  this.setState({
    step: 2,
    update: true
  });
}
goToStep3(){
  this.setState({
    step: 3,
    update: true
  });
}
goToStep4(){
  this.setState({
    step: 4,
    update: false
  });
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
      <Progress completed={25} color={"red"}/>
      <div className="container progress-div">
      <CircularProgressbar percentage={25}/>
      </div>
      <h1>{this.state.step} |  Basic Information </h1>
        <BasicInfo onUpdate={this.updateBasic} fieldValues={fieldvalues} onNext={this.nextStep}/>
        </div>
        <div className="container navigate">
        <button className={this.state.update? "hidden":"btn btn-lg btn-primary"} onClick={this.nextStep.bind(this)} ><span className="glyphicon glyphicon-step-forward"></span> Next </button>
        <button className={this.state.update? "btn btn-lg btn-warning ":"hidden"} onClick={this.goToStep4.bind(this)} > Update </button>
        </div>
        </div>
       )
      case 2:
      return(
         <div className="container"> 
      <div className="container box">
      <Progress completed={50} color={"blue"}/>
      <div className="container progress-div">
      <CircularProgressbar percentage={50}/>
      </div>
      <h1>{this.state.step} |  Education Information </h1>
        <EducationInfo onUpdate={this.updateEdu} fieldValues={fieldvalues} />
        </div>
        <div className="container navigate">
        <button className={this.state.update? "hidden":"btn btn-lg btn-primary"}  onClick={this.previousStep.bind(this)}><span className="glyphicon glyphicon-step-backward"></span> back </button>
        <button className={this.state.update? "hidden":"btn btn-lg btn-primary"} onClick={this.nextStep.bind(this)} ><span className="glyphicon glyphicon-step-forward"></span> Next </button>
        <button className={this.state.update? "btn btn-lg btn-warning ":"hidden"} onClick={this.goToStep4.bind(this)} > Update </button>
        </div>
        </div>
        )
      case 3:
      return(
      <div className="container"> 
      <div className="container box">
      <Progress completed={75} color={"yellow"}/>
      <div className="container progress-div">
      <CircularProgressbar percentage={75}/>
      </div>
      <h1>{this.state.step} |  Professional Information </h1>
         <ProfessionInfo onUpdate={this.updatePro} fieldValues={fieldvalues}/>
        </div>
        <div className="container navigate">
         <button className={this.state.update? "hidden":"btn btn-lg btn-primary"}  onClick={this.previousStep.bind(this)}><span className="glyphicon glyphicon-step-backward"></span> back </button>
        <button className={this.state.update? "hidden":"btn btn-lg btn-primary"} onClick={this.nextStep.bind(this)} ><span className="glyphicon glyphicon-step-forward"></span> Next </button>
        <button className={this.state.update? "btn btn-lg btn-warning ":"hidden"} onClick={this.goToStep4.bind(this)} > Update </button>
        </div>
        </div>
        )
      case 4:
      return(
        <div className="container box" >
        <Progress completed={100} color={"green"}/>
      <div className="container progress-div">
      <CircularProgressbar percentage={100}/>
      </div>
       <h1>{this.state.step} |  Confirmation </h1>
         <div className="container display-box" onClick={this.goToStep1.bind(this)}>
            <h2> Basic Information </h2>
            <h3>Name: </h3>
            <p> {fieldvalues.name} </p>
            <h3>Email id: </h3>
            <p> {fieldvalues.email} </p>
            <h3>Age: </h3>
            <p> {fieldvalues.age} </p>
            <h3>Mobile: </h3>
            <p> {fieldvalues.mobile} </p>
          </div>
          <div className="container display-box" onClick={this.goToStep2.bind(this)}>
          <h2> Educational Information </h2>
            {fieldvalues.education.map((edu,id) =>(
          <div class="container m-display-box">
          <h3> detail: {id+1}</h3>
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
           <div className="container display-box" onClick={this.goToStep3.bind(this)}>
          <h2> Professional Information </h2>
            {fieldvalues.profession.map((pro,id) =>(
          <div class="container m-display-box">
            <h3> detail: {id+1}</h3>
           <h3>Company: </h3>
          <p>{pro.company}</p>
          <h3>Designation: </h3>
          <p>{pro.designation}</p>
          <h3>Years of experience: </h3>
          <p>{pro.yearOfExp}</p>
          </div>
          ))}
          </div>
           <div className="navigate">
           <button className="btn btn-lg btn-warning" onClick={this.reset.bind(this)} > Submit </button>
           </div>
        </div>
        )
  
    }
    }
  }





export default Registration;


