import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {
  itemForm !: FormGroup;
  title = "Guest - Christ University";

  constructor( private formBuilder:FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      course: ['', Validators.required],
      class: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      person: ['', Validators.required],
      affiliate: ['', Validators.required]
    });
  }

  addData() {
    this.api.guest(this.itemForm.value).subscribe({
      next: (data) => {
        alert('Data added successfully');
        this.itemForm.reset();
      }
    }) 
  }

}
