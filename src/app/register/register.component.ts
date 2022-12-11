import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataService } from '../data.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    public dataService: DataService,
    private snackBar: MatSnackBar
  ) {}

  jsonData: any;
  occupationList: any;
  stateList: any;

  occupationChoice: any;
  stateChoice: any;

  basicInfo = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    occupation: new FormControl(),
    state: new FormControl(),
  });

  ngOnInit(): void {
    this.basicInfo = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9]+@[a-z]+.[a-z]{2,3}'),
        ],
      ],
      password: ['', Validators.required],
      occupation: ['', Validators.required],
      state: ['', Validators.required],
    });

    this.dataService.getData().subscribe((data) => {
      this.jsonData = data;
      this.occupationList = this.jsonData.occupations;
      this.stateList = this.jsonData.states;
    });
  }

  submitData() {
    const newUser = {
      name: this.basicInfo.value.name,
      email: this.basicInfo.value.email,
      password: this.basicInfo.value.password,
      occupation: this.occupationChoice,
      state: this.stateChoice,
    };
    this.dataService.postData(newUser).subscribe((data) => {
      alert('User submitted');
    });
  }
}
