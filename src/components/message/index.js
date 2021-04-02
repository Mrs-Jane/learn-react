import {AUTHORS} from '@utils/constants';

const Message = (props) => {
    const {author, text} = props;

    return (
        <div className='chat__message'>
            <div>{text}</div>
            <div className='chat__author'>{author}</div>
        </div>
    )
}

export default Message;