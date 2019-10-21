import React from 'react';
import NestedComponent from './components/nested-component';
import './wc-nested-react-component.scss';

function WCNestedReactComponent() {
	return (
		<div>
			Hello
		<NestedComponent />
		</div>
	);
}

export default WCNestedReactComponent;
