import { Component } from '@angular/core';
import { HeaderService } from 'src/shared/services/header-service.service';

@Component({
    selector: 'astron-ak-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    headerTitle: string = 'Astron sdfsd Gépjármű Kölcsönző';

    constructor(
        private headerService: HeaderService) {
    }

    public emitMenu(): void {
        this.headerService.sidenavEmitter.emit();
    }

}
