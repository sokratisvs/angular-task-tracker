import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  text: string;
  day: string;
  time: string;
  reminder: boolean = false;
  @Output() addTask: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text) {
      alert('please add a task')
      return
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      time: this.time,
      reminder: this.reminder
    }
    console.log('onSubmit task--', newTask)

    this.addTask.emit(newTask);
  }
}
