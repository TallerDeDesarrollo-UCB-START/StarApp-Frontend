import MyButton from '../../button';

function EditarProyectoBtn({onActivarForm, proyecto}) {
	const click = () => {
		onActivarForm(proyecto)
	}
	return (
		<MyButton className="edit" onClick={click} />
	)
}

export default EditarProyectoBtn
