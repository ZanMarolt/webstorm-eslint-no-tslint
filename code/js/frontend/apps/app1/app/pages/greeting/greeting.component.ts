import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app1-login',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreetingComponent implements OnInit {

  ngOnInit(): void {
    console.log('Hello from console! - Should return an error');
  }
}
