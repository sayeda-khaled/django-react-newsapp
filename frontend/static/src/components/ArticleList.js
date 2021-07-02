import { Component } from 'react';
import ArticleDetail from './ArticleDetail.js';

import Cookies from 'js-cookie';


class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state={
      userArticles: [],
      title: '',
      body: '',
    }
    this.addArticle = this.addArticle.bind(this);
    this.editArticle = this.editArticle.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.handleInput = this.handleInput.bind(this);
    // this.fetchArticles = this.fetchArticles.bind(this);

  }


    // if the user is authenticated pull their articles otherwise pull published articles


    componentDidMount(){
      fetch('/api/v1/articles/user/')
      .then(response => {
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({ userArticles: data  }))
      .catch(error => {
        console.error('There has been a problem with youor fetch operation:', error);
      });
    }

    // fetchArticles(){
    //   const options= {
    //     method: 'GET',
    //     headers: {
    //     'Content-Type': 'application/json',
    //     'X-CSRFToken': Cookies.get('csrftoken'),
    //     },
    //   }
    //     fetch('/api/v1/articles/users')
    //     .then(response => {
    //       if(!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       return response.json();
    //     })
    //     .then(data => this.setState({ userArticles: data  }))
    //     .catch(error => {
    //       console.error('There has been a problem with youor fetch operation:', error);
    //     });
    //   }




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
        const userArticles = [...this.state.userArticles, data];
        // userArticles.push(data);
        this.setState({userArticles, title: '', body: ''});
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
          const userArticles = [...this.state.userArticles];
          const index = userArticles.findIndex(userArticle => userArticle.id === article.id);
          userArticles[index].title = article.title;
          userArticles[index].body = article.body;
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
        fetch(`/api/v1/articles/user/${id}/`, options)
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
            console.error('Error:', error);
          });
        }

        // render() {
        //   const userArticles = this.state.userArticles.map(userArticle => (
        //     <ArticleDetail key={userArticle.id} userArticle={userArticle} deleteArticle={this.deleteArticle} editArticle={this.editArticle} />
        //   ));
        //
        //   return (
        //     <>
        //       <ul>{userArticles}</ul>
        //       <section className="submit">
        //         <form onSubmit={this.addArticle}>
        //
        //           <input className="text" type="text" name="text" value={this.state.title} onChange={this.handleInput} />
        //           <input className="text" type="text" name="text" value={this.state.body} onChange={this.handleInput} />
        //           <button type="submit" class="btn btn-primary offset">Submit</button>
        //         </form>
        //       </section>
        //
        //     </>
        //     )
        //   }
        //
        // }

    render() {
      const userArticles = this.state.userArticles.map(userArticle => (
        <ArticleDetail key={userArticle.id} userArticle={userArticle} deleteArticle={this.deleteArticle} editArticle={this.editArticle} />
      ));

      return (
        <>
          <ul>{userArticles}</ul>
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

    export default ArticleList;
