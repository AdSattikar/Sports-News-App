import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  apiKey= process.env.REACT_APP_NEWS_API;
  state = {
    progress:0,
    searchQuery:''
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }

  handleSearchQueryChange = (query) => {
   this.setState({ searchQuery: query });
  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar handleSearchQueryChange={this.handleSearchQueryChange}/>
          <LoadingBar
            color='#f11946'
            height={4}
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} searchQuery={this.state.searchQuery} key="in" country="in" pageSize={6} />} />
            <Route path="/UK" element={<News setProgress={this.setProgress} apiKey={this.apiKey} searchQuery={this.state.searchQuery} key="gb" country="gb" pageSize={6} />} />
            <Route path="/US" element={<News setProgress={this.setProgress} apiKey={this.apiKey} searchQuery={this.state.searchQuery} key="us" country="us" pageSize={6} />} />
            <Route path="/Germany" element={<News setProgress={this.setProgress} apiKey={this.apiKey} searchQuery={this.state.searchQuery} key="de" country="de" pageSize={6} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App