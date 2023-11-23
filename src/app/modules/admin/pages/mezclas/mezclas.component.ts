import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { fuseAnimations } from '@fuse/animations';
import { MezclasService } from '@modules/admin/services';

import { Paginacion } from '@shared/services/paginacion.service';

@Component({
    selector: 'app-mezclas',
    templateUrl: './mezclas.component.html',
    animations: fuseAnimations,
    providers: [{ provide: MatPaginatorIntl, useClass: Paginacion }],
})
export class MezclasComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    public buscar: string;
    public columns = [
        'formula',
        'descripcion',
        'resistencia',
        'cemento',
        'agua',
        'arena',
        'piedra',
        'graba',
    ];
    public tabla: MatTableDataSource<any>;
    constructor(private readonly mezclaService: MezclasService) {}

    ngOnInit(): void {
        this.obtenerData();
    }
    buscarData(): void {
        this.tabla.filter = this.buscar.trim().toLowerCase();
        if (this.tabla.paginator) {
            this.tabla.paginator.firstPage();
        }
    }
    obtenerData(): void {
        this.mezclaService.retornarMezclas().subscribe({
            next: (value) => {
                this.tabla = new MatTableDataSource(value);
                this.tabla.paginator = this.paginator;
                this.tabla.sort = this.sort;
            },
            error: (err) => {},
        });
    }
}
