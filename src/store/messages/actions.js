import {ADD_MESSAGE} from './types';
import {AUTHORS} from '@utils/constants';
import {addBlink} from "@store/chatsList/actions";

export const addMessage = (text, author, chatId) =>
    async (dispatch, getState) => {
        dispatch({type: ADD_MESSAGE, text, author, chatId});

        if (author === AUTHORS.ME) {
            const messageList = getState().messages[chatId] || [];
            const prevMessage = messageList.length && messageList[messageList.length - 1];
            const res = await fetch(
                `https://www.botlibre.com/rest/api/form-chat?instance=165&message="${prevMessage.text}"&application=2040298419200776370`
            );
            const response = await res.text();
            const answer = response.substring(
                response.lastIndexOf("<message>") + 9,
                response.lastIndexOf("</message>")
            );

            if (prevMessage && prevMessage.author !== AUTHORS.BOT) {
                setTimeout(() => {
                    dispatch({
                        type: ADD_MESSAGE,
                        text: answer,
                        author: AUTHORS.BOT,
                        chatId
                    });
                    dispatch(addBlink(chatId, true));
                }, 1000);
            }
        }
    }
