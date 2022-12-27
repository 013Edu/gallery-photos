import { Component, Input, OnInit } from '@angular/core';

export interface photo{
  url: string
  title: string
  id: number
  likes: number
  comments: number
}

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

 @Input() photos: photo[] = []

  ngOnInit(): void {

  }
}
