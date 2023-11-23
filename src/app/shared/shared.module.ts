import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Pipes
import { ImagenPipe } from './pipes/imagen.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';

//Angular Material
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCommonModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatLuxonDateModule } from '@angular/material-luxon-adapter';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';

//Format fecha
import { MatNativeDateModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';

import { FuseCardModule } from '@fuse/components/card';

@NgModule({
    declarations: [ImagenPipe, SanitizeHtmlPipe, SafeUrlPipe],
    imports: [
        CommonModule,

        FormsModule,
        ReactiveFormsModule,

        FuseCardModule,

        MatAutocompleteModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCommonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatListModule,
        MatLuxonDateModule,
        MatMenuModule,
        MatPaginatorModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatTableModule,
        MatTabsModule,
        MatTooltipModule,
        MatToolbarModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRippleModule,

        MatNativeDateModule,
        MomentDateModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FuseCardModule,
        MatAutocompleteModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCommonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatLuxonDateModule,
        MatMenuModule,
        MatPaginatorModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatTableModule,
        MatTabsModule,
        MatTooltipModule,
        MatToolbarModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatNativeDateModule,
        MomentDateModule,
        ImagenPipe,

        SanitizeHtmlPipe,
        SafeUrlPipe,
    ],
})
export class SharedModule {}
