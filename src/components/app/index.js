import {Component} from 'react';
import Header from '@components/header';
import ChatsList from '@components/chatsList';
import MessageField from '@components/messageField';
import {AUTHORS} from '@utils/constants';
import {List} from '@material-ui/core';
import './styles.scss';

export default class App extends Component {
    state = {
        messages: {
            1: {author: AUTHORS.BOT, text: 'Сообщение от бота 1'},
            2: {author: AUTHORS.ME, text: 'Сообщение от меня 1'},
            3: {author: AUTHORS.BOT, text: 'Сообщение от бота 2'},
            4: {author: AUTHORS.ME, text: 'Сообщение от меня 2'},
            5: {author: AUTHORS.BOT, text: 'Сообщение от бота 3'},
            6: {author: AUTHORS.ME, text: 'Сообщение от меня 3'}
        },
        chats: {
            1: {name: 'Курилка', messageList: [1, 2]},
            2: {name: 'Работа', messageList: [3, 4]},
            3: {name: 'Куры', messageList: [5, 6]}
        }
    }

    static defaultProps = {
        chatId: 1
    }

    form = (text, author = AUTHORS.ME) => {
        const {messages, chats} = this.state;
        const {chatId} = this.props;

        if (text.length > 0) {
            const messageId = Object.keys(messages).length + 1;
            this.setState({
                messages: {...messages,
                    [messageId]: {text: text, author: author}},
                chats: {...chats,
                    [chatId]: {...chats[chatId],
                        messageList: [...chats[chatId].messageList, messageId]
                    }
                }
            });
        }
    }

    newChat = (name) => {
        const {chats} = this.state;
        const chatId = Object.keys(chats).length + 1;
        this.setState({
            chats: {
                ...chats,
                [chatId]: {name: name, messageList: []}
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const {messages} = this.state;

        if (Object.keys(messages).length !== Object.keys(prevState.messages).length) {
            const prevMessage = Object.values(messages)[Object.values(messages).length - 1];

            if (prevMessage.author === AUTHORS.ME) {
                if (this.timeout) clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.form(`Бот ответил вам на сообщение "${prevMessage.text}"`, AUTHORS.BOT);
                }, 2000);
            }
        }
    }

    render() {
        const {messages, chats} = this.state;
        const {chatId} = this.props;

        return (
            <div className='chat'>
                <Header text='Чат'/>
                <div className='chat__wrap'>
                    <div className='chat__content'>
                        <div className='chat__list'>
                            <List component='nav' aria-label='main mailbox folders'>
                                <ChatsList chats={chats} newChat={this.newChat} />
                            </List>
                        </div>
                        <MessageField messages={messages} chats={chats} chatId={chatId} form={this.form} />
                    </div>
                </div>
            </div>
        )
    }
}