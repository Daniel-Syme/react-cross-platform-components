import React, { Component } from 'react'
import './ArticleList.css'
import Article from './Article'
import NewArticle from './NewArticle'
import NewArticleFormContainer from '../../containers/NewArticleFormContainer'
import NewArticleForm from './NewArticleForm'

class ArticleList extends Component {

  getArticleElements() {
    let articleElements = []
    this.props.articles.forEach((article, index) => articleElements.push((
      <Article
        key={index}
        title={article.title}
        imageUrl={article.imageUrl}
        articleUrl={article.articleUrl}
        favourite={article.favourite}
        favouriteArticle={() => this.props.favouriteArticle(index)}
        removeArticle={() => this.props.removeArticle(index)}
      />
    )))

    return articleElements
  }

  getLastArticleElement() {
    let lastArticleElement
    if (this.props.shouldShowNewArticleForm) {
      lastArticleElement = (<NewArticleFormContainer
        component={NewArticleForm}
        addNewArticle={this.props.addNewArticle}
      />)
    } else {
      lastArticleElement = (<NewArticle showNewArticleForm={this.props.showNewArticleForm} />)
    }

    return lastArticleElement
  }

  render() {
    return (
      <div className="ArticleList">
        {this.getArticleElements()}
        {this.getLastArticleElement()}
      </div>
    )
  }
}

export default ArticleList
