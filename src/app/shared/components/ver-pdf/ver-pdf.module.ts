import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { VerPdfComponent } from './ver-pdf.component';

@NgModule({
    declarations: [VerPdfComponent],
    imports: [CommonModule, SharedModule],
    exports: [VerPdfComponent],
})
export class VerPdfModule {}
