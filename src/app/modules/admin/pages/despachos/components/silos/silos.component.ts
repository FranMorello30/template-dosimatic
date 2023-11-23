/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-silos',
    templateUrl: './silos.component.html',
    styleUrls: ['./silos.component.scss'],
})
export class SilosComponent implements OnInit {
    private _nro: string;
    private _nivel: string;

    constructor() {}

    get nro(): string {
        return this._nro;
    }
    get nivel(): string {
        return this._nivel;
    }
    @Input() celda: string;
    @Input() set nro(nro: string) {
        this._nro = nro;
    }
    @Input() set nivel(nivel: string) {
        this._nivel = nivel;
    }
    ngOnInit(): void {}
}
