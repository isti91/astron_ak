import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
	selector: 'astron-ak-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	headerTitle: string = 'Astron sdfsd Gépjármű Kölcsönző';
}
