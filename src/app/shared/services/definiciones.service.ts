/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { EventEmitter, Injectable, Output } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { environment } from '@environments/environment';

import {
    Definiciones,
    EnpointDefiniciones,
    Gestion,
} from '@shared/interfaces/definiciones';

import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { Contact } from '@layout/common/quick-chat/quick-chat.types';
export const MY_DATE_FORMATS = {
    parse: {
        dateInput: '  YYYY/MM/DD',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
@Injectable({
    providedIn: 'root',
})
export class DefinicionesService {
    private _definiciones: BehaviorSubject<Definiciones> = new BehaviorSubject(
        null
    );
    public recargarGestion$: BehaviorSubject<boolean> = new BehaviorSubject(
        false
    );

    //public definiciones: Definiciones;

    private baseUrl = environment.baseUrl;

    public ejecutivos = [];

    public plantillaSms: any[] = [];

    public correosCliente = [];
    public correosSupervisor = [];

    public readonly mensajeVentanaProxGestion =
        'Listo para grabar, desea actualizar la próxima gestión?';
    public readonly mensajeVentanaGrabar =
        'Listo para grabar, desea continuar?';
    public readonly mensajeVentanaBorrar =
        'Listo para Borrar, desea continuar?';
    public readonly mensajeMotivoCancelLlamada =
        'Seleccione el motivo por el cual canceló la llamada';

    public readonly textoBtnAct = 'Guardar y actualizar';
    public readonly colorBtnAct = 'bg-green-500';
    public readonly textoBtnCancel = 'Cancelar';
    public readonly colorBtnCancel = 'bg-red-500';
    public readonly textoBtnNoAct = 'Guardar y no actualizar';
    public readonly colorBtnNoAct = 'bg-gray-500';

    constructor(private _http: HttpClient, private _decimalPipe: DecimalPipe) {}

    set menu(menu: any) {
        localStorage.setItem('menu', JSON.stringify(menu));
    }
    get menu(): any {
        const menu = localStorage.getItem('menu') || '';

        if (menu.length === 0) {
            return '';
        } else {
            return JSON.parse(menu);
        }
    }
    get definiciones$(): Observable<Definiciones> {
        return this._definiciones.asObservable();
    }

    public cargarDefiniciones(): Observable<any> {
        return this._http
            .get<EnpointDefiniciones>(`${this.baseUrl}/definiciones`)
            .pipe(
                map((respuesta) => {
                    this._definiciones.next(respuesta.definiciones);
                })
            );
    }
    public cargarRutaAdjuntos(): Observable<string> {
        return this._http
            .get<any>(`${this.baseUrl}/definiciones/ruta`)
            .pipe(map((respuesta) => respuesta.ruta));
    }
    public cargarEstados(sigla: string): Observable<
        {
            value: string;
            switch_gestionable: boolean;
            switch_habilitado: boolean;
            switch_masivo: boolean;
        }[]
    > {
        return this._http
            .get<any>(`${this.baseUrl}/definiciones/estados/${sigla}`)
            .pipe(map((respuesta) => respuesta.estados));
    }
    public actEstados(
        sigla: string,
        estado: {
            value: string;
            switch_gestionable: boolean;
            switch_habilitado: boolean;
            switch_masivo: boolean;
        }[]
    ): void {
        this._http
            .patch<any>(`${this.baseUrl}/definiciones/${sigla}`, estado)
            .pipe(map((respuesta) => respuesta.estados))
            .subscribe();
    }
    public actDefiniciones(definicion: Definiciones): void {
        this._http
            .put<any>(`${this.baseUrl}/definiciones/`, definicion)
            .subscribe(() => this._definiciones.next(definicion));
    }
    public rangoFecha(rango: string): Observable<any> {
        return this._http
            .get<any>(`${this.baseUrl}/definiciones/rango/${rango}`)
            .pipe(map((respuesta) => respuesta.rango));
    }

    public retornarContenidoPlantilla(
        idPlantilla: number,
        idCliente: string,
        cuentas: string
    ) {
        return this._http.post<{ plantilla: string; asunto: string }>(
            `${this.baseUrl}/plantillas/`,
            {
                idPlantilla,
                idCliente,
                cuentas,
            }
        );
    }
    public formatoNumero(num: number) {
        return this._decimalPipe.transform(num, '1.0');
    }
    public reemplazarCaracter(search: string, replace: string, sujeto: any) {
        const result = [];
        const _string = sujeto.toLowerCase();
        const _search = search.toLowerCase();
        let start = 0;
        let match;
        const length = _search.length;
        while ((match = _string.indexOf(_search, start)) >= 0) {
            result.push(sujeto.slice(start, match));
            start = match + length;
        }
        result.push(sujeto.slice(start));

        return result.join(replace);
    }
    public inicializarTelefonosCliente(...telefonos): string[] {
        const telefonosArr = [];
        telefonos.forEach((telefono: string) => {
            telefonosArr.push(telefono.trim());
        });
        return telefonosArr;
    }
    public inicializarCorreosCliente(tipo: any, ...correos): string[] {
        switch (tipo) {
            case 'PACIENTE':
                const correosArr = [];
                correos.forEach((correo: string) => {
                    correosArr.push(correo.trim());
                });
                return correosArr;
                break;
            default:
                const correosSuper = [];
                correos.forEach((correo) => {
                    correosSuper.push(correo.valor.trim());
                });
                return correosSuper;
                break;
        }
    }
    public retornarNomMes(mes: number): string {
        switch (mes) {
            case 1:
                return 'ENE';
                break;
            case 2:
                return 'FEB';
                break;
            case 3:
                return 'MAR';
                break;
            case 4:
                return 'ABR';
                break;
            case 5:
                return 'MAY';
                break;
            case 6:
                return 'JUN';
                break;
            case 7:
                return 'JUL';
                break;
            case 8:
                return 'AGO';
                break;
            case 9:
                return 'SEP';
                break;
            case 10:
                return 'OCT';
                break;
            case 11:
                return 'NOV';
                break;
            case 12:
                return 'DIC';
                break;
        }
    }
    public retornarUltAnios() {
        const fecha = new Date();
        const year = fecha.getFullYear();
        const anios = [];
        for (let i = year; i >= year - 4; i--) {
            anios.push(i);
        }
        return anios;
    }
    public retornarMesFormateado(
        dia: number,
        mes: number,
        anio: number
    ): string {
        const mesBuscado = {
            1: 'Enero',
            2: 'Febrero',
            3: 'Marzo',
            4: 'Abril',
            5: 'Mayo',
            6: 'Junio',
            7: 'Julio',
            8: 'Agosto',
            9: 'Septiembre',
            10: 'Octubre',
            11: 'Noviembre',
            12: 'Diciembre',
        };
        return `${mesBuscado[mes]} ${dia}, ${anio}`;
    }
    public retornarMeses() {
        const meses = [
            { label: 'Todos', valor: 'TODOS' },
            { label: 'Enero', valor: 1 },
            { label: 'Febrero', valor: 2 },
            { label: 'Marzo', valor: 3 },
            { label: 'Abril', valor: 4 },
            { label: 'Mayo', valor: 5 },
            { label: 'Junio', valor: 6 },
            { label: 'Julio', valor: 7 },
            { label: 'Agosto', valor: 8 },
            { label: 'Septiembre', valor: 9 },
            { label: 'Octubre', valor: 10 },
            { label: 'Noviembre', valor: 11 },
            { label: 'Diciembre', valor: 12 },
        ];
        return meses;
    }
    public buscarMenuApp(rol: string): Observable<any> {
        return this._http.post(`${this.baseUrl}/menu`, {
            opcion: rol,
        });
    }
    public base64toBlob(base64Data, contentType): Blob {
        contentType = contentType || '';
        const sliceSize = 1024;
        const byteCharacters = atob(base64Data);
        const bytesLength = byteCharacters.length;
        const slicesCount = Math.ceil(bytesLength / sliceSize);
        const byteArrays = new Array(slicesCount);

        for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            const begin = sliceIndex * sliceSize;
            const end = Math.min(begin + sliceSize, bytesLength);

            const bytes = new Array(end - begin);
            for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        return new Blob(byteArrays, { type: contentType });
    }
}

@Injectable({
    providedIn: 'root',
})
export class DefinicionResolver implements Resolve<any> {
    constructor(private _defService: DefinicionesService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Definiciones> | any {
        return this._defService.cargarDefiniciones();
    }
}
