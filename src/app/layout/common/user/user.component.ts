/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-enable @typescript-eslint/naming-convention */
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { BooleanInput } from '@angular/cdk/coercion';
import { Subject, takeUntil } from 'rxjs';

import { UserService } from 'app/core/user/user.service';
import { Usuario } from '@shared/models/usuario.model';
import { AuthService } from '@core/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'user',
})
export class UserComponent implements OnInit, OnDestroy {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    static ngAcceptInputType_showAvatar: BooleanInput;
    @Input() showAvatar: boolean = true;
    user: Usuario;
    rutaImg = '';
    private readonly baseUrl = environment.baseUrl;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        private readonly _changeDetectorRef: ChangeDetectorRef,
        private readonly _httpClient: HttpClient,
        private readonly _router: Router,

        private readonly _userService: UserService,
        private readonly _authService: AuthService
    ) {}

    ngOnInit(): void {
        this._userService.user$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((user: Usuario) => {
                this.user = user;
                this._changeDetectorRef.markForCheck();
            });
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    updateUserStatus(status: string): void {
        // Return if user is not available
        if (!this.user) {
            return;
        }

        // Update the user
        this._userService.update(status).subscribe();
    }

    signOut(): void {
        this._router.navigate(['/sign-out']);
    }

    bloquear(): void {
        this._authService.lockSession('inactivo').subscribe((resp) => {
            this._router.navigateByUrl('/unlock-session');
        });
    }
    perfil(): void {
        this._router.navigate(['admin/perfil']);
    }
}
