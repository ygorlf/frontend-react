import React from 'react';
import Features from './Features';

const FeatureList = props => (
	<section id="features" className="features">
		<div className="container">
			<ul className="items-list">
				<Features title='Participar'
				description='Para participar de qualquer um de nossos projetos basta far um high five no nosso botão de ação.'/>
				<Features title='Divulgação também ajuda'
				description='Não subestime o poder das amizades e das redes sociais, sua ajuda na divulgação tem um potencial gigantesco.'/>
				<Features title='Fique por dentro'
				description='Acompanhe o mural de eventos dos seus projetos favoritos, ofereça ajuda e veja na prática o resultado dos seus esforços!'/>
				<Features title='Cocrie'
				description='O Precisa Ser é uma plataforma pra todos, logo é sempre aberto à críticas e novas ideias. Nosso ideal maior é usar a força coletiva para empoderar as causas que realmente importam.'/>
				<Features title='Ajude de acordo com a sua disponibilidade'
				description='Com muitas pessoas fornecendo pequenas ajudas nós podemos fazer grandes mudanças. Por isso o Precisa Ser valoriza também as pequenas contribuições.'/>
			</ul>
		</div>
	</section>
);

export default FeatureList;
