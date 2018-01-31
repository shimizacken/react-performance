import React from 'react';

export default class Title extends React.PureComponent {

    render() {

        console.log('Title component rendered!');

        return(
            <h1>
                {this.props.title}
            </h1>
        );
    }
}