import {Component} from 'react';
import {ListItem, ListItemText} from '@material-ui/core';

class chatsList extends Component{
    render() {
        const {chats} = this.props;
        const ListItems = chats.map((el) =>
            <ListItem button key={el.id}>
                <ListItemText primary={el.name} />
            </ListItem>
        );

        return (
            <div>
                {ListItems}
            </div>
        );
    }
}

export default chatsList;