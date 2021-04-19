import {ADD_MESSAGE} from './types';
import {AUTHORS} from '@utils/constants';
import {addBlink} from "@store/chatsList/actions";

export const addMessage = (text, author, chatId) =>
    (dispatch, getState) => {
        dispatch({type: ADD_MESSAGE, text, author, chatId});

        if (author === AUTHORS.ME) {
            const messageList = getState().messages[chatId] || [];
            const prevMessage = messageList.length && messageList[messageList.length - 1];

            if (prevMessage && prevMessage.author !== AUTHORS.BOT) {
                setTimeout(() => {
                    dispatch({
                        type: ADD_MESSAGE,
                        text: `Бот ответил вам на сообщение "${prevMessage.text}"`,
                        author: AUTHORS.BOT,
                        chatId
                    });
                    dispatch(addBlink(chatId, true));
                }, 1000);
            }
        }
    }