export type UserType = {
    id: string
    name: string
    email: string
    userName:string
    acessToken: string
    phone:string

 }
 export type RootState = {
    user: UserType 
    acessToken: string
 }
 
 export type UserWithoutAccessToken = Omit<RootState, 'acessToken'>;