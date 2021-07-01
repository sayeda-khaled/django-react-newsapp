import { Component } from 'react';
import ArticleDetail from './ArticleDetail.js'; 
import Cookies from 'js-cookie';


class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state={
      articles: [],
      text: '',
    }
    this.addArticle = this.addArticle.bind(this);
    this.editArticle = this.editArticle.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.handleInput = this.handleInput.bind(this);
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

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  addArticle(event) {
    event.preventDefault();
    const article = {
      text: this.state.text,
    };
    const options = {
      method: 'POST',
      headers: {
        'Contnet-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(article),
    }
    fetch('/api/v1/articles/', options)
      .then(response => response.json())
      .then(data => {
        const articles = [...this.state.articles];
        articles.push(data);
        this.setState({articles});
        this.setState({ text: '' });
      });
  }

    editArticle(id, text) {
      const article = {
        text,
      };
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'applications/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(article),
      }
      fetch(`/api/v1/articles/${id}/`, options)
        .then(response => {
          if(!response.ok) {
            throw new Error('Network response was not ok');
          }
          const articles = [...this.state.articles];
          const index = articles.findIndex(article => article.id === id);
          articles[index].text = text;
          this.setState({ articles });
        });
      }

      deleteArticle(id) {
        const options= {
          method: 'DELETE',
          headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
          },
        }
        fetch(`/api/v1/articles/${id}/`, options)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const articles = [...this.state.articles];
            const index = articles.findIndex(article => article.id === id);
            articles.splice(index, 1);
            this.setState({ articles });
          })
          .catch((error) => {
            console.err('Error:', error);
          });
        }

    render() {
      const articles = this.state.articles.map(article => (
        <ArticleDetail key={article.id} article={article} deleteArticle={this.deleteArticle} editArticle={this.editArticle} />
      ));

      return (
        <>
          <ul>{articles}</ul>
          <section className="submit">
            <form onSubmit={this.addArticle}>
              <input className="text" type="text" name="text" value={this.state.text} onChange={this.handleInput} />
              <button type="submit" class="btn btn-primary offset">Submit</button>
            </form>
          </section>

        </>
        )
      }

    }

    export default ArticleList;
