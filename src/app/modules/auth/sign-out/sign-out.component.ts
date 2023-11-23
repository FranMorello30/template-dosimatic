/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, Subject, takeUntil, takeWhile, tap, timer } from 'rxjs';
import { AuthService } from 'app/core/auth/auth.service';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'auth-sign-out',
    templateUrl: './sign-out.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class AuthSignOutComponent implements OnInit, OnDestroy {
    private baseUrl = environment.baseUrl;
    countdown: number = 5;
    countdownMapping: any = {
        '=1': '# segundo',
        other: '# segundos',
    };
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        private _httpClient: HttpClient,
        private _authService: AuthService,
        private _router: Router
    ) {}

    ngOnInit(): void {
        // Sign out
        this._authService.signOut();

        // Redirect after the countdown
        timer(1000, 1000)
            .pipe(
                finalize(() => {
                    this._router.navigate(['sign-in']);
                }),
                takeWhile(() => this.countdown > 0),
                takeUntil(this._unsubscribeAll),
                tap(() => this.countdown--)
            )
            .subscribe();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
