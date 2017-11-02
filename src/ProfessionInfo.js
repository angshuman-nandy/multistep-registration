import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './App.css';

class ProfessionInfo extends Component{
  constructor(props){
    super(props);
    this.state = ({
      profession: this.props.fieldValues.profession.slice(),
       formErrors: { company: '', designation: '', yearOfExp: ''},
      companyValid: false,
      designationValid: false,
      yearOfExpOfExpValid: false,
      formValid: false
    })
    this.handleInputChange = this.handleInputChange.bind(this)
  }

 handleInputChange = (idx) => (evt) => {
   const name = evt.target.name;
    const value = evt.target.value;
    const newProfession = this.state.profession.map((pro, sidx) => {
      if (idx !== sidx) return pro;
      return {...pro, [evt.target.name]: evt.target.value };
    });
    
    this.setState({ profession: newProfession },
                  () => { this.validateField(name, value) });
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
validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let companyValid = this.state.companyValid;
    let designationValid = this.state.designationValid;
    let yearOfExpValid = this.state.yearOfExpValid;

    switch(fieldName) {
      case 'company':
        companyValid = value.length >= 3;
        fieldValidationErrors.company = companyValid ? '' : ' is invalid';
        break;
      case 'designation':
        designationValid = value.length >=5;
        fieldValidationErrors.designation = designationValid ? '': ' too short';
        break;
      case 'yearOfExp':
        yearOfExpValid =  (value.length <=2 && value.match('^[0-9]+$'))

        fieldValidationErrors.yearOfExp = yearOfExpValid ? '': ' is invalid';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    companyValid: companyValid,
                    designationValid: designationValid,
                    yearOfExpValid: yearOfExpValid,
                  }, this.validateForm);
  }

   validateForm() {
    this.setState({formValid: this.state.companyValid && this.state.designationValid && this.state.yearOfExpValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render(){
    return(
    <div> 
    <div className="panel panel-default">
         <span> <FormErrors formErrors={this.state.formErrors} /></span>
        </div>  
        {this.state.profession.map((pro, idx) => (
       <div className="form-box">
             <div className={`form-group ${this.errorClass(this.state.formErrors.company)}`}>
          <label htmlFor="company">company</label>
          <input type="text" required className="form-control" name="company"
            placeholder="company"
            value={pro.company}
            onChange={this.handleInputChange(idx)}  />
        </div>
             <div className={`form-group ${this.errorClass(this.state.formErrors.designation)}`}>
          <label htmlFor="designation">designation</label>
          <input type="text" required className="form-control" name="designation"
            placeholder="designation"
            value={pro.designation}
            onChange={this.handleInputChange(idx)}  />
        </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.yearOfExp)}`}>
          <label htmlFor="yearOfExp">years of experience</label>
          <input type="text" required className="form-control" name="yearOfExp"
            placeholder="years of experience"
            value={pro.yearOfExp}
            onChange={this.handleInputChange(idx)}  />
        </div>
            <button className="btn btn-medium btn-danger" type="button" onClick={this.handleRemoveProfession(idx)}>remove</button>
          </div>
        ))}
        <div className="add-box">
        <button type="button" className="btn btn-medium btn-warning" onClick={this.handleAddProfession}>Add Another</button>
        <button type="button" className="btn btn-medium btn-success" onClick={this.proUpdate}>save</button>
        </div>

    </div>
    )
  }
}

export default ProfessionInfo;