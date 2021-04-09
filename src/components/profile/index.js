import {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeName} from '@store/profile/actions';
import {TextField} from '@material-ui/core';

const Profile = () => {
    const [value, setValue] = useState('');
    const name = useSelector(state => state.profile.name);
    const dispatch = useDispatch();

    const handlerInputChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const handlerSubmit = useCallback((e) => {
        e.preventDefault();

        dispatch(changeName(value));

        setValue('');
    }, [value, dispatch]);

    return (
        <div className='chat__profile'>
            <div>{name}</div>
            <form onSubmit={handlerSubmit}>
                <TextField label='Введите имя' value={value} onChange={handlerInputChange}/>
            </form>
        </div>
    );
}

export default Profile;