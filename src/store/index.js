import {createStore, combineReducers} from "redux";
import {chatsListReducer} from "./chatsList/reducer";
import {messagesReducer} from "./messages/reducer";
import {profileReducer} from "./profile/reducer";

const store = createStore(
    combineReducers({
        chats: chatsListReducer,
        messages: messagesReducer,
        profile: profileReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;