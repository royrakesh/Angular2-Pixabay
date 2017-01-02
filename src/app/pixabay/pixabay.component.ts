import { Component, OnInit } from '@angular/core';
import { PixabayService } from '../pixabay.service';
import 'rxjs/add/operator/map';




@Component({
  selector: 'pixabay',
  templateUrl: './pixabay.component.html',
  styleUrls: ['./pixabay.component.css']
})
export class PixabayComponent implements OnInit {

private images;
query:string;

  constructor(private __pixabayService:PixabayService) { 

  


  }


  searchImage(){

    this.__pixabayService.updateQuery(this.query);
    
    this.__pixabayService.getImage().subscribe( 
      image =>{ this.images = image.hits;  console.log(image); }   
      
      )      
    
    
  }

  ngOnInit() {
  }

}