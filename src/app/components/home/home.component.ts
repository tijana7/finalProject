import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


export interface homeProducts {
  name: string;
  imgSrc: string;
  id: number;
  price: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  onSubmit(form: NgForm){
    console.log(form);
  } 

constructor(){}
ngOnInit(): void{}

  homeProducts: homeProducts[] = 
  [{
    name:"Fiesta Bouquet",
    imgSrc:"assets/imgs/flower1.jpeg",
    id:1,
    price:"$"+ 60
  },
  {
    name:"Alluring Elegance Bouquet",
    imgSrc:"assets/imgs/flower2.jpeg",
    id:2,
    price:"$"+ 72
  },
  {
    name:"Beyond Blue Bouquet",
    imgSrc:"assets/imgs/flower3.jpeg",
    id:3,
    price:"$"+ 55
  },
  {
    name:"Mixed Roses",
    imgSrc:"assets/imgs/flower4.jpeg",
    id:4,
    price:"$"+ 35
  },
  {
    name:"Belle of the Ball Bouquet",
    imgSrc:"assets/imgs/flower5.jpeg",
    id:5,
    price:"$"+ 45
  },
  {
    name:"Rainbow Garden",
    imgSrc:"assets/imgs/flower6.jpeg",
    id:6,
    price:"$"+ 50
  },
  {
    name:"Best Day Bouquet",
    imgSrc:"assets/imgs/flower7.jpeg",
    id:7,
    price:"$"+ 61
  },
  {
    name:"Smiles & Sunshine",
    imgSrc:"assets/imgs/flower8.jpeg",
    id:8,
    price:"$"+ 45
  }
  ]
  
  }
  

