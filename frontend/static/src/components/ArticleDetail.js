import { Component } from 'react';


class ArticleDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      text: this.props.userArticle.text,
    }
    this.handleInput = this.handleInput.bind(this);
    this.saveArticle = this.saveArticle.bind(this);

  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  saveArticle() {
    this.props.editArticle(this.props.userArticles.id, this.state.text);
    this.setState({ isEditing: false });
  }

  render() {
    const userArticles = this.props.userArticle;
    return(
      <li>
        <h2>{userArticles.title}</h2>
        <p>{userArticles.author}</p>
        <div>
          {
            this.state.isEditing
            ? <input type="text" value={this.state.text} onChange={this.handleInput} name="text"/>
            : <p>{userArticles.body}</p>
            }

          {
            userArticles.is_owner && <button onClick={() => this.props.deleteArticle(userArticles.id)}>delete</button>

          }
          {
            this.state.isEditing
            ? <button type = 'button' onClick={this.saveArticle}>Save</button>
            : userArticles.is_owner && <button onClick={() => this.setState({isEditing: true})}>Edit</button>
          }
        </div>


      </li>
    )
  }
}


export default ArticleDetail;
