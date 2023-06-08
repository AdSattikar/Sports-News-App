import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 6
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    apiKey:PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async updateNews(){
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=sports&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json()
    console.log(parsedData)
    this.props.setProgress(70)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    })
    this.props.setProgress(100)
  }
  async componentDidMount() {
  this.updateNews()
  }

  handlePrevious = async () => {
    this.setState({
      page: this.state.page -1
    })
    this.updateNews()
  }

  handleNext = async () => {
   
    this.setState({
      page: this.state.page +1
    })
    this.updateNews()
  }


  render() {
    return (
      <div className='container my-3'>
        <h2 className = "text-center">Sports Tak - All Top Sports Headlines here!</h2>

        <div className="row">
          {this.state.articles.map((e) => {
            return <div className="col-md-4" key={e.url}>
              <NewsItem title={e.title} description={e.description} imageurl={e.urlToImage} source={e.source.name} author={e.author} date={e.publishedAt} newsUrl={e.url} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </div >
    )
  }
}

export default News