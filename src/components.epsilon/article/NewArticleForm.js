import React, { Component } from 'react'
import './NewArticleForm.css'

class NewArticleForm extends Component {
  render() {
    return (
      <div className="New-article-form">
        <div>
          Title: <input value={this.props.title} onChange={this.props.updateTitleValue} />
        </div>
        <div>
          Url: <input value={this.props.url} onChange={this.props.updateUrlValue} />
        </div>
        <div>
          Image Url: <input value={this.props.imageUrl} onChange={this.props.updateImageUrlValue} />
        </div>
        <div className="Add" onClick={this.props.addArticle}>Add</div>
      </div>
    )
  }
}

export default NewArticleForm
