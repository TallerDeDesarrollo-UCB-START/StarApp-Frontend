import MyButton from '../../../shared/components/Button';

function CrearProyectoBtn({onActivarForm}) {
	return (
		<MyButton className="create" onClick={onActivarForm}>
			Crear proyecto
		</MyButton>
	)
}

export default CrearProyectoBtn
