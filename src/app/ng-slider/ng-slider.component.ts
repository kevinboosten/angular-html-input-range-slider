import {Input,  Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ng-slider',
  templateUrl: './ng-slider.component.html',
  styleUrls: ['./ng-slider.component.css']
})
export class NgSliderComponent implements OnInit {

  @Input() value = 0;
  @Input() max = 100;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.setBackground(this.value, this.max);
  }

  @HostListener('input', ['$event'])
  onEvent(event) {
    console.log('input', event.target.value);
    this.setBackground(event.target.value, this.max);
  }

  setBackground(newValue:number, maxValue){
    if(this.elementRef.nativeElement){
      const value = (newValue / this.max) * 100;
      console.log('value: ', value);
      this.elementRef.nativeElement.style.setProperty('--left', `${value}%`);
    }
  }
}