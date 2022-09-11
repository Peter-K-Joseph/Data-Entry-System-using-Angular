import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumini',
  templateUrl: './alumini.component.html',
  styleUrls: ['./alumini.component.scss']
})

export class AluminiComponent implements OnInit {
  itemForm !: FormGroup;
  title = "Alumini - Christ University";
  constructor(private formBuilder: FormBuilder, private api: ApiService, private route: ActivatedRoute) { }
  id: any;
  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      class: ['', Validators.required],
      person: ['', Validators.required],
      affiliate: ['', Validators.required],
      programme: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null || this.id != "") {
      this.api.get_alumini_id(this.id).subscribe({
        next: (data) => {
          this.itemForm.controls['class'].setValue(data.class);
          this.itemForm.controls['person'].setValue(data.person);
          this.itemForm.controls['affiliate'].setValue(data.affiliate);
          this.itemForm.controls['programme'].setValue(data.programme);
          this.itemForm.controls['date'].setValue(data.date);
          this.itemForm.controls['time'].setValue(data.time);
        }
      })
    }
  }

  addData() {
    if (this.id == null || this.id == "") {
      this.api.alumini(this.itemForm.value).subscribe({
        next: (data) => {
          alert('Data added successfully');
          this.itemForm.reset();
        },
        error: (err) => {
          console.log(err);
          alert(`Error adding data`);
        }
      })
    } else {
      this.api.update_alumini(this.itemForm.value, this.id).subscribe({
        next: (data) => {
          alert('Data updated successfully');
          this.itemForm.reset();
        }
      })
    }
  }
}
