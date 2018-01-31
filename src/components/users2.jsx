import React from 'react';

export default class Users2 extends React.Component {

    shouldComponentUpdate(nextProps) {

        if (this.props.users != nextProps.users) {
            
            return true;
        }

        return false;
    }

    render() {

        console.log('Users2 component rendered!');

        return(
            <div className='users'>
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