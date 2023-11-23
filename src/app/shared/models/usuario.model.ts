export interface Usuario {
    token: string;
    nombre: string;
    avatar: string;
    rol: string;
    username: string;
}

export type Rol = 'ADMINISTRADOR' | 'OPERADOR' | 'SUPERVISOR';
