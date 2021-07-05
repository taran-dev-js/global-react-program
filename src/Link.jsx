import React from 'react';

class Link extends React.Component {
    render() {
        return React.createElement(
                'a',
                {
                    className: "App-link",
                    href: "https://reactjs.org",
                },
                'Learn React'
        )

    }

}

export default Link;