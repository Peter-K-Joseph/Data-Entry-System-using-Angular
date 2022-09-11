import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mooc',
  templateUrl: './mooc.component.html',
  styleUrls: ['./mooc.component.scss']
})
export class MoocComponent implements OnInit {
  itemForm !: FormGroup;
  title = "MOOC - Christ University";

  constructor( private formBuilder:FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      course: ['', Validators.required],
      class: ['', Validators.required],
      name: ['', Validators.required],
      hyperlink: ['', Validators.required],
      platform: ['', Validators.required],
      duration: ['', Validators.required]
    });
  }

  addData() {
    this.api.mooc(this.itemForm.value).subscribe({
      next: (data) => {
        alert('Data added successfully');
        this.itemForm.reset();
      }
    }) 
  }

}
