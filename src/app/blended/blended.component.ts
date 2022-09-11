import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-blended',
  templateUrl: './blended.component.html',
  styleUrls: ['./blended.component.scss']
})
export class BlendedComponent implements OnInit {
  itemForm !: FormGroup;
  title = "Blended - Christ University";

  constructor( private formBuilder:FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      course: ['', Validators.required],
      class: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      activity: ['', Validators.required],
      mode: ['', Validators.required]
    });
  }

  addData() {
    this.api.blended(this.itemForm.value).subscribe({
      next: (data) => {
        alert('Data added successfully');
        this.itemForm.reset();
      }
    }) 
  }

}
