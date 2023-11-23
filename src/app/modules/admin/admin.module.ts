import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { AdminComponent } from './admin.component';
const rutas: Route[] = [
    {
        path: '',
        component: AdminComponent,

        children: [
            {
                path: 'despachos',
                loadChildren: () =>
                    import(
                        'app/modules/admin/pages/despachos/despachos.module'
                    ).then((m) => m.DespachosModule),
            },
            {
                path: 'mezclas',
                loadChildren: () =>
                    import('@modules/admin/pages/mezclas/mezclas.module').then(
                        (m) => m.MezclasModule
                    ),
            },
            {
                path: 'inventario',
                loadChildren: () =>
                    import(
                        '@modules/admin/pages/inventario/inventario.module'
                    ).then((m) => m.InventarioModule),
            },
            {
                path: 'choferes',
                loadChildren: () =>
                    import(
                        'app/modules/admin/pages/choferes/choferes.module'
                    ).then((modulo) => modulo.ChoferesModule),
            },
            {
                path: 'camiones',
                loadChildren: () =>
                    import(
                        'app/modules/admin/pages/camiones/camiones.module'
                    ).then((m) => m.CamionesModule),
            },
            {
                path: 'clientes',
                loadChildren: () =>
                    import(
                        'app/modules/admin/pages/clientes/clientes.module'
                    ).then((m) => m.ClientesModule),
            },
        ],
    },
];

@NgModule({
    declarations: [AdminComponent],
    imports: [CommonModule, RouterModule.forChild(rutas), SharedModule],
    providers: [],
})
export class AdminModule {}
