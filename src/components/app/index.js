import {Component} from 'react';
import ChatsList from '@components/chatsList';
import MessageField from '@components/messageField';
import {List} from '@material-ui/core';
import './styles.scss';

export default class App extends Component {
    static defaultProps = {
        chatId: 1
    }

    render() {
        const {chatId} = this.props;

        return (
            <div className='chat'>
                <div className='chat__wrap'>
                    <div className='chat__content'>
                        <div className='chat__list'>
                            <List component='nav' aria-label='main mailbox folders'>
                                <ChatsList />
                            </List>
                        </div>
                        <MessageField chatId={chatId} />
                    </div>
                </div>
            </div>
        )
    }
}