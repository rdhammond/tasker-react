export default class TaskArray {
	constructor(tasks) {
		this.tasks = tasks.slice();
	}

	add(task) {
		this.tasks.push(task);
		return this;
	}

	update(task) {
		const index = this.findById(task._id);
		if (index === null)
			return;

		this.tasks[index] = task;
		return this;
	}

	delById(id) {
		const index = this.findById(id);
		if (index === null)
			return this;

		this.tasks.splice(index, 1);
		return this;
	}

	findById(id) {
		for (let i=0; i<this.tasks.length; i++) {
			if (this.tasks[i]._id === id)
				return i;
		}
		return null;
	}

	toJsArray() {
		return this.tasks;
	}
}
