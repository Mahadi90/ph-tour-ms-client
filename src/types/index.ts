
import type { ComponentType } from 'react';

export type {ISendOtp , IVerifyOtp} from './auth.api'

export interface ISendResponse<T> {
    statusCode : number,
    success : boolean,
    message : string,
    data : T
}

export interface ISideBarItems{
    title : string;
    items : {
        title : string,
        url : string,
        component :  ComponentType
    }[]
}

export  type TRole = "SUPER_ADMIN" | "ADMIN" | "USER"