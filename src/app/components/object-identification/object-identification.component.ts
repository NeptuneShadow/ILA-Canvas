import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-identification',
  templateUrl: './object-identification.component.html',
  styleUrls: ['./object-identification.component.css']
})
export class ObjectIdentificationComponent{
  pic = "/src/assets/test.jpg";
  cordinates:string = "";
  event: MouseEvent;
  clientX = 0;
  clientY = 0;

  onEvent(event: MouseEvent): void {
    this.event = event;
}

coordinates(event: MouseEvent): void {

    this.clientX = event.clientX;
    this.clientY = event.clientY;

    console.log(this.clientX);
    console.log(this.clientY );
}


}
