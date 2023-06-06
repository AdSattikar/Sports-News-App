import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

constructor(){
    super()
    this.state = {
        articles: [],
        loading:false
    }
}
async componentDidMount(){
  console.log("cdm")
   let url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=5ff12dc90e5a48088930b754f5cdf0b9"
   let data = await fetch(url);
   let parsedData = await data.json()
   console.log(parsedData)
   this.setState({
    articles: parsedData.articles})
   }
  render() {
    return (
      <div className='container my-3'>
        <h2>Sports Tak - All Top Sports Headlines here!</h2>
        
        <div className="row">
        {this.state.articles.map((e) =>{
          return <div className="col-md-4" key = {e.url}>
          <NewsItem  title={e.title} description={e.description} imageurl={e.urlToImage} source={e.source.name}author={e.author} date={e.publishedAt} newsUrl={e.url}/>
        </div>
        })}
          
        </div>
      </div >
    )
  }
}

export default News