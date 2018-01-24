import React from 'react'
import ReactDOM from 'react-dom'
import './toaster.scss'

export default class Toaster extends React.Component {

    render() {
        return (
            <div className='container show'>I'm a toast</div>
        )
    }
}