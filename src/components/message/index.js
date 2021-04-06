import {AUTHORS} from '@utils/constants';

const Message = ({author, text}) => {
    const me = author === AUTHORS.ME;

    return (
        <div className='chat__message'>
            <div>{text}</div>
            <div className='chat__author'>{author}</div>
        </div>
    )
}

export default Message;