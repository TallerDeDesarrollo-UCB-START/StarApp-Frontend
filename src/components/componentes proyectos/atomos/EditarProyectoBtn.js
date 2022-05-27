import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import MyButton from '../../../shared/components/Button';

function EditarProyectoBtn({onActivarForm, proyecto}) {
	const click = () => {
		onActivarForm(proyecto)
	}
	return (
		<MyButton
			className="edit"
			onClick={click}>
				<FontAwesomeIcon icon={faEdit} />
		</MyButton>
	)
}

export default EditarProyectoBtn
