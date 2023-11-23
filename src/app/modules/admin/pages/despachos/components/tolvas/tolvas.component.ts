/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-tolvas',
    templateUrl: './tolvas.component.html',
    styleUrls: ['./tolvas.component.scss'],
})
export class TolvasComponent implements OnInit {
    private _tipo: string;
    private _nivel: string;

    constructor() {}

    get nivel(): string {
        return this._nivel;
    }
    get tipo(): string {
        return this._tipo;
    }
    @Input() celda: string;
    @Input() set tipo(tipo: string) {
        this._tipo = tipo;
    }
    @Input() set nivel(nivel: string) {
        this._nivel = nivel;
    }

    ngOnInit(): void {}
}
