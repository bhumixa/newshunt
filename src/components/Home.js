import React, { Component } from 'react'
import NewsItem from './NewsItem'
//import PropTypes from 'prop-types'

export class Home extends Component {
//   static propTypes = {

//   }

  render() {
    return (
      <div>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    )
  }
}

export default Home
