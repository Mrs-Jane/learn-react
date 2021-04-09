import {Component} from 'react';
import {List, ListItem, ListItemText, Typography, TextField} from '@material-ui/core';
import {Link} from 'react-router-dom';

export default class ChatsList extends Component{
    state = {
        text: ''
    }

    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addChat(this.state.text);
        this.setState({
            text: ''
        });
    }

    render() {
        const {chats} = this.props;
        const ListItems = Object.keys(chats).map(chatId => (
            <Link to={`/chat/${chatId}`} key={chatId}>
                <ListItem button>
                    <ListItemText primary={<Typography>{chats[chatId].name}</Typography>}/>
                </ListItem>
            </Link>
        ));

        return (
            <List>
                {ListItems}
                <form onSubmit={this.onSubmit}>
                    <TextField
                        type='text'
                        label='Добавить чат'
                        onChange={this.onValueChange}
                        value={this.state.text}
                    />
                </form>
            </List>
        );
    }
}