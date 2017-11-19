import axios from 'axios';

// ** DEBUG
function getIndex(tasks, _id) {
	for (let i = 0; i < tasks.length; i++) {
		if (tasks[i]._id === _id)
			return i;
	}
	return null;
}

export default class TaskService {
	constructor(baseUrl, type) {
		this.baseUrl = baseUrl;
		this.type = type;

		this.get = this.get.bind(this);
		this.put = this.put.bind(this);
		this.post = this.post.bind(this);
		this.del = this.del.bind(this);
		this.delCompleted = this.delCompleted.bind(this);

		// ** DEBUG
		this.dummyData = [
			{_id: 1, name: 'Task 1', complete: false},
			{_id: 2, name: 'Task 2', complete: false},
			{_id: 3, name: 'Task 3', complete: false},
		];
	}

	async get() {
		//return axios.get(`${this.baseUrl}/tasks/${type}`);
		return this.dummyData.slice();
	}

	async put(task) {
		//return axios.put(`${this.baseUrl}/tasks/${id}`, {complete});
		const i = getIndex(this.dummyData, task._id);
		if (i >= 0) {
			this.dummyData[i] = task;
		}
		return Promise.resolve();
	}

	async post(task) {
		//return axios.post(`${this.baseUrl}/tasks`, {task});
		task._id = Math.floor(Math.random() * 1000000);
		this.dummyData.push(task);
		return Promise.resolve(task);
	}

	async del(task) {
		//return axios.del(`${this.baseUrl}/tasks/${id}`);
		const i = getIndex(this.dummyData, task._id);
		if (i >= 0) {
			this.dummyData.splice(i, 1);
		}
		return Promise.resolve();
	}

	async delCompleted() {
		//return axios.del(`${this.baseUrl}/tasks/completed`);
		let i = 0;
		while (i < this.dummyData.length) {
			if (!this.dummyData[i].complete) {
				i++;
				continue;
			}
			this.dummyData.splice(i, 1);
		}
		return Promise.resolve(this.dummyData);
	}
}
