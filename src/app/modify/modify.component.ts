import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {
  title = 'itemtracker';
  displayedColumns: string[] = ['id', 'time', 'date', 'programme', 'affiliate', 'person', 'class'];
  displayedColumns_industry: string[] = ['id', 'class', 'date', 'course', 'affiliate', 'person', 'topic'];
  dataSource !: MatTableDataSource<any>;
  dataSource_industry !: MatTableDataSource<any>;

  constructor(public dialog: MatDialog, private api: ApiService) {

  }

  ngOnInit(): void {
    this.getAllItems()
  }

  delete(elem: any, select: any) {
    switch (select) {
      case 1:
        this.api.deleteAlumini(elem).subscribe({
          next: (data) => {
            this.getAllItems()
          },
          error: (err) => {
            alert("Unable to delete product");
          }
        })
        break;
    
      default:
        break;
    }
  }

  modify(elem: any, select: any) {
    switch (select) {
      case 1:
        window.location.href = "./alumini/" + elem;
        break;
    
      case 2:
        window.location.href = "./alumini/" + elem;
        break;
    
      default:
        break;
    }
  }

  getAllItems() {
    this.api.get_alumini().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
      },
      error: (err) => {
        alert("Unable to get product list");
      }
    })
    this.api.get_industry().subscribe({
      next: (res: any) => {
        this.dataSource_industry = new MatTableDataSource(res);
      },
      error: (err) => {
        alert("Unable to get product list");
      }
    })
  }

}
