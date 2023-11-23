/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-balanza',
    templateUrl: './balanza.component.html',
    styleUrls: ['./balanza.component.scss'],
})
export class BalanzaComponent implements OnInit {
    private _balanza: string;
    private _nivel: string;
    constructor() {}

    get balanza(): string {
        return this._balanza;
    }
    get nivel(): string {
        return this._nivel;
    }
    @Input() celda: string;
    @Input() set balanza(balanza: string) {
        this._balanza = balanza;
    }
    @Input() set nivel(nivel: string) {
        this._nivel = nivel;
    }
    ngOnInit(): void {}
}
