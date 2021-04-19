import {ADD_CHAT} from './types';
import {ADD_BLINK} from './types';

const initialState = {
    1: { name: 'Основной чат',  id: 1}
};

export const chatsListReducer = (state = initialState, action) => {
    switch (action.type) {
            case ADD_CHAT: {
                const chatId = Object.keys(state).length + 1;
                return {
                    ...state,
                    [chatId]: {name: action.name, id: chatId, isBlink: false}
                };
            }

            case ADD_BLINK: {
                const chat = state[action.id];
                if (!chat) return;

                const obj = {
                    ...state,
                    [action.id]: {
                        ...chat,
                        isBlink: !!action.blink
                    }
                }

                return obj;
            }

            default:
                return state;
    }
};