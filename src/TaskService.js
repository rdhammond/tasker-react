import axios from 'axios';

export default class TaskService {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}

	async get(type) {
		return axios.get(`${this.baseUrl}/tasks/${type}`);
	}

	async setComplete(id, complete) {
		return axios.put(`${this.baseUrl}/tasks/${id}`, {complete});
	}

	async addTask(task) {
		return axios.post(`${this.baseUrl}/tasks`, {task});
	}

	async deleteTask(id) {
		return axios.del(`${this.baseUrl}/tasks/${id}`);
	}
}
