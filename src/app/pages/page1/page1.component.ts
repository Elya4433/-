import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { DataService, Student } from 'src/app/core/services/data.service';

export class User {
  constructor(public name: string, public age: number, public surname: string) {}
}

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styles: [`
    /* Общие стили */
    :host {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    /* Стили для заголовка */
    h1 {
      text-align: center;
      color: #333;
      margin-top: 20px;
    }

    /* Стили для формы добавления пользователя */
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    }

    input {
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      width: 300px;
    }

    button {
      padding: 10px 20px;
      background-color: #333;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    /* Стили для списка пользователей */
    ul {
      list-style-type: none;
      padding: 0;
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    li {
      background-color: #f0f0f0;
      padding: 10px;
      margin: 10px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    /* Стили для списка студентов */
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    th, td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    th {
      background-color: #333;
      color: #fff;
    }

    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
  `]
})
export class Page1Component implements OnInit {
  users: User[] = [];
  students: Student[] = [];

  name = '';
  surname = '';
  number = +7;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getStudents()
      .pipe(
        filter((data) => data != null),
        map((data) => data.map((student) => ({ ...student, group: student.group + ' 1 курс' })))
      )
      .subscribe((students) => {
        this.students = students;
      });
  }

  addUser() {
    this.users.push(new User(this.name, this.number, this.surname));
    this.name = '';
    this.surname = '';
    this.number = 0;
  }

  onNameChange(): void {
    console.log('Что-то изменилось в поле ' + this.name);
  }
}
