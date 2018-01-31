import React from 'react';

export default class Users extends React.Component {

    state = {
        users: [
            { id: 1, name: 'Jimi' },
            { id: 2, name: 'Jimi' },
            { id: 3, name: 'Jimi' },
            { id: 4, name: 'Jimi' },
            { id: 5, name: 'Jimi' },
            { id: 6, name: 'Jimi' },
            { id: 7, name: 'Jimi' },
            { id: 8, name: 'Jimi' },
            { id: 9, name: 'Jimi' },
            { id: 10, name: 'Jimi' }
        ]
    };

    render() {

        return(
            <div className='users'>
                <ul>
                    {
                        this.state.users.map((user) => {
                            return <li key={user.id}>
                                        {user.name}
                                    </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}