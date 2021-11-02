import AxiosClient from "./AxiosClient";

const onSubmiNewUser = async (values) => {
  const bodyAuth = {
    email: values.email,
    password: values.password,
  };
  AxiosClient.post(`${URL_AUTH}api/auth/signup`, bodyAuth)
    .then((response) => {
      if (response.status === 200) {
        const id_auth = response.data.id_autenticacion;
        const body = {
          nombre: values.username,
          apellido: values.lastname,
          id_autenticacion: parseInt(id_auth),
        };
        AxiosClient.post(`${URL}extended_form`, body)
          .then((response) => {
            if (response.status === 201) {
              history.push(`/login`);
            }
          })
          .catch((response) => {
            console.log(response);
          });
      }
    })
    .catch((response) => {
      window.location.reload();
    });
};
export default onSubmiNewUser;
