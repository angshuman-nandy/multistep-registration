import React, { Component } from 'react';
import logo from './logo.svg';

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
      <div>
      <p>step {this.state.step}</p>
        <BasicInfo onUpdate={this.update} />
        <button onClick={this.nextStep.bind(this)}> ok </button>
        </div>
       )
      case 2:
      return(
        <div>
        <EducationInfo onUpdate={this.updateEdu} />
        <button onClick={this.previousStep.bind(this)}> back </button>
         <button onClick={this.nextStep.bind(this)}> ok </button>
        </div>
        )
      case 3:
      return(
        <div>
        <ProfessionInfo onUpdate={this.updatePro} />
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

class BasicInfo extends Component {
  constructor(props){
    super(props);
    this.state= ({
      name: fieldvalues.name,
      age: fieldvalues.age,
      mobile: fieldvalues.mobile,
      email: fieldvalues.email

    })
  }


update = (e) => {
    
    this.props.onUpdate(e.target.name,e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
};

  render(){
    return(
       <form>
          <label>Name: 
            <input type="text" name="name" value={this.state.name} onChange={this.update}/>
          </label>
           <label>age: 
            <input type="text" name="age" value={this.state.age} onChange={this.update}/>
          </label>
           <label>mobile: 
            <input type="text" name="mobile" value={this.state.mobile} onChange={this.update}/>
          </label>
           <label>email: 
            <input type="text" name="email" value={this.state.email} onChange={this.update}/>
          </label>
        </form>
      )
  }
}


class EducationInfo extends Component{
  constructor(props){
    super(props);
    this.state = ({
      education: fieldvalues.education.slice()
    })
    this.handleInputChange = this.handleInputChange.bind(this)
  }

 handleInputChange = (idx) => (evt) => {
    const newEducation = this.state.education.map((edu, sidx) => {
      if (idx !== sidx) return edu;
      return {...edu, [evt.target.name]: evt.target.value };
    });
    
    this.setState({ education: newEducation });
  }

handleAddEducation = () => {
    this.setState({ education: this.state.education.concat([{ degree: '', institute: '', year: '',marks: ''}]) });
  }

 eduUpdate = (e) => {
    
  this.props.onUpdate(this.state.education);
   console.log(this.state.education)
   
}
  
  handleRemoveEducation = (idx) => () => {
    this.setState({ education: this.state.education.filter((s, sidx) => idx !== sidx) });
  };

  render(){
    return(
    <form>   
        {this.state.education.map((edu, idx) => (
          <div>
            <input
              type="text"
              placeholder={`degree`}
              name="degree"
              value={edu.degree}
              onChange={this.handleInputChange(idx)}
            />
             <input
              type="text"
              placeholder={`institute`}
              name="institute"
              value={edu.institute}
              onChange={this.handleInputChange(idx)}
            />
             <input
              type="text"
              placeholder={`year`}
              name="year"
              value={edu.year}
              onChange={this.handleInputChange(idx)}
            />
             <input
              type="text"
              placeholder={`marks`}
              name="marks"
              value={edu.marks}
              onChange={this.handleInputChange(idx)}
            />
            <button type="button" onClick={this.handleRemoveEducation(idx)}>-</button>
          </div>
        ))}
        <button type="button" onClick={this.handleAddEducation}>Add Education</button>
        <button type="button" onClick={this.eduUpdate}>save</button>

    </form>
    )
  }
}


class ProfessionInfo extends Component{
  constructor(props){
    super(props);
    this.state = ({
      profession: fieldvalues.profession.slice()
    })
    this.handleInputChange = this.handleInputChange.bind(this)
  }

 handleInputChange = (idx) => (evt) => {
    const newProfession = this.state.profession.map((pro, sidx) => {
      if (idx !== sidx) return pro;
      return {...pro, [evt.target.name]: evt.target.value };
    });
    
    this.setState({ profession: newProfession });
  }

handleAddProfession = () => {
    this.setState({ profession: this.state.profession.concat([{ company: '', designation: '', yearOfExp: ''}]) });
  }

 proUpdate = (e) => {
    
  this.props.onUpdate(this.state.profession);
   console.log(this.state.profession)
   
}
  
  handleRemoveProfession = (idx) => () => {
    this.setState({ profession: this.state.profession.filter((s, sidx) => idx !== sidx) });
  };

  render(){
    return(
    <form>   
        {this.state.profession.map((pro, idx) => (
          <div>
            <input
              type="text"
              placeholder={`company`}
              name="company"
              value={pro.company}
              onChange={this.handleInputChange(idx)}
            />
             <input
              type="text"
              placeholder={`designation`}
              name="designation"
              value={pro.designation}
              onChange={this.handleInputChange(idx)}
            />
             <input
              type="text"
              placeholder={`yearOfExp`}
              name="yearOfExp"
              value={pro.yearOfExp}
              onChange={this.handleInputChange(idx)}
            />
            <button type="button" onClick={this.handleRemoveProfession(idx)}>-</button>
          </div>
        ))}
        <button type="button" onClick={this.handleAddProfession}>Add Profession</button>
        <button type="button" onClick={this.proUpdate}>save</button>

    </form>
    )
  }
}

export default Registration;


