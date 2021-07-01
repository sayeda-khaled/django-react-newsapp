import { Component } from 'react';
import ArticleDetail from './ArticleDetail.js';

import Cookies from 'js-cookie';


class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state={
      userArticles: [],
    }
    this.addArticle = this.addArticle.bind(this);
    this.editArticle = this.editArticle.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }


    // if the user is authenticated pull their articles otherwise pull published articles

    componentDidMount(){
      fetch('/api/v1/articles/users')
      .then(response => {
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({ userArticles:data  }))
      .catch(error => {
        console.error('There has been a problem with youor fetch operation:', error);
      });
    }


    // componentDidMount(){
    //   fetch('/api/v1/articles/users')
    //   .then(response => {
    //     if(!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .then(data => this.setState({ data  }))
    //   .catch(error => {
    //     console.error('There has been a problem with youor fetch operation:', error);
    //   });
    // }


  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  addArticle(event) {
    event.preventDefault();
    const userArticles = {
      text: this.state.text,
    };
    const options = {
      method: 'POST',
      headers: {
        'Contnet-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(userArticles),
    }
    fetch('/api/v1/articles/users', options)
      .then(response => response.json())
      .then(data => {
        const userArticles = [...this.state.userArticles];
        userArticles.push(data);
        this.setState({userArticles});
        this.setState({ text: '' });
      });
  }

    editArticle(id, text) {
      const userArticles = {
        text,
      };
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'applications/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(userArticles),
      }
      fetch(`/api/v1/articles/${id}/`, options)
        .then(response => {
          if(!response.ok) {
            throw new Error('Network response was not ok');
          }
          const userArticles = [...this.state.userArticles];
          const index = userArticles.findIndex(article => userArticles.id === id);
          userArticles[index].text = text;
          this.setState({ userArticles });
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
            const userArticles = [...this.state.userArticles];
            const index = userArticles.findIndex(article => userArticles.id === id);
            userArticles.splice(index, 1);
            this.setState({ userArticles });
          })
          .catch((error) => {
            console.err('Error:', error);
          });
        }

    render() {
      const userArticles = this.state.userArticles.map(userArticle => (
        <ArticleDetail key={userArticles.id} userArticle={userArticle} deleteArticle={this.deleteArticle} editArticle={this.editArticle} />
      ));

      return (
        <>
          <ul>{userArticles}</ul>
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
