import {Component} from 'react';
import Header from '@components/header';
import ChatsList from '@components/chatsList';
import MessageField from '@components/messageField';
import Form from '@components/form';
import {AUTHORS} from '@utils/constants';
import {List} from '@material-ui/core';
import './styles.scss';

export default class App extends Component {
    state = {
        messages: [
            {
                author: AUTHORS.BOT,
                text: 'Привет от бота',
                id: '0'
            }
        ],
        chats: [
            {
                id: 111, name: 'Курилка'
            },
            {
                id: 112, name: 'Работа'
            },
            {
                id: 113, name: 'Куры'
            }
        ]
    }

    Form = (text, author = AUTHORS.ME) => {
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
                if (this.timeout) clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.Form(`Бот ответил вам на сообщение "${prevMessage.text}"`, AUTHORS.BOT);
                }, 2000);
            }
        }
    }

    render() {
        const {messages, chats} = this.state;

        return (
            <div className='chat'>
                <Header text='Чат'/>
                <div className='chat__wrap'>
                    <div className='chat__content'>
                        <div className='chat__list'>
                            <List component='nav' aria-label='main mailbox folders'>
                                <ChatsList chats={chats} />
                            </List>
                        </div>
                        <div className='chat__box'>
                            <MessageField messages={messages} />
                            <Form onAdd={this.Form} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}