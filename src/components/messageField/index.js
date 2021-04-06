import Message from '@components/message';
import Form from '@components/form';

const MessageField = ({messages, chats, chatId, form}) => {
    const Messages = [];

    for (let messageId of chats[chatId].messageList) {
        if (messages[messageId]) {
            Messages.push(
                <Message
                    key={messageId}
                    text={messages[messageId].text}
                    author={messages[messageId].author}
                />
            )
        }
    }

    return (
        <div className='chat__box'>
            <div className='chat__messages'>
                {Messages}
            </div>
            <Form form={form} chatId={chatId} />
        </div>
    );
}

export default MessageField;