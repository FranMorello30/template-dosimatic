import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, of, tap } from 'rxjs';
import { Navigation } from 'app/core/navigation/navigation.types';
import { UserService } from '@core/user/user.service';
import { Usuario } from '@shared/models/usuario.model';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    private _navigation: ReplaySubject<Navigation> =
        new ReplaySubject<Navigation>(1);
    private menu = {
        menu: [
            {
                id: 'despachos',
                title: 'Despachos',
                tooltip: 'Despachos ',
                type: 'basic',
                icon: 'mat_outline:apps',
                link: '/admin/despachos',
            },
            {
                id: 'clientes',
                title: 'Clientes',
                tooltip: 'Clientes ',
                type: 'basic',
                icon: 'heroicons_outline:user-group',
                link: '/admin/clientes',
            },
            {
                id: 'mezclas',
                title: 'Mezclas',
                tooltip: 'Mezclas ',
                type: 'basic',
                icon: 'heroicons_outline:beaker',
                link: '/admin/mezclas',
            },
            {
                id: 'inventario',
                title: 'Inventario',
                tooltip: 'Inventario ',
                type: 'basic',
                icon: 'heroicons_outline:clipboard-list',
                link: '/admin/inventario',
            },
            {
                id: 'choferes',
                title: 'Choferes',
                tooltip: 'Choferes ',
                type: 'basic',
                icon: 'heroicons_outline:users',
                link: '/admin/choferes',
            },
            {
                id: 'camiones',
                title: 'Camiones',
                tooltip: 'Camiones ',
                type: 'basic',
                icon: 'heroicons_outline:truck',
                link: '/admin/camiones',
            },
            {
                id: 'configuracion',
                title: 'Configuración',
                tooltip: 'Configuración ',
                type: 'basic',
                icon: 'mat_outline:settings',
                link: '/admin/configuracion',
            },
        ],
    };
    private _user: Usuario;
    constructor(
        private _httpClient: HttpClient,
        public readonly userService: UserService
    ) {
        this.userService.user$.subscribe((user) => {
            this._user = user;
        });
    }

    get navigation$(): Observable<Navigation> {
        return this._navigation.asObservable();
    }

    get(): Observable<Navigation> {
        const menu = this.menu.menu;
        //console.log(menu);

        const menuApp = this.moldearMenu(menu);
        //console.log(menuApp)
        this._navigation.next(menuApp);
        return of(menuApp);

        // return this._httpClient.get<Navigation>('api/common/navigation').pipe(
        //     tap((navigation) => {
        //         this._navigation.next(navigation);
        //     })
        // );
        // return this._httpClient.get<any>(`${this.baseUrl}/menu`).pipe(
        //     tap((res) =>{
        //         const menu=  this.moldearMenu(res.menuApp);
        //         this._navigation.next(menu);
        //     })
        // )
    }
    moldearMenu(menu: any[]): Navigation {
        return {
            compact: menu,
            default: menu,
            futuristic: menu,
            horizontal: menu,
        };
    }
}
