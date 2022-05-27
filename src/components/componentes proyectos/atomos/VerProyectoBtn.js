import MyButton from '../../../shared/components/Button';

function VerProyectoBtn({proyecto}) {
	return (
		<MyButton
			className="rename2"
			onClick={() => (window.location.href = "/projects/" + proyecto.id)}>
				Ver detalles
		</MyButton>
	)
}

export default VerProyectoBtn