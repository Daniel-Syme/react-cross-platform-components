import React, { Component } from 'react'
import './App.css'
import ArticleListContainer from '../containers/ArticleListContainer'
import ArticleList from './article/ArticleList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Title">Links</div>
        <ArticleListContainer component={ArticleList}/>
      </div>
    )
  }
}

export default App
