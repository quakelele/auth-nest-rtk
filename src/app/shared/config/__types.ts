export type UsersType = {
    name: string 
    id: string 
    refreshToken: string
    acessToken: string
    user : UsersType
}


 export type UserState = {
    user: UsersType | null
 }
 