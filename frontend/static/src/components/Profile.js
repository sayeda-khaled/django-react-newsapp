import { Component } from 'react';
import Cookies from 'js-cookie';


class Profile extends Component{

  constructor(props) {
    super(props);
    this.state = {
      display_name: '',
      avatar: null,
      preview: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editProfile = this.editProfile.bind(this);
  }

  componentDidMount(){
    fetch('/api/v1/users/profiles/user/')
    .then(response => {
      if(!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => this.setState({ data  }))
    .catch(error => {
      console.error('There has been a problem with youor fetch operation:', error);
    });
  }


  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleImage(e) {
    let file = e.target.files[0];      // this returns a list of files.. we want only a specific one
      this.setState({
       [e.target.name]: file,
     });

    let reader = new FileReader(); //alows us to read the image or the content of the file.. and it's asycronis..

    reader.onloadend = () => { //When you are finished reading, I want you to call this.setstate and update the value to the preivew in the state
      this.setState({
        preview: reader.result,
      });
    }
      reader.readAsDataURL(file);  //The result of that, set the value to it to the state

  }

  async handleSubmit(e) {
    e.preventDefault();
    let formData= new FormData();
    formData.append('avatar', this.state.avatar);
    formData.append('display_name', this.state.display_name);
    // formData.append('user', 1);

    const options = {
        method: 'POST',
        headers: {
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: formData,
      }
      const response = await fetch('/api/v1/users/profiles/', options);
      this.setState({ response })
      // console.log(response);
  }

  editProfile(profile) {
    const options ={
      method: 'PUT',
      headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(profile)
    }
    fetch('/api/v1/users/profile/user', options)
      .then(response =>{
        if(!response.ok) {
          throw new Error('Error');
        }
        return response.json()
      })
  }
  render(){

  return (
    <>
      <form onSubmit={this.handleSubmit}>
        <input type='text' name="display_name" value={this.state.display_name} onChange={this.handleInput} />
        <input type="file" name="avatar" onChange={this.handleImage}/>
        {this.state.avatar
          ? <img src={this.state.preview} alt=""/>
          : null
        }
        <button type="submit">Save Profile!</button>
      </form>

      {this.state.data
        ? (
          <section className="profile">
            <header class="profile-card">
              <h2>{this.state.data.display_name}</h2>
              <img src={this.state.data.avatar} class="hoverZoomLink" alt=""/>
            </header>
          </section>
          )
        : null
      }
    </>
  )}
}

export default Profile;
