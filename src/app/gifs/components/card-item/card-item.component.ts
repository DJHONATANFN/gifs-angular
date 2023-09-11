import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit{
  
  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if(!this.gif){
      throw new Error('Gif es requerido.');
    }
  }
}
