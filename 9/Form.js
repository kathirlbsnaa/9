import React from "react";
import "./style.css"
class Form extends React.Component{
constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <div >
            <body>
        <div className="a2">     
      <h1 style={{ color: "grey"}}>Signup Form</h1>
      </div> 
      <div className="a1">
      <form onSubmit={this.handleSubmit}>
      
        <label class="tt"><strong>Name:</strong> 
          <input type="text"   name="name" placeholder="enter name"  value={this.state.value} onChange={this.handleChange} />
        </label>      
        <br>
        </br>
        
        
        <label class="yy" ><strong>email:</strong> 
          <input type="email" name="email" class="email" placeholder="enter email" value={this.state.value0} onChange={this.handleChange1} />
        </label>
        <br>
        </br>
        
         <label class="kk"> 
         <strong>Age:</strong>
        <input type="number"  name="number" class="age" placeholder="enter age" min="10" max="100" value={this.state.value1} onChange={this.handleChange} />
        </label>
        <br>
        </br>
      
       
        <label> <strong>Password:</strong> 
        <input  type="password" name="password" class="ii" placeholder="enter password" value={this.state.value3} onChange={this.handleChangee} />
        </label>
        <br>
        </br>
       <div className="a3">
        <input type="submit" class="sub"value="Submit" />
        </div>
      </form>
      </div>
      </body>
      </div>
    );
  }
}
export default Form;