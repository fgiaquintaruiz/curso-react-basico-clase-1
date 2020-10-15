import React from 'react';



function Cabecera(props){
	return (
		<header>
			<h1>{props.titulo}</h1>
			<h3>{props.mensaje}</h3>
		</header>		
	)
}

export default Cabecera;
