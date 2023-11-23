import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MezclasComponent } from './mezclas.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: MezclasComponent,
    },
];

@NgModule({
    declarations: [MezclasComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class MezclasModule {}
