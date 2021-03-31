import {AUTHORS} from '@utils/constants';

const Message = (props) => {
    const {author, text} = props;

    return (
        <div>
            <b>{author}:</b> {text}
        </div>
    )
}

export default Message;