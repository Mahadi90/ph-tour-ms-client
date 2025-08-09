export type {ISendOtp , IVerifyOtp} from './auth.api'

export interface ISendResponse<T> {
    statusCode : number,
    success : boolean,
    message : string,
    data : T
}