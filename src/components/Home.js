import React, { Component } from 'react'
import NewsItem from './NewsItem'
//import PropTypes from 'prop-types'

export class Home extends Component {
    //   static propTypes = {

    //   }

    render() {
        return (
            <div className='container my-3'>
                <h2>Top Headlines</h2>
                <div className="row">
                    <div className="col md-3">
                        <NewsItem title="title" description="description" />
                    </div>
                    <div className="col md-3">
                        <NewsItem title="title" description="description" />
                    </div>
                    <div className="col md-3">
                        <NewsItem title="title" description="description" />
                    </div>                   
                </div>

            </div>
        )
    }
}

export default Home
