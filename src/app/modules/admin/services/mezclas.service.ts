import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Mezcla, MezclasResponse } from '../interfaces';

@Injectable({
    providedIn: 'root',
})
export class MezclasService {
    private readonly baseUrl = environment.baseUrl;
    constructor(private readonly _http: HttpClient) {}

    retornarMezclas(): Observable<Mezcla[]> {
        return this._http
            .get<MezclasResponse>(`${this.baseUrl}/mezcla`)
            .pipe(map((respones) => respones.mezclas));
    }
}
