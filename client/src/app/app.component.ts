import { Component, OnInit, ViewChild} from '@angular/core';
import { AppService } from './app.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Product } from './entity/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  dataSource = new MatTableDataSource<Product>();
  displayedColumns : string[] = ['name','price','description'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  
  constructor(private appService: AppService){}
  ngOnInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator,0);
    this.getData();

  }

  getData(): void{
    this.appService.getProducts().subscribe(res => {
      this.dataSource.data = res as Product[] ;
    })
  }
  
}
