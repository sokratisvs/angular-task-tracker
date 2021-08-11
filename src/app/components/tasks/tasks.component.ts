import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  // to use a service we need to add it as an attribute to the constructor
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // on init we call the service
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  addTaskBtn(task: Task) {
    console.log('add Task---', task);
    this.taskService.postTask(task).subscribe((task) => this.tasks.push(task));
  }

  onDeleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id));
  }

  onToggleTask(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }

}
