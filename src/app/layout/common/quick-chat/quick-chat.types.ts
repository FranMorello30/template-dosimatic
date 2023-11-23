export interface Chat {
    id?: string;
    contactId?: number;
    contact?: Contact;
    unreadCount?: number;
    muted?: boolean;
    lastMessage?: string;
    lastMessageAt?: string;
    messages?: {
        id?: string;
        chatId?: string;
        contactId?: string;
        isMine?: boolean;
        value?: string;
        createdAt?: string;
    }[];
}

export interface Contact {
    id?: number;
    avatar?: string;
    name?: string;
    about?: string;
}

export interface Mensajes {
    id?: string;
    chatId?: string;
    contactId?: string;
    isMine?: boolean;
    value?: string;
    createdAt?: any;
}
