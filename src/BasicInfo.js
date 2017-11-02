import React, { Component } from 'react';


class BasicInfo extends Component {
  constructor(props){
    super(props);
    this.state= ({
      name: this.props.fieldValues.name,
      age: this.props.fieldValues.age,
      mobile: this.props.fieldValues.mobile,
      email: this.props.fieldValues.email
    })
  }


update = (e) => {
    

    this.setState({[e.target.name]: e.target.value});
        this.props.onUpdate(e.target.name,e.target.value);
};

  render(){
    return(
       <form>
          <div className="form-group">
          <label>Name </label>
          <input type="text"  className="form-control" name="name" value={this.state.name} onChange={this.update}/>
          </div>
          <div className="form-group">
           <label>age </label>
            <input type="text" className="form-control" name="age" value={this.state.age} onChange={this.update}/>
          </div>
          <div className="form-group">
           <label>mobile: </label>
            <input type="text" className="form-control" name="mobile" value={this.state.mobile} onChange={this.update}/>
          </div>
          <div className="form-group">
           <label>email: </label>
            <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.update}/>
          </div>
        </form>
      )
  }
}

export default BasicInfo;