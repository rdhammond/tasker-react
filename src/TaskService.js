import {axios} from 'axios';

export default class TaskService {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}

	async getDailies() {
		return axios.get(`${this.baseUrl}/tasks/daily`);
	}

	async getWeeklies() {
		return axios.get(`${this.baseUrl}/tasks/weekly`);
	}

	async getLongTerm() {
		return axios.get(`${this.baseUrl}/tasks/longterm`);
	}

	async completeTask(id) {
		return axios.put(`${this.baseUrl}/tasks/${id}`, {complete: true});
	}

	async addTask(task) {
		return axios.post(`${this.baseUrl}/tasks`, {task});
	}

	async deleteTask(id) {
		return axios.del(`${this.baseUrl}/tasks/${id}`);
	}
}
