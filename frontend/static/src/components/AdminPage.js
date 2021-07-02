import { Component } from 'react';
import AdminPageDetail from './AdminPageDetail.js';

import Cookies from 'js-cookie';


class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      articles: [],
      title: '',
      body: '',
    }
    this.addArticle = this.addArticle.bind(this);
    this.editArticle = this.editArticle.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }


    // if the user is authenticated pull their articles otherwise pull published articles


    componentDidMount(){
      fetch('/api/v1/articles/staff')
      .then(response => response.json())
      .then(data => console.log(data));

    }

    // componentDidMount(){
    //   fetch('/api/v1/articles/staff')
    //   .then(response => {
    //     if(!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .then(data => this.setState({ articles: data  }))
    //   .catch(error => {
    //     console.error('There has been a problem with youor fetch operation:', error);
    //   });
    // }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  addArticle(event) {
    event.preventDefault();
    const article = {
      title: this.state.title,
      body: this.state.body
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(article),
    }
    fetch('/api/v1/articles/user/', options)
      .then(response => response.json())
      .then(data => {
        const articles = [...this.state.articles, data];
        // userArticles.push(data);
        this.setState({articles, title: '', body: ''});
      });
  }

    editArticle(article) {

      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(article),
      }
      fetch(`/api/v1/articles/user/${article.id}/`, options)
        .then(response => {
          if(!response.ok) {
            throw new Error('Network response was not ok');
          }
          const articles = [...this.state.articles];
          const index = articles.findIndex(article => article.id === article.id);
          articles[index].title = article.title;
          articles[index].body = article.body;
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
        fetch(`/api/v1/articles/user/${id}/`, options)
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
            console.error('Error:', error);
          });
        }

    render() {
      const articles = this.state.articles.map(article => (
        <AdminPageDetail key={article.id} article={article} deleteArticle={this.deleteArticle} editArticle={this.editArticle} />
      ));

      return (
        <>
          <ul>{articles}</ul>
            <section className="submit">
                <form onSubmit={this.addArticle}>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Title</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" autoComplete="off" name="title" value={this.state.title} onChange={this.handleInput} placeholder="Insert Your Title"/>
                    </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Insert Your Article</label>
                    <textarea class="form-control" autoComplete="off" id="exampleFormControlTextarea1" name="body" value={this.state.body} onChange={this.handleInput} rows="3"></textarea>
                  </div>
              <button type="submit" onClick={this.addArticle} class="btn btn-primary offset">Submit</button>
            </form>
          </section>

        </>
        )
      }

    }

    export default AdminPage;
