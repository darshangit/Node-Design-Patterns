//constructor patter
var Repo = require('./taskRepository-Factory');

var Task = function(data) {
    this.name = data.name;
    this.completed = false;

    // this.complete = function() {
    //     console.log('Completing Task: ' + this.name);
    //     this.completed = true;
    // }

    // this.save = function() {
    //     console.log('Saving Task: ' + this.name);
    // }
}

//Task.prototype refrains from creating copies of functions ex : complete and save
Task.prototype.complete = function() {
    console.log('Completing Task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function() {
    console.log('Saving Task: ' + this.name);
    Repo.save(this);
}

// var task1 = new Task('Create a demo for constructor');
// var task2 = new Task('Create a demo for modules');
// var task3 = new Task('Create a demo for singletoms');
// var task4 = new Task('Create a demo for proottypes');

// task1.complete();
// task2.save();
// task3.save();
// task4.save();

module.exports = Task;