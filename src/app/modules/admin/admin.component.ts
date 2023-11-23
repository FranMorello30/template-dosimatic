import { Component, OnInit, inject } from '@angular/core';

import { DefinicionesService } from '@shared/services/definiciones.service';
import { SocketService } from '@shared/services/socket.service';
import { WebsocketService } from '@shared/services/websocket.service';

@Component({
    selector: 'app-admin',
    template: ` <router-outlet></router-outlet>`,
})
export class AdminComponent implements OnInit {
    constructor(
        private readonly _defService: DefinicionesService,
        private readonly _socketService: SocketService
    ) {}
    ngOnInit(): void {
        //this.wbService.conectarSocket();
        //this.wbService.listen('clients-updated').subscribe(console.log);
    }
}
//<a href="#" class="btn-flotante">
//<mat-icon class="text-white"svgIcon="heroicons_outline:upload"></mat-icon></a>
