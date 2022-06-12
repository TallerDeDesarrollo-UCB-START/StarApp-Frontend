import axios from "axios";
const url = process.env.REACT_APP_API;
const urlTablaExtensa = `${url}extended_form/`;

export function getNeedToFillData(userId) {
	return Promise.resolve({data: { needToFill: true }});
}

export function getMyEvents(userId) {
	const baseURL = `${process.env.REACT_APP_API}sesion/${userId}/get_my_eventos`;
	return axios.get(baseURL);
}

export function getMyUserRole() {
	return axios.get(url + "extended_form/" + window.sessionStorage.id);
}

export function getEvents() {
	return axios.get(url + "eventos");
}

export function createEvent(body) {
	return axios.post(url + "eventos/crearevento", body);
}

export function getProjects() {
	return axios.get(url + "get_proyectos");
}

export function getCategories() {
	return axios.get(url + "eventos/categorias");
}

export function getLeaders() {
	return axios.get(url + "lideres");
}

export function getGetMyParticipations() {
	return axios.get(url + "eventos/participante/" + window.sessionStorage.id);
}

export function participateInEvent(eventId) {
	return axios.post(
		url + "eventos/participate_evento/" + eventId + "/sesion/" + window.sessionStorage.id,
		{
			id: eventId,
			id_autenticacion: window.sessionStorage.id,
		}
	);
}

export function stopParticipatingInEvent(eventId) {
	return axios.delete(url + "eventos/eliminar_participacion/" + eventId + "/" + window.sessionStorage.id);
}
