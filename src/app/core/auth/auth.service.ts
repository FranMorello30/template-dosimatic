/* eslint-disable @typescript-eslint/member-ordering */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, switchMap, throwError } from 'rxjs';

import { UserService } from 'app/core/user/user.service';
import { environment } from 'environments/environment';

import { Usuario } from '@shared/models/usuario.model';
import { Router } from '@angular/router';

// eslint-disable-next-line @typescript-eslint/naming-convention

@Injectable()
export class AuthService {
    private _authenticated: boolean = false;
    private baseUrl = environment.baseUrl;
    constructor(
        private _httpClient: HttpClient,
        private _router: Router,
        private _userService: UserService
    ) {}

    set accessToken(token: string) {
        sessionStorage.setItem('accessToken', token);
    }

    get accessToken(): string {
        const token = sessionStorage.getItem('accessToken') || '';

        if (token.trim().length === 0) {
            this._authenticated = false;
            this.signOut();
            return;
        }

        if (token == 'undefined') {
            this._authenticated = false;
            this.signOut();
            return;
        }

        if (token == undefined) {
            this._authenticated = false;
            this.signOut();
            return;
        }

        return token;
    }

    forgotPassword(email: string): Observable<any> {
        return this._httpClient.post('api/auth/forgot-password', email);
    }
    resetPassword(password: string): Observable<any> {
        return this._httpClient.post('api/auth/reset-password', password);
    }
    signIn(credentials: {
        username: string;
        password: string;
    }): Observable<Usuario> {
        return this._httpClient
            .post<Usuario>(`${this.baseUrl}/auth/sing-in`, {
                username: credentials.username,
                password: credentials.password,
            })
            .pipe(
                switchMap((usuario: Usuario) => {
                    this.accessToken = usuario.token;
                    this._authenticated = true;
                    this._userService.user = usuario;
                    return of(usuario);
                })
            );
    }

    signInUsingToken(): Observable<any> {
        // Renew token
        return this._httpClient.get(`${this.baseUrl}/auth/check-status`).pipe(
            catchError(() =>
                // Return false
                of(false)
            ),
            switchMap((usuario: Usuario) => {
                //console.log(usuario)
                // Store the access token in the local storage
                this.accessToken = usuario.token;

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                //this._userService.user = response.usuario;
                this._userService.user = usuario;
                //console.warn(response.usuario);
                // Return true
                return of(true);
            })
        );
    }
    signOut(): void {
        sessionStorage.removeItem('accessToken');

        this._authenticated = false;
    }
    signUp(credentials): void {
        this._httpClient
            .post(`${this.baseUrl}/auth/sing-up`, {
                email: credentials.email,
                password: credentials.password,
                username: credentials.username,
                nombre: credentials.name,
            })
            .subscribe({
                next: (value) => {
                    this._router.navigateByUrl('/sign-in');
                },
                error: (err) => {
                    console.error(err);
                },
            });
    }

    unlockSession(credentials: {
        username: string;
        password: string;
    }): Observable<any> {
        return this._httpClient
            .post(`${this.baseUrl}/auth/unlock-session`, credentials)
            .pipe(
                switchMap((usuario: Usuario) => {
                    this.accessToken = usuario.token;

                    this._authenticated = true;

                    this._userService.user = usuario;
                    return of(usuario);
                })
            );
    }
    lockSession(estado: string): Observable<any> {
        return this._httpClient.patch(`${this.baseUrl}/auth/estado`, {
            estado,
        });
    }
    check(): Observable<boolean> {
        // Check if the user is logged in
        if (this._authenticated) {
            return of(true);
        }

        // Check the access token availability
        if (!this.accessToken) {
            return of(false);
        }

        // Check the access token expire date

        // If the access token exists and it didn't expire, sign in using it
        return this.signInUsingToken();
    }
}
