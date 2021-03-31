import {Component} from 'react';

export default class AddMessage extends Component {
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
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type='text'
                    placeholder='Пиши тут...'
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button type='submit'>Отправить</button>
            </form>
        )
    }
}