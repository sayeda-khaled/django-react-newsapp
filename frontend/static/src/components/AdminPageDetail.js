import { Component } from 'react';


class AdminPageDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      title: this.props.articles.title,
      body: this.props.articles.body,
    }
    this.handleInput = this.handleInput.bind(this);
    this.saveArticle = this.saveArticle.bind(this);

  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  saveArticle() {
    const article = this.props.article;
    article.title = this.state.title;
    article.body = this.state.body;
    this.props.editArticle(article);
    this.setState({ isEditing: false });
  }

  render() {
    const articles = this.props.article;
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
                    <h2>{articles.title}</h2>
                    <p>{articles.body}</p>
                  </>
                )
            }
            {
            <button onClick={() => this.props.deleteArticle(articles.id)}>delete</button>

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


export default AdminPageDetail;
