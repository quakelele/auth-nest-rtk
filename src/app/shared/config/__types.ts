export interface UserType  {
    id: string
    name: string
    email: string
    userName:string
    acessToken: string
    phone:string

 }
export  interface AuthState  {
 user:UserType
 acessToken: string 
}
 


//  export type UserWithoutAccessToken = Omit<RootState, 'acessToken'>;