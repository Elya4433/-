import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { filter, map } from 'rxjs';
export class User {
    constructor(name, age, surname) {
        this.name = name;
        this.age = age;
        this.surname = surname;
    }
}
let Page1Component = class Page1Component {
    constructor(dataService) {
        this.dataService = dataService;
        this.users = [];
        this.students = [];
        this.name = '';
        this.surname = '';
        this.age = 0;
    }
    ngOnInit() {
        this.dataService.getStudents()
            .pipe(filter(data => data != null), map((data => (data.map(student => ({ ...student, group: student.group + ' 1 курс' }))))))
            .subscribe((students) => {
            this.students = students;
        });
    }
    addUser() {
        this.users.push(new User(this.name, this.age, this.surname));
        this.name = '';
        this.surname = '';
        this.age = 0;
    }
    onNameChange() {
        console.log('Что-то изменилось в поле ' + this.name);
    }
};
Page1Component = __decorate([
    Component({
        selector: 'app-page1',
        templateUrl: './page1.component.html',
        styleUrls: ['./page1.component.css']
    })
], Page1Component);
export { Page1Component };
//# sourceMappingURL=page1.component.js.map