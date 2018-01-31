import React from 'react';

export default class MainContainer extends React.Component {

    state = {
        toggle: false
    };

    toggle = () => {

        this.setState({
            toggle: !this.state.toggle
        });
    }

    render() {

        return(
            <div className='main-container'>
                <div>
                    <button onClick={this.toggle}>toggle</button>
                </div>
                {this.props.children}
            </div>
        );
    }
}