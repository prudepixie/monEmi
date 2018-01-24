import React from 'react'
import ReactDOM from 'react-dom'
import './toaster.scss'

export default class Toaster extends React.Component {

    render() {
        console.log('props', this.props)
        const {message, showToast} = this.props
        let toast = null
        if (showToast) {
            toast = <div className='container show'>{message}</div>
        }

        return (
            <div>{toast}</div>
        )
    }
}