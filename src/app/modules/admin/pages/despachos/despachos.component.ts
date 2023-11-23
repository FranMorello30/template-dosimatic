import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '@shared/services/websocket.service';

@Component({
    selector: 'app-despachos',
    templateUrl: './despachos.component.html',
    styles: [],
})
export class DespachosComponent implements OnInit {
    public tipos = [
        { label: 'Urbano', value: 0 },
        { label: 'Extra-Urbano', value: 1 },
    ];
    public nivelArena = 100;
    public nivelPiedra = 100;
    public nivelCemento1 = 100;
    public nivelCemento2 = 50;
    public nivelCemento3 = 70;
    public balanzaAridos = 30;
    public balanzaCemento = 0;
    public balanzaAgua = 0;
    public balanzaAditivo = 0;
    constructor(private readonly websocketService: WebsocketService) {}

    ngOnInit(): void {
        this.websocketService
            .listen('piedra')
            .subscribe((datos: { peso: '4'; un: '0' }) => {
                this.balanzaCemento = +datos.peso;
                console.log(datos.peso);
            });
    }
}
