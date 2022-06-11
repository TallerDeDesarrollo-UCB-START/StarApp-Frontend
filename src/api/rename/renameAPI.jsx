import axios from "axios";
const url = process.env.REACT_APP_API;
const urlTablaExtensa = `${url}extended_form/`;

export async function getNeedToFillData(userId) {
	return Promise.resolve({data: { needToFill: true }});
}

export async function getMyEvents(userId) {
	const baseURL = `${process.env.REACT_APP_API}sesion/${userId}/get_my_eventos`;
	return axios.get(baseURL);
}

export async function getMyUserRole() {
	return await axios.get(url + "extended_form/" + window.sessionStorage.id);
}

export async function getEvents() {
	return await axios.get(url + "eventos");
}

export async function getCategories() {
	return await axios.get(url + "eventos/categorias");
}
