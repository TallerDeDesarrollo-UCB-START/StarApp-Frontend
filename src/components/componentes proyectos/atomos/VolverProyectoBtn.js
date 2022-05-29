
import {useHistory} from "react-router-dom"
import MyButton from "../../../shared/components/Button";

function VolverProyectoBtn() {
  let history = useHistory();
  return (
    <MyButton
      className="go-back"
      onClick={() => history.goBack()}
    />
  )
}

export default VolverProyectoBtn