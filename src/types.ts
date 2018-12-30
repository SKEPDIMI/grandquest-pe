// Store
export interface State {
    user: User;
    world: World;
}

// Models
export interface User {
    id: number|null;
    username: string;
    loading: boolean;
    authenticated: boolean;
    currentJWT: string;
    created_at: string;
    is_admin: boolean;
}
export interface World {
    timeOfDay:         number;
    readableTimeOfDay: string;
    connections:       [string];
}
