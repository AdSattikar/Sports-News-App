import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
        let {imageurl,title,description,source,author,date,newsUrl} = this.props
        return (
            <div className='my-3'>
                <div className="card" style={{border: "2px solid black", backgroundColor: "#dad8d8"}}>
                    <img src={imageurl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Source: </strong>{source}</li>
                            <li className="list-group-item"><strong>Author: </strong>{author} </li>
                            <li className="list-group-item"><strong>Date: </strong>{date}</li>
                        </ul>
                        <div className="card-body">
                            <a rel="noreferrer"href={newsUrl} target="_blank" className="card-link btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
