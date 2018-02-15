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

var UrgentTask = function(name, priority) {
    Task.call(this, name);
    this.priority = priority;
}
UrgentTask.prototype = Object.create(Task.prototype); // make the task prototyping methods to urgentTask

UrgentTask.prototype.save = function() {
    console.log('Do some thing before saving');
    Task.prototype.save.call(this);
}

var ut = new UrgentTask('This is urgent', 1);
ut.save();
console.log(ut);