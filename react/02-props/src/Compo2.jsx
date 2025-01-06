import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Compo2 extends Component {

	render(){

		const {text, valid} = this.props;

		return(
			<>	
				<p>
					안녕하세요 이건 {text}
				</p>
				<button onClick={() => console.log(valid)}>이건 버튼</button>
			</>
		)
	}
};

Compo2.defaultProps = {
    text: '이건 text props 기본이야',
};

Compo2.propTypes = {
	text: PropTypes.string,
};

export default Compo2;