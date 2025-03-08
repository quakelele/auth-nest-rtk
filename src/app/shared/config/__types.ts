export type User = {
    id: string
    name: string
    email: string
    acessToken: string
    user: User | null
 }
 export type UserState = {
    user: User | null
 }
 