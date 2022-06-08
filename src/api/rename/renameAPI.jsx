const url = process.env.REACT_APP_API;
const urlTablaExtensa = `${url}extended_form/`;

export async function getNeedToFillData(userId) {
	return Promise.resolve({data: { needToFill: true }});
}
