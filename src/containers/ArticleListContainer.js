import React, { Component } from 'react'
import { ArticlesData } from '../data/articlesData'

class ArticleListContainer extends Component {
  constructor() {
    super()
    this.state = {
      articles: ArticlesData,
      shouldShowNewArticleForm: false
    }

    this.showNewArticleForm = this.showNewArticleForm.bind(this)
    this.addNewArticle = this.addNewArticle.bind(this)
    this.favouriteArticle = this.favouriteArticle.bind(this)
    this.removeArticle = this.removeArticle.bind(this)
  }

  addNewArticle(title, articleUrl, imageUrl) {
    this.setState({
      articles: [
        ...this.state.articles, {
          favourite: false,
          title,
          imageUrl,
          articleUrl
        }
      ],
      shouldShowNewArticleForm: false
    })
  }

  showNewArticleForm() {
    this.setState({
      ...this.state,
      shouldShowNewArticleForm: true
    })
  }

  favouriteArticle(index) {
    let articles = [...this.state.articles]
    let favouritedArticle = articles.splice(index, 1)[0]
    favouritedArticle.favourite = true

    articles.unshift(favouritedArticle)

    this.setState({
      ...this.state,
      articles
    })
  }

  removeArticle(index) {
    let articles = [...this.state.articles]
    articles.splice(index, 1)

    this.setState({
      ...this.state,
      articles
    })
  }

  render() {
    const componentProps = {
      ...this.state,
      addNewArticle: this.addNewArticle,
      showNewArticleForm: this.showNewArticleForm,
      favouriteArticle: this.favouriteArticle,
      removeArticle: this.removeArticle
    }

    return React.createElement(this.props.component, componentProps)
  }
}

export default ArticleListContainer
