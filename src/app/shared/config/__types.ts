export interface AuthState {
   user: UserType
   acessToken: string
}

export interface UserType {
   userName: string
   email: string
   phone: string
   id: string
   name: string
}

export interface RegisterRequest {
   userName: string
   email: string
   phone: string
   password: string
}

