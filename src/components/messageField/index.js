import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Message from '@components/message';
import Form from '@components/form';
import {addMessage} from '@store/messages/actions';
import {AUTHORS} from '@utils/constants';

const MessageField = ({chatId}) => {
    const messages = useSelector((state) => state.messages);
    const dispatch = useDispatch();
    const messageList = messages[chatId] || [];

    const Messages = messageList.map((el) => <Message
        key={el.id}
        author={el.author}
        text={el.text}
    />);

    const handlerMessage = useCallback((text, author = AUTHORS.ME) => {
        if (text.length > 0) {
            dispatch(addMessage(text, author, chatId));
        }
    }, [dispatch, chatId]);


    useEffect(() => {
        let timer;
        const messageList = messages[chatId] || [];
        const prevMessage = messageList.length && messageList[messageList.length - 1];

        if (prevMessage && prevMessage.author !== AUTHORS.BOT) {
            timer = setTimeout(() => {
                handlerMessage(`Бот ответил вам на сообщение "${prevMessage.text}"`, AUTHORS.BOT);
            }, 2000);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [messages, chatId, handlerMessage]);

    return (
        <div className='chat__box'>
            <div className='chat__messages'>
                {Messages}
            </div>
            <Form handlerMessage={handlerMessage} chatId={chatId} />
        </div>
    );
}

export default MessageField;