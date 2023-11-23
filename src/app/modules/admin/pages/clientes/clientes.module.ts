import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: ClientesComponent,
    },
];

@NgModule({
    declarations: [ClientesComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ClientesModule {}
