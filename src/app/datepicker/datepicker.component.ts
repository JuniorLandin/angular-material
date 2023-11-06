import { Component } from '@angular/core';

import { Platform } from '@angular/cdk/platform';
import * as moment from 'moment';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {

  public startDate = moment([2022, 9, 28])
  public minDate =  moment([2022, 8, 28])
  public maxDate =  moment([2022, 11, 28])

  constructor(
    private platform: Platform
  ){}

  get isTouchDevice() {
    return this.platform.ANDROID || this.platform.IOS
  }


}
