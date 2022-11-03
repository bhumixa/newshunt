import React, { Component } from 'react'
import NewsItem from './NewsItem'
//import PropTypes from 'prop-types'
import newsData from '../news.json';

export class Home extends Component {
    articles = []

    constructor() {
        console.log('constructor')
        super()
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    async componentDidMount(){
        console.log('componentDidMount')
        let dataUrl = 'https://newsapi.org/v2/everything?q=apple&from=2022-11-02&to=2022-11-02&sortBy=popularity&apiKey=ec0477e5e4154ba3a90b3fbb5bbf1a65';
        
        let d = await fetch(dataUrl)
        console.log(d)
        let n = await d.json()
        console.log(n.articles)
        this.setState({articles: n.articles});
       // this.setState({articles:n.articles})        
    }

    render() {
        console.log('render')
        return (
            <div className='container my-3'>
                <h1>News Hunt - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((article) => {
                        return <div className="col-md-3" key={article.url}>
                            <NewsItem title={article.title ? article.title.slice(0, 45) : ''} description={article.description ? article.description.slice(0, 80) : ""} imgUrl={article.urlToImage} newsUrl={article.url} />
                        </div>
                    })}

                </div>

            </div>
        )
    }
}

export default Home
