var Task = function(data) {
    this.name = data.name;
    this.completed = data.completed;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
}

//Task.prototype refrains from creating copies of functions ex : complete and save
Task.prototype.complete = function() {
    console.log('Completing Task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function() {
    console.log('Saving Task: ' + this.name);
}

module.exports = Task;