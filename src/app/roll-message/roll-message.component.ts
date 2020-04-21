import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'roll-message',
  templateUrl: './roll-message.component.html',
  styleUrls: ['./roll-message.component.styl']
})
export class RollMessageComponent {
  faDiceD20 = faDiceD20;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

}
