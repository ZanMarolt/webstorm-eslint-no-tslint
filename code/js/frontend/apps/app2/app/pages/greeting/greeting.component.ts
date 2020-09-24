import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'app2-login',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreetingComponent implements OnInit {

  ngOnInit(): void {
    console.log('Hello from console! - Should return an error');
  }
}
