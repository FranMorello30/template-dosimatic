import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarioComponent } from './inventario.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: InventarioComponent,
    },
];

@NgModule({
    declarations: [InventarioComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class InventarioModule {}
