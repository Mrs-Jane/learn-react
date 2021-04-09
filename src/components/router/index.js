import {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import App from '@components/app';
import Header from '@components/header';
import Profile from '@components/profile';

class Router extends Component{
    render() {
        return (
            <div>
                <Header text='Чат' />
                <Switch>
                    <Route exact path='/'>
                        <App />
                    </Route>
                    <Route path='/profile'>
                        <Profile />
                    </Route>
                    <Route
                        exact
                        path='/chat/:chatId/'
                        render={obj => <App chatId={Number(obj.match.params.chatId)} />
                        }
                    />
                    <Redirect to='/' />
                </Switch>
            </div>
        );
    }
}

export default Router;