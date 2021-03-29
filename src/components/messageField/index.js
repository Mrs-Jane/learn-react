import {Component} from 'react';
import Message from '@components/message';

class MessageField extends Component{
    render() {
        const {messages} = this.props;
        const Messages = messages.map((el) =>
            <Message
                key={el.id}
                author={el.author}
                text={el.text}
            />);

        return (
            <div>
                {Messages}
            </div>
        );
    }
}


export default MessageField;