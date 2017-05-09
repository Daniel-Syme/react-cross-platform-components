import React, { Component } from 'react'

class NewArticleFormContainer extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      url: '',
      imageUrl: ''
    }

    this.updateTitleValue = this.updateTitleValue.bind(this)
    this.updateUrlValue = this.updateUrlValue.bind(this)
    this.updateImageUrlValue = this.updateImageUrlValue.bind(this)
    this.addArticle = this.addArticle.bind(this)
  }

  updateTitleValue(evt) {
    this.setState({
      ...this.state,
      title: evt.target.value
    })
  }

  updateUrlValue(evt) {
    this.setState({
      ...this.state,
      url: evt.target.value
    })
  }

  updateImageUrlValue(evt) {
    this.setState({
      ...this.state,
      imageUrl: evt.target.value
    })
  }

  addArticle() {
    this.props.addNewArticle(this.state.title, this.state.url, this.state.imageUrl)
  }

  render() {
    const componentProps = {
      updateTitleValue: this.updateTitleValue,
      updateUrlValue: this.updateUrlValue,
      updateImageUrlValue: this.updateImageUrlValue,
      addArticle: this.addArticle
    }

    return React.createElement(this.props.component, componentProps)
  }
}

export default NewArticleFormContainer
