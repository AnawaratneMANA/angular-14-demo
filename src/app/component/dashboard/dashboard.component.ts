import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  taskObj : Task = new Task();
  taskArr : Task[] = [];
  addTaskValue: string = '';
  editTaskValue: string = '';
  constructor(private crudService: CrudService) {}
  ngOnInit(): void {
    this.editTaskValue = '';
    this.addTaskValue = '';
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTasks();
  }
  getAllTasks() {
    this.crudService.getAllTask().subscribe(res => {
      this.taskArr = res;
    }, err => {
      alert("Unable to get the Tasks! : " + err)
    })
  }

  addTask(){
    this.taskObj.task_name = this.addTaskValue;
    this.crudService.addTask(this.taskObj).subscribe(res => {
      this.ngOnInit(); //This is to refresh the list.
      this.addTaskValue = '';
    }, err => {
      alert("Unable to add the Tasks! : " + err);
    })
  }

  editTask(){
    this.taskObj.task_name = this.editTaskValue;
    this.crudService.editTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert("Failed to update the tasks!");
    })
  }

  deleteTask(etask: Task){
    this.crudService.deleteTask(etask).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert("Failed to delete task! : " + err);
    })
  }

  call(etask: Task){
    this.taskObj = etask;
    this.editTaskValue = etask.task_name;
  }

}
