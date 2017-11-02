import React, { Component } from 'react';

class EducationInfo extends Component{
  constructor(props){
    super(props);
    this.state = ({
      education: this.props.fieldValues.education.slice()
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
          <div className="container">
          <div className="form-group">
          <label> Degree </label>
            <input
              type="text"
              placeholder={`degree`}
              className="form-control"
              name="degree"
              value={edu.degree}
              onChange={this.handleInputChange(idx)}
            />
            </div>
            <div className="form-group">
            <label> institute </label>
             <input
              type="text"
              className="form-control"
              placeholder={`institute`}
              name="institute"
              value={edu.institute}
              onChange={this.handleInputChange(idx)}
            />
            </div>
            <div className="form-group">
          <label> Year of passing </label>
             <input
              type="text"
              className="form-control"
              placeholder={`year`}
              name="year"
              value={edu.year}
              onChange={this.handleInputChange(idx)}
            />
            </div>
            <div className="form-group">
          <label> Marks </label>
             <input
              type="text"
              className="form-control"
              placeholder={`marks`}
              name="marks"
              value={edu.marks}
              onChange={this.handleInputChange(idx)}
            />
            </div>
            <button className="btn btn-sm" type="button" onClick={this.handleRemoveEducation(idx)}>Remove Education Detail</button>
          </div>
        ))}
        <button className="btn btn-sm" type="button" onClick={this.handleAddEducation}>Add Education Details</button>
        <button className="btn btn-sm" type="button" onClick={this.eduUpdate}>save</button>

    </form>
    )
  }
}

export default EducationInfo;