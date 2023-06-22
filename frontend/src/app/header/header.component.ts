import { Component } from '@angular/core';

@Component({
	selector: 'astron-ak-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	headerTitle: string = 'Astron Gépjárműkölcsönző';
}
