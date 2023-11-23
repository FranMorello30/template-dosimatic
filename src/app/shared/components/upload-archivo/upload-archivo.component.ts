import {
    Component,
    OnInit,
    Output,
    Input,
    EventEmitter,
    Inject,
    OnDestroy,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';

import { UploadService } from './upload.service';
import { environment } from '@environments/environment';
import { AuthService } from '@core/auth/auth.service';

@Component({
    selector: 'upload-archivo',
    templateUrl: './upload-archivo.component.html',
})
export class UploadArchivoComponent {
    //@Output() archivosSubidos$: EventEmitter<any[]> =  new EventEmitter();

    @Output() files = new EventEmitter<any[]>();
    @Input() titulo: string = 'Adjuntar comprobante(s)';
    public subiendo = false;
    public archivosSubidos = [];
    public rutaPdf = '';
    rutaImg = '';

    public archivos: any = [];
    private readonly baseUrl = environment.baseUrl;
    constructor(
        private _sanitizer: DomSanitizer,
        private _uploadService: UploadService,
        private _authService: AuthService
    ) {}

    public capturarFile(event): void {
        this.archivos = [];
        const archivo = event.target.files[0];
        this.archivos.push(archivo);

        if (!event) {
            return;
        }
        this.subirArchivo();
    }
    public borrarArchivoSubido(archivo: string): void {
        this._uploadService.borrarArchivo(archivo, this._authService.accessBase).subscribe();

        const filtrado = this.archivosSubidos.filter(
            (item) => item.nombre !== archivo
        );
        this.archivosSubidos = filtrado;

        this.files.emit(this.archivosSubidos);
    }
    public verArchivo(ruta: string): void {
        this.rutaPdf = `${this.baseUrl}/uploads/${this._authService.accessBase}/${ruta}`;
    }
    public ocultarVistaPrevia(): void {
        this.rutaPdf = '';
    }
    private subirArchivo(): void {
        if (this.archivos.length > 0) {
            this.subiendo = true;
            try {
                const formularioDeDatos = new FormData();
                this.archivos.forEach((archivo) => {
                    formularioDeDatos.append('file', archivo);
                });

                this._uploadService.uploadArchivo(formularioDeDatos).subscribe(
                    (archivo) => {
                        this.subiendo = false;
                        this.archivosSubidos.push(archivo);
                        this.files.emit(this.archivosSubidos);
                    },
                    (err) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            titleText: err.error.msg,
                        });
                    }
                );
            } catch (error) {
                console.warn('ERROR', error);
            }
        }
    }
}
