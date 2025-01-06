import React, { Component } from 'react';

export default class CounterClass extends Component {
    state = {
        count: 0,
    };
    render() {
        console.log('state', this.state);
        console.log('state', this.state.count);

		const {count} = this.state;

        return (
			<>
				<div>CounterClass</div>
				<h1>Count: {this.state.count}</h1>
				<h1>Count: {count}</h1>

				<button onClick={() => {
					this.setState({count: this.state.count + 1})
				}}> +1 </button>
				
				<button onClick={() => {
					this.setState({count: this.state.count - 1})
				}}> -1 </button>
				<button>Alert Number</button>
			</>
		);
    }
}
