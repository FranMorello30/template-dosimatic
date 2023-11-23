import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamionesComponent } from './camiones.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: CamionesComponent,
    },
];

@NgModule({
    declarations: [CamionesComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class CamionesModule {}
