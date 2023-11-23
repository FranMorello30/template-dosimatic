import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebsocketService } from './websocket.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SocketService {
    // constructor(
    //     private http: HttpClient,
    //     private readonly wbServices: WebsocketService
    // ) {
    // }

    // conectar(): void {
    //     this.wbServices.conectarSocket();
    // }

    // desconectar(): void {
    //     this.wbServices.desconectarSocket();
    // }

    // obtenerMensajes(): Observable<any> {
    //     return this.wbServices.listen('message-from-serve');
    // }
}
