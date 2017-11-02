import React, { Component } from 'react';

class ProfessionInfo extends Component{
  constructor(props){
    super(props);
    this.state = ({
      profession: this.props.fieldValues.profession.slice()
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

export default ProfessionInfo;