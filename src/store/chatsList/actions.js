import {ADD_CHAT} from './types';
import {ADD_BLINK} from "./types";

export const addChat = (name) => ({
    type: ADD_CHAT,
    name
});

export const addBlink = (id, blink) =>
    (dispatch) => {
        dispatch({
            type: ADD_BLINK,
            id,
            blink
        });

        if (addBlink) {
            setTimeout(() => {
                dispatch({
                    type: ADD_BLINK,
                    id,
                    blink: false
                });
            }, 500);
        }
    }