import React, { Component } from 'react'
import NewsItem from './NewsItem'
//import PropTypes from 'prop-types'
import newsData from '../news.json';
import Spinner from './Spinner';

export class Home extends Component {
    articles = []
    url = 'https://newsapi.org/v2/everything?q=apple&from=2022-11-02&to=2022-11-02&sortBy=popularity&apiKey=ec0477e5e4154ba3a90b3fbb5bbf1a65';

    constructor() {
        console.log('constructor')
        super()
        this.state = {
            articles: this.articles,
            loading: true,
            pageSize: 20,
            page: 1,
            dataUrl: this.url,
            totalRecords: 50,

        }
    }

    async loadData() {
        await this.setState({ loading: true })
        let dataUrl = `${this.state.dataUrl}&pageSize=${this.state.pageSize}&page=${this.state.page}`;
        console.log(dataUrl)

        let d = await fetch(dataUrl);
        let n = await d.json()
        console.log(n.articles)
        this.setState({ articles: n.articles });
        await this.setState({ loading: false })
    }

    async componentDidMount() {
        console.log('componentDidMount')
        this.loadData()
        // this.setState({articles:n.articles})        
    }

    previous = async () => {
        await this.setState({ loading: true })
        if (this.state.page > 1) {
            await this.setState((state) => {
                return { page: state.page - 1 }
            });
        }
        // console.log(this.state.disablePrvBtn)
        // await this.setState({ page: page })
        await this.loadData()
    }

    next = async () => {
        await this.setState({ loading: true })
        if (this.state.page + 1 > Math.ceil(this.state.totalRecords / 20)) {
            console.log('---')
        } else {
            await this.setState((state) => {
                return { page: state.page + 1 }
            });
        }
        await this.loadData()
    }

    render() {
        console.log('render')
        return (
            <div className='container my-3'>
                <h1 className='text-center'>News Hunt - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((article) => {
                        return <div className="col-md-3" key={article.url}>
                            <NewsItem title={article.title ? article.title.slice(0, 45) : ''} description={article.description ? article.description.slice(0, 80) : ""} imgUrl={article.urlToImage} newsUrl={article.url} />
                        </div>
                    })}
                </div>

                <div className="row">
                    <div className="col-md-6 tal">
                        <button type="button" className="btn btn-info" onClick={this.previous} disabled={this.state.page <= 1} >Previous</button>
                    </div>
                    <div className="col-md-6 tar">
                        <button type="button" className="btn btn-info" onClick={this.next} disabled={this.state.page + 1 > Math.ceil(this.state.totalRecords / 20)}>Next</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home
