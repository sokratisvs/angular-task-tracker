import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    // return of(TASKS)
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const id = task.id;
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<Task>(url);
  }

  updateTask(task: Task): Observable<Task> {
    const id = task.id;
    const url = `${this.apiUrl}/${id}`
    return this.http.put<Task>(url, task, httpOptions);
  }

  postTask(task: Task): Observable<Task> {
    const id = task.id;
    // const url = `${this.apiUrl}/${id}`;
    const url = `${this.apiUrl}`;
    return this.http.post<Task>(url, task, httpOptions);
  }
}
