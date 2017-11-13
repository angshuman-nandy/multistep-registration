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
      formValid: false,
      update: this.props.updateVal
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
   console.log(this.state.education);
    if(this.state.update == false)
     this.props.onNext();
      else
      this.props.goTo();
   
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
        degreeValid = (value.length >=2 &&  value.match('^[A-Z a-z]+$'));
        fieldValidationErrors.degree = degreeValid ? '' : ' is invalid (min 2 characters and only letters)';
        break;
      case 'institute':
        instituteValid = (value.length >=3 &&  value.match('^[A-Z a-z]+$'));
        fieldValidationErrors.institute = instituteValid ? '': ' too short and only letters';
        break;
      case 'year':
        yearValid =  (value>=1700 && value<=2017 && value.length == 4 && value.match('^[0-9]+$'))

        fieldValidationErrors.year = yearValid ? '': ' is invalid';
        break;
         case 'marks':
        marksValid =  (value.length <= 5 && value.match( /^(\d+\.?\d{0,9}|\.\d{1,9})$/ ));
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
          <label htmlFor="degree">Degree</label>
          <input type="text" required className="form-control" name="degree"
            placeholder="Degree"
            value={edu.degree}
            onChange={this.handleInputChange(idx)}  />
        </div>
             <div className={`form-group ${this.errorClass(this.state.formErrors.institute)}`}>
          <label htmlFor="institute">Institute</label>
          <input type="text" required className="form-control" name="institute"
            placeholder="Institute"
            value={edu.institute}
            onChange={this.handleInputChange(idx)}  />
        </div>
             <div className={`form-group ${this.errorClass(this.state.formErrors.year)}`}>
          <label htmlFor="year">Year</label>
          <input type="text" required className="form-control" name="year"
            placeholder="Year"
            value={edu.year}
            onChange={this.handleInputChange(idx)}  />
        </div>
             <div className={`form-group ${this.errorClass(this.state.formErrors.marks)}`}>
          <label htmlFor="marks">Marks</label>
          <input type="text" required className="form-control" name="marks"
            placeholder="Marks"
            value={edu.marks}
            onChange={this.handleInputChange(idx)}  />
        </div>
        <button className="btn btn-medium btn-danger" type="button" onClick={this.handleRemoveEducation(idx)}>remove</button>
      </div>
        ))}

       
        <div className="add-box">
  <button className="btn btn-medium btn-warning" type="button" onClick={this.handleAddEducation}>Add Another</button>
        <button className={!this.state.update? "btn btn-md btn-success ":"hidden"} type="button" onClick={this.eduUpdate}>save and continue </button>
         <button type="button" className={this.state.update? "btn btn-md btn-warning ":"hidden"} onClick={this.eduUpdate} > Update </button>
        </div>
      </div>
    )
  }
}

export default EducationInfo;