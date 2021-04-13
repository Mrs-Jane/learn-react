import React, {Component} from 'react';
import {TextField, Button} from '@material-ui/core';

export default class Form extends Component {
    state = {
        text: ''
    }

    textInput = React.createRef();

    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.handlerMessage(this.state.text);
        this.setState({
            text: ''
        });
    }

    componentDidMount() {
        this.textInput.current.focus();
    }

    render() {
        return (
            <form className='chat__form' onSubmit={this.onSubmit}>
                <TextField type='text'
                    placeholder='Пиши тут...'
                    onChange={this.onValueChange}
                    value={this.state.text}
                    inputRef={this.textInput}
                    variant='outlined'
                    style={{width: '100%'}}
                />
                <Button variant='contained' color='primary' size='large' type='submit'>Отправить</Button>
            </form>
        )
    }
}