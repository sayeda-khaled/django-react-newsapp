import { Component } from 'react';

class Registration extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleRegistration(this.state)
  }

  // render(){
  //   return(
  //     <form onSubmit={this.handleSubmit}>
  //       <div class="form-group">
  //         <label for="formGroupExampleInput2">User Name</label>
  //         <input type="text" class="form-control" name="username" autoComplete="off" required onChange={this.handleInput} value={this.state.username} id="formGroupExampleInput2" placeholder="User Name" />
  //       </div>
  //       <div class="form-group">
  //         <label for="exampleInputEmail1">Email address</label>
  //         <input type="email" class="form-control" name="email" autoComplete="off" required onChange={this.handleInput} value={this.state.email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  //       </div>
  //       <div class="form-group">
  //         <label for="exampleInputPassword1">Password</label>
  //         <input type="password" class="form-control" name="password1" autoComplete="off" required onChange={this.handleInput} value={this.state.password1} id="exampleInputPassword1" placeholder="Password" />
  //       </div>
  //       <div class="form-group">
  //         <label for="exampleInputPassword1">Confirm Password</label>
  //         <input type="password" class="form-control" name="password2" autoComplete="off" required onChange={this.handleInput} value={this.state.password2} id="exampleInputPassword1" placeholder="Password" />
  //       </div>
  //       <button type="submit" class="btn btn-secondary offset" onClick={() => this.props.handleSelection('registration')}>Register</button>
  //   </form>
  //
  //   );
  // }
  // }

  render(){
    return(

      <div class="main">

    <form class="form1" onSubmit={this.handleSubmit}>
      <input class="un " type="text"  name="username" autoComplete="off" required onChange={this.handleInput} value={this.state.username} align="center" placeholder="Username"/>
      <input class="un " type="email" name="email" align="center" placeholder="e-mail" onChange={this.handleInput} value={this.state.email} />
      <input class="pass" type="password" name="password1" align="center" autoComplete="off" required onChange={this.handleInput} value={this.state.password1} placeholder="Password"/>
      <input class="pass" type="password" name="password2" align="center" autoComplete="off" required onChange={this.handleInput} value={this.state.password2} placeholder="Confirm Password"/>
      <button class="submit" align="center" onClick={() => this.props.handleSelection('registration')}>Register</button>
  </form>
  </div>




  );


}
}

export default Registration;
