import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import {chatsListReducer} from './chatsList/reducer';
import {messagesReducer} from './messages/reducer';
import {profileReducer} from './profile/reducer';

const persistConfig = {key: 'chat', storage};
const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        chats: chatsListReducer,
        messages: messagesReducer,
        profile: profileReducer,
    })
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);