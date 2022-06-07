import MyButton from '../../button';

function VerProyectoBtn({proyecto}) {
	return (
		<MyButton className="see-details" onClick={() => (window.location.href = "/projects/" + proyecto.id)}>
			Ver detalles
		</MyButton>
	)
}

export default VerProyectoBtn