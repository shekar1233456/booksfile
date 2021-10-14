import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.css']
})
export class UsercomponentComponent implements OnInit {

public booksData:any
public myarry:[]
public title:string
public pages:string
public mediumLink:string

public tableofcont:[]

  constructor( private books:BookserviceService) { }

  ngOnInit(): void {
    this.getAllbooks()
  }

  getAllbooks(){
    this.books.getBooks().subscribe(res=>{
     this.booksData= res
     console.log(this.booksData)
    this.title= this.booksData['ISBN:9780980200447']['title']
    this.pages= this.booksData['ISBN:9780980200447']['number_of_pages']
    this.mediumLink=this.booksData['ISBN:9780980200447']['cover']['medium']
this.tableofcont=this.booksData['ISBN:9780980200447']['table_of_contents']
   
console.log(this.tableofcont)
// console.log(JSON.stringify(this.booksData['ISBN:9780980200447']['title']))
 
    })
  }

  

}
