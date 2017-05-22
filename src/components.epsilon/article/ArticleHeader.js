import React, { Component } from 'react'
import './ArticleHeader.css'

class ArticleHeader extends Component {
  render() {
    return (
      <div className="ArticleHeader">
        <span className={"typcn typcn-arrow-up-thick"} onClick={this.props.favouriteArticle}></span>
        <span className="typcn typcn-delete" onClick={this.props.removeArticle}></span>
      </div>
    )
  }
}

export default ArticleHeader
