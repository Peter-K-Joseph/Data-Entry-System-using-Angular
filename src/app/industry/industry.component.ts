import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
	selector: 'app-industry',
	templateUrl: './industry.component.html',
	styleUrls: ['./industry.component.scss']
})
export class IndustryComponent implements OnInit {
	itemForm !: FormGroup;
	title = "Industry - Christ University";
	id: any;
	constructor(private formBuilder: FormBuilder, private api: ApiService, private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.itemForm = this.formBuilder.group({
			course: ['', Validators.required],
			class: ['', Validators.required],
			date: ['', Validators.required],
			topic: ['', Validators.required],
			person: ['', Validators.required],
			affiliate: ['', Validators.required]
		});
		this.id = this.route.snapshot.paramMap.get('id');
		if (this.id != null || this.id != "") {
			this.api.get_industry_id(this.id).subscribe({
				next: (data) => {
					this.itemForm.controls['class'].setValue(data.course);
					this.itemForm.controls['person'].setValue(data.class);
					this.itemForm.controls['affiliate'].setValue(data.date);
					this.itemForm.controls['programme'].setValue(data.topic);
					this.itemForm.controls['date'].setValue(data.person);
					this.itemForm.controls['time'].setValue(data.affiliate);
				}
			})
		}
	}

	addData() {
		if (this.id == null || this.id == "") {
			this.api.industry(this.itemForm.value).subscribe({
				next: (data) => {
					alert('Data added successfully');
					this.itemForm.reset();
				}
			})
		} else {
			this.api.update_industry(this.itemForm.value, this.id).subscribe({
				next: (data) => {
					alert('Data updated successfully');
					this.itemForm.reset();
				}
			})
		}
	}
}
