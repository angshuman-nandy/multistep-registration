import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './App.css';

class BasicInfo extends Component {
  constructor(props){
    super(props);
    this.state= ({
      name: this.props.fieldValues.name,
      age: this.props.fieldValues.age,
      mobile: this.props.fieldValues.mobile,
      email: this.props.fieldValues.email,
       formErrors: {email: '', name: '',mobile: '',age: ''},
      emailValid: false,
      nameValid: false,
      ageValid: false,
      mobileValid: false,
      formValid: false,
      update: this.props.updateVal
    });

    this.handleChange = this.handleChange.bind(this)
    
  }


  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      formValid: true,[name]: value},
                  () => { this.validateField(name, value) });
   
    
  }
   handleSave = (e) => {
    var val = {name: this.state.name,age: this.state.age, mobile: this.state.mobile, email: this.state.email}
     this.props.onUpdate(val);
     if(this.state.update == false)
     this.props.onNext();
      else
      this.props.goTo4();
  }


 validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;
    let mobileValid = this.state.mobileValid;
    let ageValid = this.state.ageValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid (should be of format  \"id@domain.com\")';
        break;
      case 'name':
        nameValid = value.length >=5;
        fieldValidationErrors.name = nameValid ? '': ' too short (minimum 5)';
        break;
      case 'mobile':
        mobileValid =  (value.length == 10 && value.match('^[0-9]+$'))

        fieldValidationErrors.mobile = mobileValid ? '': ' is invalid (should be a number of 10 digits)' ;
        break;
         case 'age':
        ageValid =  (value.length <= 3 && value.match('^[0-9]+$'))

        fieldValidationErrors.age = ageValid ? '': ' is invalid';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    mobileValid: mobileValid,
                    nameValid: nameValid,
                    ageValid: ageValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.nameValid && this.state.ageValid && this.state.mobileValid });
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }
 

  render(){
    return(
      <div>
       <form>
        <div className="panel panel-default">
         <span> <FormErrors formErrors={this.state.formErrors} /></span>
        </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
          <label htmlFor="name">Name</label>
          <input type="text" required className="form-control" name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.age)}`}>
          <label htmlFor="age">Age</label>
          <input type="text" required className="form-control" name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleChange}  />
        </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.mobile)}`}>
          <label htmlFor="mobile">Mobile number</label>
          <input type="text" required className="form-control" name="mobile"
            placeholder="Mobile"
            value={this.state.mobile}
            onChange={this.handleChange}  />
        </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input type="text" required className="form-control" name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange} />
        </div>
        <button type="button" className={!this.state.update? "btn btn-md btn-success ":"hidden"} onClick={this.handleSave} disabled={!this.state.formValid}  >save and continue</button>
        <button type="button" className={this.state.update? "btn btn-md btn-warning ":"hidden"} onClick={this.handleSave} > Update </button>
        </form>
        </div>
      )
  }
}

export default BasicInfo;