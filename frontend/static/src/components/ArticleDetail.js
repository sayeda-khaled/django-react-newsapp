import { Component } from 'react';


class ArticleDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      text: this.props.article.text,
    }
    this.handleInput = this.handleInput.bind(this);
    this.saveArticle = this.saveArticle.bind(this);

  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  saveArticle() {
    this.props.editArticle(this.props.article.id, this.state.text);
    this.setState({ isEditing: false });
  }

  render() {
    const article = this.props.article;
    return(
      <li>
        <h2>{article.title}</h2>
        <p>{article.author}</p>
        <div>
          {
            this.state.isEditing
            ? <input type="text" value={this.state.text} onChange={this.handleInput} name="text"/>
            : <p>{article.body}</p>
            }

          {
            article.is_owner && <button onClick={() => this.props.deleteArticle(article.id)}>delete</button>

          }
          {
            this.state.isEditing
            ? <button type = 'button' onClick={this.saveArticle}>Save</button>
            : article.is_owner && <button onClick={() => this.setState({isEditing: true})}>Edit</button>
          }
        </div>


      </li>
    )
  }
}


export default ArticleDetail;
