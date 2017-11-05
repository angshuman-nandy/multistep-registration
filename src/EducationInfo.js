import React, { Component } from 'react';
import { FormErrors } from './FormErrors';

class EducationInfo extends Component{
  constructor(props){
    super(props);
    this.state = ({
      education: this.props.fieldValues.education.slice(),
      formErrors: {degree: '', institute: '',year: '',marks: ''},
      degreeValid: false,
      instituteValid: false,
      yearValid: false,
      marksValid: false,
      formValid: false
    })
    this.handleInputChange = this.handleInputChange.bind(this)
  }

 handleInputChange = (idx) => (evt) => {
     const name = evt.target.name;
    const value = evt.target.value;
    const newEducation = this.state.education.map((edu, sidx) => {
      if (idx !== sidx) return edu;
      return {...edu, [evt.target.name]: evt.target.value };
    });
    
     this.setState({ education: newEducation },
                  () => { this.validateField(idx,name, value) });
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

 validateField(idx,fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let degreeValid = this.state.degreeValid;
    let instituteValid = this.state.instituteValid;
    let yearValid = this.state.yearValid;
    let marksValid = this.state.marksValid;

    switch(fieldName) {
      case 'degree':
        degreeValid =value.match('^[A-Z]+$');
        fieldValidationErrors.degree = degreeValid ? '' : ' is invalid';
        break;
      case 'institute':
        instituteValid = value.length >=3;
        fieldValidationErrors.institute = instituteValid ? '': ' too short';
        break;
      case 'year':
        yearValid =  (value.length == 4 && value.match('^[0-9]+$'))

        fieldValidationErrors.year = yearValid ? '': ' is invalid';
        break;
         case 'marks':
        marksValid =  (value.length <= 3 && value.match('^[0-9]+$'))

        fieldValidationErrors.marks = marksValid ? '': ' is invalid';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    degreeValid: degreeValid,
                    instituteValid: instituteValid,
                    yearValid: yearValid,
                    marksValid: marksValid
                  }, this.validateForm);
  }

   validateForm() {
    this.setState({formValid: this.state.degreeValid && this.state.instituteValid && this.state.yearValid && this.state.marksValid });
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
        {this.state.education.map((edu, idx) => (
          <div className="form-box">
             <div className={`form-group ${this.errorClass(this.state.formErrors.degree)}`}>
          <label htmlFor="degree">degree</label>
          <input type="text" required className="form-control" name="degree"
            placeholder="degree"
            value={edu.degree}
            onChange={this.handleInputChange(idx)}  />
        </div>
             <div className={`form-group ${this.errorClass(this.state.formErrors.institute)}`}>
          <label htmlFor="institute">institute</label>
          <input type="text" required className="form-control" name="institute"
            placeholder="institute"
            value={edu.institute}
            onChange={this.handleInputChange(idx)}  />
        </div>
             <div className={`form-group ${this.errorClass(this.state.formErrors.year)}`}>
          <label htmlFor="year">year</label>
          <input type="text" required className="form-control" name="year"
            placeholder="year"
            value={edu.year}
            onChange={this.handleInputChange(idx)}  />
        </div>
             <div className={`form-group ${this.errorClass(this.state.formErrors.marks)}`}>
          <label htmlFor="marks">marks</label>
          <input type="text" required className="form-control" name="marks"
            placeholder="marks"
            value={edu.marks}
            onChange={this.handleInputChange(idx)}  />
        </div>
        <button className="btn btn-medium btn-danger" type="button" onClick={this.handleRemoveEducation(idx)}>remove</button>
      </div>
        ))}

       
        <div className="add-box">
  <button className="btn btn-medium btn-warning" type="button" onClick={this.handleAddEducation}>Add Another</button>
        <button className="btn btn-medium btn-success" type="button" disabled={!this.state.formValid} onClick={this.eduUpdate}>save</button>
        </div>
      </div>
    )
  }
}

export default EducationInfo;