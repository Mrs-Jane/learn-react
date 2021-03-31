import {Component} from 'react';
import MessageField from '@components/messageField';
import AddMessage from '@components/addMessage';
import {AUTHORS} from '@utils/constants';

export default class App extends Component {
    state = {
        messages: [
            {
                author: AUTHORS.BOT,
                text: 'Привет от бота',
                id: '0'
            }
        ]
    }

    addMessage = (text, author = AUTHORS.ME) => {
        if (text.length > 0) {
            this.setState(({messages}) => ({
                messages: [...messages, {
                    author: author,
                    text: text,
                    id: `${messages.length + 1}`
                }]
            }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {messages} = this.state;

        if (messages.length !== prevState.messages.length) {
            const prevMessage = messages[messages.length - 1];

            if (prevMessage.author === AUTHORS.ME) {
                this.addMessage(`Бот ответил вам на сообщение "${prevMessage.text}"`, AUTHORS.BOT)
            }
        }
    }

    render() {
        const {messages} = this.state;

        return (
            <div>
                <MessageField messages={messages}/>
                <AddMessage onAdd={this.addMessage} />
            </div>
        )
    }
}