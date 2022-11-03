import React, { Component } from 'react'
import NewsItem from './NewsItem'
//import PropTypes from 'prop-types'
import newsData from '../news.json';

export class Home extends Component {
    articles = newsData
    
    constructor() {
        super()
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>Top Headlines</h2>

                <div className="row">
                    {this.articles.map((article) => {
                        return <div className="col md-3" key={article.url}>
                            <NewsItem  title={article.title} description={article.description} imgUrl={article.urlToImage} newsUrl={article.url} />
                        </div>
                    })}

                </div>

            </div>
        )
    }
}

export default Home
