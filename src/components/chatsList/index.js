import {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addChat} from "@store/chatsList/actions";
import {List, ListItem, ListItemText, Typography, TextField} from '@material-ui/core';
import {Link} from 'react-router-dom';

const ChatsList = () => {
    const [inputValue, setInputValue] = useState('');
    const chats = useSelector((state) => state.chats);
    const dispatch = useDispatch();

    const onValueChange = useCallback((e) => {
        setInputValue(e.target.value);
    }, []);

    const onSubmit = useCallback((e) => {
        const value = inputValue.trim();
        if (!value) return;
        dispatch(addChat(value));
        setInputValue('');
    }, [inputValue, dispatch]);

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
            <form onSubmit={onSubmit}>
                <TextField
                    className='chat-list__input'
                    type='text'
                    label='Добавить чат'
                    onChange={onValueChange}
                    value={inputValue}
                />
            </form>
        </List>
    );
}

export default ChatsList;