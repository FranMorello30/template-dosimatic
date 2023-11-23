import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DespachosComponent } from './despachos.component';
import { Routes, RouterModule } from '@angular/router';
import { SilosComponent } from './components/silos/silos.component';
import { TolvasComponent } from './components/tolvas/tolvas.component';
import { BalanzaComponent } from './components/balanza/balanza.component';
import { SharedModule } from '@shared/shared.module';
import {
    NgbModule,
    NgbAlertModule,
    NgbProgressbarModule,
} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
    {
        path: '',
        component: DespachosComponent,
    },
];

@NgModule({
    declarations: [
        DespachosComponent,
        SilosComponent,
        TolvasComponent,
        BalanzaComponent,
    ],
    exports: [RouterModule],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        NgbModule,
        NgbProgressbarModule,
        NgbAlertModule,
    ],
})
export class DespachosModule {}
