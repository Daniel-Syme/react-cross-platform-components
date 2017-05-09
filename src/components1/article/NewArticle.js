import React, { Component } from 'react'
import './NewArticle.css'

class NewArticle extends Component {
  render() {
    return (
      <div
        className="New-article"
        onClick={this.props.showNewArticleForm}
      >
        <div className="New-article-text">Add new article</div>
      </div>
    )
  }
}

export default NewArticle
