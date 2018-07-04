function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

const task1 = newTask('Walk with the dog','He needs to exercise');
const task2 = newTask('Clean the house','Lets go do this!');
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();