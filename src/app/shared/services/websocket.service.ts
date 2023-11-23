/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/auth/auth.service';
import { environment } from '@environments/environment';
import { Socket } from 'ngx-socket-io';
//extends Socket
@Injectable({
    providedIn: 'root',
})
export class WebsocketService extends Socket {
    public socketStatus = false;

    constructor(private socket: Socket, private auth: AuthService) {
        super({
            url: environment.wsUrl,
            options: {
                extraHeaders: {
                    auth: sessionStorage.getItem('accessToken'),
                },
            },
        });
        // this.socket['authentication'] = { token: auth.accessToken };
        //this.socket.emptyConfig.options.auth = {authentication: localStorage.getItem('accessToken')}
        // this.checkStatus();

        //extraHeaders = {authentication: localStorage.getItem('accessToken')}
    }
    conectarSocket(): void {
        this.socket.emptyConfig.options.extraHeaders = {
            auth: sessionStorage.getItem('accessToken'),
        };
        // this.socket.emptyConfig.options.extraHeaders = {
        //     auth: '3'
        // };
        this.socket.on('connect', () => {
            console.log('conectado al server login');
            this.socketStatus = true;
        });
    }
    desconectarSocket(): void {
        // this.socket.on('disconnect', (reason, details) => {
        //
        //     console.log(details.context.status); // 400
        //     console.log(details.context.responseText); // '{"code":1,"message":"Session ID unknown"}'
        //     this.socketStatus = false;
        // });
        this.socket.disconnect();
        this.socketStatus = false;
        console.log('desconectado del server');
        // this.socket.on('disconnect', () => {
        //     console.log('desconectado del server');
        //     this.socketStatus = false;
        // });
    }
    checkStatus(): void {
        // const extraHeaders = {
        //     authentication: localStorage.getItem('accessToken'),
        // };
        this.socket.emptyConfig.options.extraHeaders = {
            auth: sessionStorage.getItem('accessToken'),
        };

        this.socket.on('connect', () => {
            console.log('conectado al server');
            this.socketStatus = true;
        });
        this.socket.on('disconnect', () => {
            console.log('desconectado del server');
            this.socketStatus = false;
        });
    }
    //callback?: Function
    emit(evento: string, payload?: any): void {
        this.socket.emit(evento, payload);
    }
    listen(evento: string) {
        return this.socket.fromEvent(evento);
    }
}
