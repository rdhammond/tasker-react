import axios from 'axios';

export default class TaskService {
	constructor(baseUrl, type) {
		this.baseUrl = baseUrl;
		this.type = type;

		this.get = this.get.bind(this);
		this.put = this.put.bind(this);
		this.post = this.post.bind(this);
		this.del = this.del.bind(this);
		this.delCompleted = this.delCompleted.bind(this);
	}

	get() {
		return axios.get(`${this.baseUrl}/${this.type}`);
	}

	put(task) {
		return axios.put(`${this.baseUrl}/${this.type}/${task.id}`, {task});
	}

	post(task) {
		return axios.post(`${this.baseUrl}/${this.type}`, {task});
	}

	del(task) {
		return axios.del(`${this.baseUrl}/${this.type}/${task.id}`);
	}

	delCompleted() {
		return axios.del(`${this.baseUrl}/${this.type}/completed`);
	}
}
