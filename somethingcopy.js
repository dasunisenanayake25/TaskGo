/**
 * Sample TaskGo code
 *
 * This example shows a simple task manager with add, complete, and list operations.
 */

const tasks = [];

function addTask(title, description = '') {
  const task = {
    id: tasks.length + 1,
    title,
    description,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(task);
  return task;
}

function completeTask(id) {
  const task = tasks.find((item) => item.id === id);
  if (!task) {
    throw new Error(`Task with id ${id} not found.`);
  }

  task.completed = true;
  task.completedAt = new Date().toISOString();
  return task;
}

function getPendingTasks() {
  return tasks.filter((task) => !task.completed);
}

function getCompletedTasks() {
  return tasks.filter((task) => task.completed);
}

// Sample usage
const firstTask = addTask('Write a TaskGo sample', 'Create a sample task manager in JavaScript.');
const secondTask = addTask('Review tasks', 'Inspect tasks and mark completed items.');

completeTask(firstTask.id);

console.log('Pending tasks:', getPendingTasks());
console.log('Completed tasks:', getCompletedTasks());

module.exports = {
  addTask,
  completeTask,
  getPendingTasks,
  getCompletedTasks,
  tasks,
};
