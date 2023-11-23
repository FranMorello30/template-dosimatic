import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '@core/auth/auth.service';
import { environment } from '@environments/environment';
import { Adjunto } from '@shared/interfaces/adjunto';

@Component({
    selector: 'app-ver-pdf',
    templateUrl: './ver-pdf.component.html',
})
export class VerPdfComponent implements OnInit {
    public tituloVentana = 'Ver adjunto';
    public rutaPdf = '';
    private readonly baseUrl = environment.baseUrl;
    constructor(
        public readonly matDialogRef: MatDialogRef<VerPdfComponent>,
        private readonly _sanitizer: DomSanitizer,
        private readonly _authService: AuthService,
        @Inject(MAT_DIALOG_DATA)
        private readonly _data: {
            adjunto: Adjunto;
        }
    ) {}
    ngOnInit(): void {
        this.rutaPdf = `${this.baseUrl}/uploads/${this._authService.accessBase}/${this._data.adjunto.name}`;
    }
}
