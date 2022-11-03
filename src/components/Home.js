import React, { Component } from 'react'
import NewsItem from './NewsItem'
//import PropTypes from 'prop-types'
import newsData from '../news.json';

export class Home extends Component {
    articles = []
    url = 'https://newsapi.org/v2/everything?q=apple&from=2022-11-02&to=2022-11-02&sortBy=popularity&apiKey=ec0477e5e4154ba3a90b3fbb5bbf1a65';
   
    constructor() {
        console.log('constructor')
        super()
        this.state = {
            articles: this.articles,
            loading: false,
            pageSize: 12,
            page: 1,
            dataUrl: this.url,
            totalRecords: 50,
            disableNextBtn: false,
            disablePrvBtn: true
        }
    }

    async loadData() {

        let dataUrl = `${this.state.dataUrl}&pageSize=${this.state.pageSize}&page=${this.state.page}`;
        console.log(dataUrl)

        let d = await fetch(dataUrl);
        let n = await d.json()
        console.log(n.articles)
        this.setState({ articles: n.articles });
    }

    async componentDidMount() {
        console.log('componentDidMount')
        this.loadData()
        // this.setState({articles:n.articles})        
    }

    previous = async () => {
        let page = 0;
        if (this.state.page > 1) {
            page = this.state.page - 1;
        } else {
            this.setState({
                disablePrvBtn: true
            });
        }
        console.log(this.state.disablePrvBtn)
        await this.setState({ page: page })
        await this.loadData()
    }

    next = async () => {
        let page = 0;
        if (this.state.totalRecords > this.state.page) {
            page = this.state.page + 1;
            this.setState({
                disablePrvBtn: false
            });
        } else {
            this.setState({
                disableNextBtn: !this.state.disableNextBtn
            });
        }
        console.log(page)
        await this.setState({ page: page })
        await this.loadData()
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
                <div className="row">
                    <div className="col-md-6 tal">
                        <button type="button" className={`btn btn-info ${this.state.disablePrvBtn ? 'disabled' : ''}`} onClick={this.previous} aria-disabled={this.state.disablePrvBtn} >Previous</button>
                    </div>
                    <div className="col-md-6 tar">
                        <button type="button" className={`btn btn-info ${this.state.disableNextBtn ? 'disabled' : ''}`} onClick={this.next} aria-disabled={this.state.disableNextBtn}>Next</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home
