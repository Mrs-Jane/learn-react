import ReactDOM from 'react-dom';
import Router from '@components/router';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>,
    document.getElementById('app'),
);