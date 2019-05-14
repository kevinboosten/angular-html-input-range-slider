import {Input,  Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ng-slider',
  templateUrl: './ng-slider.component.html',
  styleUrls: ['./ng-slider.component.css']
})
export class NgSliderComponent implements OnInit {

  @Input() maxValue = 50;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('input', ['$event'])
  onEvent(event) {
    console.log('input', event.target.value);
    this.setBackground(event.target.value, this.maxValue);
  }

  setBackground(newValue:number, maxValue){
    if(this.elementRef.nativeElement){
      const value = (newValue / this.maxValue) * 100;
      console.log('value: ', value);
      this.elementRef.nativeElement.style.setProperty('--left', `${value}%`);
    }
  }
}