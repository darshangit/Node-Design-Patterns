'use strict';

class Task {
  constructor(data) {
    this.name = data.name;
    this.completed = false;
  }

  complete() {
    console.log('Completing Task: ' + this.name);
    this.completed = true;
  }

  save() {
    console.log('Saving Task: ' + this.name);
  }
}

var task1 = new Task('Create a demo for constructor');
var task2 = new Task('Create a demo for modules');
var task3 = new Task('Create a demo for singletoms');
var task4 = new Task('Create a demo for proottypes');

task1.complete();
task2.save();
task3.save();
task4.save();
