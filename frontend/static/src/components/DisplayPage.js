import { Component } from 'react';

class DisplayPage extends Component {

  constructor(props) {
    super(props);

    }

    componentDidMount(){
      fetch('/api/v1/articles/')
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


export default DisplayPage;
