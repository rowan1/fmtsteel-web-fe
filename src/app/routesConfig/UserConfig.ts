import React from 'react';
import { userJWTType } from '../api/Interfaces';
export class UserConfig{
    private static readonly tokenKey = "userToken"
    static readonly setToken = (token: string | null) => {
        if (token === null) {
            window.localStorage.removeItem(UserConfig.tokenKey)
        } else {
            window.localStorage.setItem(UserConfig.tokenKey, token);
        }
    }
    static readonly getToken: () => string | null = () => {
        return window.localStorage.getItem(UserConfig.tokenKey);
    }


    private static readonly userInfoKey = "userInfo"
    static readonly setUserInfo = (info?: userJWTType | null) => {

        if (info) {
            const j = JSON.stringify(info);
            window.localStorage.setItem(UserConfig.userInfoKey, j);
        } else {
            window.localStorage.removeItem(UserConfig.userInfoKey);
        }
    }
    static readonly getUserInfo: () => any = () => {
        const j = window.localStorage.getItem(UserConfig.userInfoKey);
        if(j){
            return JSON.parse(j);
        }
        return null;
    }
}