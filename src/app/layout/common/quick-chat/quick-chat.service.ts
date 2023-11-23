import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    BehaviorSubject,
    map,
    Observable,
    of,
    switchMap,
    tap,
    throwError,
} from 'rxjs';
import { Chat, Mensajes } from 'app/layout/common/quick-chat/quick-chat.types';
import { environment } from '@environments/environment';

@Injectable({
    providedIn: 'root',
})
export class QuickChatService {
    private readonly baseUrl = environment.baseUrl;
    private _chat: BehaviorSubject<Chat> = new BehaviorSubject(null);
    private _chats: BehaviorSubject<Chat[]> = new BehaviorSubject<Chat[]>(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for chat
     */
    get chat$(): Observable<Chat> {
        return this._chat.asObservable();
    }

    /**
     * Getter for chat
     */
    get chats$(): Observable<any[]> {
        return this._chats.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get chats
     */
    getChats(): Observable<any> {
        // return this._httpClient.get<Chat[]>('api/apps/chat/chats').pipe(
        //     tap((response: Chat[]) => {
        //         this._chats.next(response);
        //     })
        // );

        return of([]);
    }
    recibirIndividual(uid: string, coleccion: string): Observable<any> {
        return of(null);
    }
    recibir(documento: string, coleccion: string): Observable<any> {
        return of(null);
    }
    sendIndividual(
        mensaje: string,
        origen: string,
        destino: string,
        nombre: string
    ): void {}
    /**
     * Get chat
     *
     * @param id
     */
    getChatById(id: string): Observable<any> {
        // {params: {id}}
        // return this._httpClient.get<Chat>(`${this.baseUrl}/auth/chat/${id}`,).pipe(
        //     map((chat) => {

        //         // Update the chat
        //         this._chat.next(chat);

        //         // Return the chat
        //         return chat;
        //     }),
        //     switchMap((chat) => {

        //         if ( !chat )
        //         {
        //             return throwError('Could not found chat with id of ' + id + '!');
        //         }

        //         return of(chat);
        //     })
        // );

        // const itemCollection = collection(this.firestore, 'chats', `${id}`);
        // collectionData(itemCollection).subscribe( console.log)

        // const cityRef = doc(this.firestore, 'chats', id);
        // setDoc(cityRef, {

        // });

        //addDoc(itemCollection, {id});
        // return collectionData(this.chatCollection, {
        //     idField: id,
        // }) as Observable<any[]>;

        return of([]);
    }
    retornarContactos(): Observable<any> {
        return this._httpClient
            .get<any>(`${this.baseUrl}/auth/users`)
            .pipe(map((respuesta) => respuesta.users));
    }
}
