import { Component } from 'react';

class DisplayPage extends Component {

  constructor(props) {
    super(props);
    this.state={
      articles: [],

    }
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

    render() {
      const articles = this.state.articles.map((article, index)=> (
        <div className="articles" key = {index}>
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <p>{article.body}</p>

        </div>

      ));

      return (

          <ul>{articles}</ul>

        )
      }
    }


export default DisplayPage;
