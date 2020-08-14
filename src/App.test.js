import React from 'react';
import App from './components/App';
import { render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
test('renders learn react link', () => {
    //const div = document.createElement('div');
    //ReactDOM.render(<App />, div);
    render(<App />);
});