import React, { Component } from 'react'
import './ArticleHeader.css'

class ArticleHeader extends Component {
  render() {
    return (
      <div className="ArticleHeader">
        <span className={"typcn typcn-star " + (this.props.favourite ? 'Favourited': '')} onClick={this.props.favouriteArticle}></span>
        <span className="typcn typcn-times" onClick={this.props.removeArticle}></span>
      </div>
    )
  }
}

export default ArticleHeader
