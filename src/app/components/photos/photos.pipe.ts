import { photo } from './photos.component';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByTitle'
})
export class PhotosPipe implements PipeTransform {

  transform(photos: photo[], titleQuery: string) {

    titleQuery = titleQuery.trim().toLowerCase()

    if(titleQuery){
      return photos.filter(photo => photo.title.toLowerCase().includes(titleQuery))
    }else{
      return photos
    }
  }

}
