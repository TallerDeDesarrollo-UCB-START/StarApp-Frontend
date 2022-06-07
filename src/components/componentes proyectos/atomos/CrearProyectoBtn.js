import MyButton from '../../button';

function CrearProyectoBtn({onActivarForm}) {
	return (
		<MyButton className="default" onClick={onActivarForm}>
			Crear proyecto
		</MyButton>
	)
}

export default CrearProyectoBtn
