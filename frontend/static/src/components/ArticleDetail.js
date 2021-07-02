import { Component } from 'react';


class ArticleDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      title: this.props.userArticle.title,
      body: this.props.userArticle.body,
    }
    this.handleInput = this.handleInput.bind(this);
    this.saveArticle = this.saveArticle.bind(this);

  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  saveArticle() {
    const article = this.props.userArticle;
    article.title = this.state.title;
    article.body = this.state.body;
    this.props.editArticle(article);
    this.setState({ isEditing: false });
  }

  render() {
    const userArticles = this.props.userArticle;
    return(
      <li>
        <div>
            {
            this.state.isEditing
              ? (
                  <>
                    <input type="text" value={this.state.title} onChange={this.handleInput} name="text"/>
                    <textarea value={this.state.body} onChange={this.handleInput} name="body"></textarea>
                  </>
                )
              : (
                  <>
                    <h2>{userArticles.title}</h2>
                    <p>{userArticles.body}</p>
                  </>
                )
            }
            {
            <button onClick={() => this.props.deleteArticle(userArticles.id)}>delete</button>

            }
            {
            this.state.isEditing
              ? <button type='button' onClick={this.saveArticle}>Save</button>
              : <button onClick={() => this.setState({isEditing: true})}>Edit</button>
            }
        </div>
      </li>
    )
  }
}


export default ArticleDetail;
