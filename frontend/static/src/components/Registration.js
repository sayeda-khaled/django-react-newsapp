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
