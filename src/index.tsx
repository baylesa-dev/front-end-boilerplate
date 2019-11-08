import React from 'react'
import ReactDOM from 'react-dom'

import App from 'containers/App'

import 'styles/main.scss'

const MOUNT_NODE: HTMLElement | null = document.getElementById('root')

const render = () => {
	ReactDOM.render(<App />, MOUNT_NODE)
}

/**
 * This part of the entry point code allows DOM Hot Reloading
 *
 * Dependencies:
 *  - @types/webpack-env
 */
if (module.hot) {
	module.hot.accept('./containers/App', () => {
		const NewRoot = require('./containers/App').default
		ReactDOM.render(<NewRoot />, MOUNT_NODE)
	})
}

render()
