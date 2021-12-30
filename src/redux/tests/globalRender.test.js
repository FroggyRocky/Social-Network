import App from '../../App'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import store from '../store'
import React from 'react';

it('should render the whole app', () => {
    const div = document.createElement('div')  
    ReactDOM.render(<Provider store={store}><App/></Provider>, div)
    ReactDOM.unmountComponentAtNode(div)
});
