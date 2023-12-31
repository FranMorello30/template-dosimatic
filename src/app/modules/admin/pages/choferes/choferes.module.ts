import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoferesComponent } from './choferes.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: ChoferesComponent,
    },
];

@NgModule({
    declarations: [ChoferesComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ChoferesModule {}
