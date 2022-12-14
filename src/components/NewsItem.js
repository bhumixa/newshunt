import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

export class NewsItem extends Component {

    static propTypes = {

    }

    render() {
        let { title, description, imgUrl, newsUrl, author, date } = this.props;

        return (
            <>
                <div className="my-3 container">
                    <div className="row ">
                        <div className="card col-md-12 " style={{ width: '18rem' }}>
                            <img src={imgUrl ? imgUrl : process.env.PUBLIC_URL + '/no-image.jpeg'} className="card-img-top news-image my-1" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {title}
                                </h5>
                                <p className="card-text"> {description} </p>
                                <p className="card-text"><small className="text-muted">By {author} on {moment(date).format('llll')} </small></p>
                                <a href={newsUrl} target="_blank" className="btn btn-sm btn-danger">Read More</a>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default NewsItem
