import ReactDOM from 'react-dom';
import Router from '@components/router';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '@store';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<span>Loading...</span>} persistor={persistor}>
            <Router />
        </PersistGate>
    </Provider>,
    document.getElementById('app'),
);