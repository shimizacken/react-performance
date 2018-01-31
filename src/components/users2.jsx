import React from 'react';
import Title from './title';

export default class Users2 extends React.Component {

    shouldComponentUpdate(nextProps) {

        //if (this.props.users[0] != nextProps.users[0]) { will not update
        if (this.props.users != nextProps.users) { // will update
            
            return true;
        }

        return false;
    }

    render() {

        console.log('Users2 component rendered!');

        return(
            <div className='users'>
                <Title title='users' />
                <ul>
                    {
                        this.props.users.map((user) => {
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