import React from 'react';
import users from '../services/users';

export default class Users extends React.Component {

    shouldComponentUpdate() {

        return false;
    }

    render() {

        console.log('Users component rendered!');

        return(
            <div className='users'>
                <ul>
                    {
                        users.map((user) => {
                            return <li key={user.id}>
                                        {user.firstName + ' ' + user.lastName}
                                    </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}