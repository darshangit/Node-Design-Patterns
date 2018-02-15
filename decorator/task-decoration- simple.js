//constructor patter

var Task = function(name) {
    this.name = name;
    this.completed = false;
}

//Task.prototype refrains from creating copies of functions ex : complete and save
Task.prototype.complete = function() {
    console.log('Completing Task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function() {
    console.log('Saving Task: ' + this.name);
}

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

//decorating urgent task
// added 2 new methods to task - Urgent Task
var urgentTask = new Task('Urgent Task');
urgentTask.priority = 2;
urgentTask.notify = function(){
    console.log('notifying important people');
};
urgentTask.notify();
urgentTask.complete();

//decorated urgent task
urgentTask.save = function(){
    this.notify();
    Task.prototype.save.call(this);
};

urgentTask.save();

