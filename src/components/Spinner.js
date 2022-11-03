import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Spinner extends Component {   

    render() {
        return (
            <div className='text-center'>
                <img src={process.env.PUBLIC_URL + '/loading.gif'} alt="loading" />
            </div>
        )
    }
}

export default Spinner
