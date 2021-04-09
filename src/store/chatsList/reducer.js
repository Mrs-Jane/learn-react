import {ADD_CHAT} from './types';

const initialState = {};

export const chatsListReducer = (state = initialState, action) => {
    switch (action.type) {
            case ADD_CHAT: {
                const chatId = Object.keys(state).length + 1;
                return {
                    ...state,
                    [chatId]: {name: action.name, messageList: []}
                };
            }

            default:
                return state;
    }
};