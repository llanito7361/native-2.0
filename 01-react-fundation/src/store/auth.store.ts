import { create } from "zustand";

interface AuthState {
    status: 'authenticated' | 'unauthenticated' | 'checking' ;
    token?: string;
    // mejor definir la inferface User aparte en su modulo
    user?: {
        name:string;
        email:string;
    };
    login: (email: string, password: string) => void;
    logout: ()=> void;
}

export const useAuthStore = create<AuthState>()((set)=>({
    status:'authenticated',
    token: undefined,
    user: undefined,

    // login: (email:string, password:string)=>{
    //     set({
    //         status: 'authenticated',
    //         token: 'ABC123',
    //         user: {
    //             name: 'jhon dore',
    //             email:email
    //         }
    //     })
    // }
    login: (email:string, password:string) => {
        set({
                status: 'authenticated',
                token:'ABC123',
                user:{
                    name:'EMANUELGODOY MASYTER',
                    email
                }

        })
    },
    logout: ()=>{
        set({
            status: 'unauthenticated',
            token: undefined,
            user:undefined
        })
    }
    // login: ()=>{},
    // logout: ()=>{}
}))