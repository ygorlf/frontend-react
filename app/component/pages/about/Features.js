import React from 'react';

const Features = props => (
	<li className="item">
		<h3 className="item__title">{props.title}</h3>
		<p className="item__description">
			{props.description}
		</p>
	</li>
);

export default Features;
