import { Component, OnInit, ViewChild } from '@angular/core';
import { TablesService } from '../tables.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  displayedColumns: string[] = [];
  dataSource: any;

  constructor(private tableService: TablesService) { }

  ngOnInit() {
    this.displayedColumns = this.tableService.getDataConf().map((c) => c.prop)
    this.dataSource = new MatTableDataSource(this.tableService.getAll());
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
