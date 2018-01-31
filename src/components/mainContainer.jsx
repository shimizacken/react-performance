import React from 'react';
import Users from '../components/users';
import Users2 from '../components/users2';
import users from '../services/users';
import users2 from '../services/users2';

export default class MainContainer extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            toggle: false,
            users2: users2
        };
    }

    toggle = () => {

        const newUsers = users2.slice(0);

        this.setState({
            toggle: !this.state.toggle,
            users2: newUsers
        });
    }

    render() {

        console.log('MainContainer component rendered');

        return(
            <div className='main-container'>
                <div className='toggle-wrapper'>
                    <button onClick={this.toggle}>toggle</button>
                </div>
                <div>
                    <div style={{float: 'left', display: 'inline-block', padding: '10px'}}>
                        <Users />
                    </div>
                    <div style={{float: 'left', display: 'inline-block', padding: '10px', marginLeft: '10px'}}>
                        <Users2 users={this.state.users2} />
                    </div>
                </div>
            </div>
        );
    }
}