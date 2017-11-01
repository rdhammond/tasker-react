import axios from 'axios';

export default class TaskService {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}

	async get(type) {
		//return axios.get(`${this.baseUrl}/tasks/${type}`);
		return Promise.resolve({
			1: {id: 1, name: 'Task 1'},
			2: {id: 2, name: 'Task 2'},
			3: {id: 3, name: 'Task 3'}
		});
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
