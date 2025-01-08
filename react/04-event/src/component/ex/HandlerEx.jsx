import React, { Component } from 'react';

export default class HandlerEx extends Component {
    state = {
        title: 'Hello World',
    };
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button
                    onClick={() => {
                        this.setState({ title: 'goobye' });
                    }}
                >
                    byebye
                </button>
            </div>
        );
    }
}
