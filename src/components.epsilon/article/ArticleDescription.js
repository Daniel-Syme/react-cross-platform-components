import React, { Component } from 'react'
import './ArticleDescription.css'

class ArticleDescription extends Component {
  render() {
    return (
      <a href={this.props.articleUrl}>
        <div className="Article-image-container">
          <img className="Article-image" src={this.props.imageUrl} alt={this.props.title} />
        </div>
        <div className="Article-title">
          {this.props.title}
        </div>
      </a>
    )
  }
}

export default ArticleDescription
