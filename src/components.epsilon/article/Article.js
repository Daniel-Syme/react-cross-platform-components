import React, { Component } from 'react'
import './Article.css'
import ArticleHeader from './ArticleHeader'
import ArticleDescription from './ArticleDescription'

class Article extends Component {
  render() {
    return (
      <div className="Article">
        <ArticleHeader
          favourite={this.props.favourite}
          favouriteArticle={this.props.favouriteArticle}
          removeArticle={this.props.removeArticle}
        />
        <ArticleDescription
          articleUrl={this.props.articleUrl}
          imageUrl={this.props.imageUrl}
          title={this.props.title}
        />
      </div>
    )
  }
}

export default Article
