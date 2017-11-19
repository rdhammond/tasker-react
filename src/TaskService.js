import {axios} from 'axios';

export default class TaskService {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}
	
	async getAll(resource) {
		return axios.get(`${this.baseUrl}/tasks/${resource}`);
	}

	async getById(resource, id) {
		return axios.get(`${this.baseUrl}/tasks/${resource}/${id}`);
	}
	
	async add(resource, task) {
		return axios.post(`${this.baseUrl}/tasks/${resource}`, task);
	}

	async update(resource, task) {
		return axios.put(`${this.baseUrl}/tasks/${resource}/${task._id}`, task);
	}

	async deleteById(resource, id) {
		return axios.delete(`${this.baseUrl}/tasks/${resource}/${id}`);
	}
}
