import {Link} from 'react-router-dom';

const Header = ({text}) => {
    return (
        <div className='chat__header'>
            <div className='chat__header__title'>
                {text}
            </div>
            <Link to='/profile/'>
                <div className='chat__header__link'>
                    Профиль
                </div>
            </Link>
        </div>
    )
}

export default Header;