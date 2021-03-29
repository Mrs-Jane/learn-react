import React from 'react';
import ReactDom from 'react-dom';

const container = document.getElementById('root');
const title = <div>
                <h1>Дратути!</h1>
            </div>;

let array = [
    { name: 'msg1', text: 'Ок' },
    { name: 'msg2', text: 'Не ок' },
    { name: 'msg3', text: 'Че-то совсем не ок' }
];

const Content = props => {
    const arrayObj = array.map((el, i) => <div key={ i }> { el.name }: { el.text } </div>);

    return <div>
                { title }
                { arrayObj }
                <button onClick={add} style={{ marginTop: '15px' }}>Это нормально</button>
            </div>
}

ReactDom.render(<Content />, container);

function add() {
    array.push({ name: 'msg4', text: 'Нормально делай, нормально будет' });
    ReactDom.render(<Content />, container);
}