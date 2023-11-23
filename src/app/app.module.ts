/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';

import { MatNativeDateModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';

import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import {
    APP_BASE_HREF,
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    HashLocationStrategy,
    LocationStrategy,
    registerLocaleData,
} from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '@shared/services/interceptors/interceptor.service';
import { environment } from '@environments/environment';

import localcl from '@angular/common/locales/es-CL';

import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { NgbModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

const config: SocketIoConfig = {
    url: environment.wsUrl,
    options: {
        extraHeaders: {
            auth: sessionStorage.getItem('accessToken'),
        },
    },
};
registerLocaleData(localcl);

const routerConfig: ExtraOptions = {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    useHash: false,
};

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,

        SocketIoModule.forRoot(config),

        MatNativeDateModule,
        MomentDateModule,
        NgbModule,
        NgbProgressbarModule,
    ],
    bootstrap: [AppComponent],
    providers: [
        DecimalPipe,
        CurrencyPipe,
        DatePipe,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true,
        },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
})
export class AppModule {}
// { provide: APP_BASE_HREF, useValue: '/' },
