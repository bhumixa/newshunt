import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import newsData from '../news.json';
import Spinner from './Spinner';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        category: 'business'
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }

    articles = []
    url = 'https://newsapi.org/v2/top-headlines?apiKey=ec0477e5e4154ba3a90b3fbb5bbf1a65';

    makeCapitalize = (word) => {
        console.log(word)
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            articles: this.articles,
            loading: true,
            pageSize: 20,
            page: 1,
            dataUrl: this.url,
            totalRecords: 50,

        }
        document.title = `${this.makeCapitalize(this.props.category)} - News Hunt`
    }

    async loadData() {
        await this.setState({ loading: true })
        console.log(this.props.category)
        //debugger
        let dataUrl = `${this.state.dataUrl}&country=${this.props.country}&category=${this.props.category}&pageSize=${this.state.pageSize}&page=${this.state.page}`;
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
                <h1 className='text-center'>News Hunt - Top {this.makeCapitalize(this.props.category)} Headlines </h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((article) => {
                        return <div className="col-md-3 " key={article.url}>
                            <NewsItem title={article.title ? article.title.slice(0, 45) : ''} description={article.description ? article.description.slice(0, 80) : ""}
                                imgUrl={article.urlToImage} newsUrl={article.url} author={article.author ? article.author : 'Unknown'} date={article.publishedAt} />
                        </div>
                    })}
                </div>

                <div className="row">
                    <div className="col-md-6 tal">
                        <button type="button" className="btn btn-dark" onClick={this.previous} disabled={this.state.page <= 1} > &laquo; Previous</button>
                    </div>
                    <div className="col-md-6 tar">
                        <button type="button" className="btn btn-dark" onClick={this.next} disabled={this.state.page + 1 > Math.ceil(this.state.totalRecords / 20)}>Next &raquo;</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default News
