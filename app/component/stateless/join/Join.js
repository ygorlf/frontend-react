import React from 'react';
import LoginForm from '../../stateful/shared/LoginForm';

const Join = props => (
	<section id="make-part" className="make-part">
		<div className="container">
			<div className="intro">
				<h2 className="big-title">Faça parte</h2>
				<p>
					Começe a colaborar agora mesmo
				</p>
			</div>
			<LoginForm btnValue="Cadastrar"/>
		</div>
	</section>
);

export default Join;
