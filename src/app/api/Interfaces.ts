export enum EMartialStatus{
    single="Single",
    married="Married",
    divorced="Divorced",
    widowed="Widowed",
    seperated="Separated"
}

export enum EMilitaryStatus{
    completed="Completed",
    postponed="Postponed",
    notApplicable="NotApplicable",
    exempted="Exempted"
}

export enum EGender{
    male="Male",
    female="Female"
}
export interface ICareersBody{
    id?:number,
    name?:string,
    email?:string,
    phone?:string,
    dateOfBirth?:Date,
    gender?:EGender,
    martialStatus?:EMartialStatus,
    militaryStatus?:EMilitaryStatus,
    resumeFile?:FormData,
    resumeFileName?:string
}

export interface ICareersResponse{
    items:ICareersBody[]
}

export interface IContactsBody{
    id?:number,
    phone?:string,
    email?:string,
    address?:string,
    createdAt?:Date,
    updatedAt?:Date
}

export interface IContactResponse{
    items:IContactsBody
}

export interface IServicesBody{
    id?:number,
    title?:string,
    description?:string,
    path?:string[],
    image?:any,
    services?:IServicesBody[]
}

export interface IServicesResponse{
    items:IServicesBody[]
}

export interface userJWTType{
    id:number,
    name:string,
    email:string
}

export interface ILoginResponse{ 
    accessToken: string; 
    userInfo?: userJWTType 
}

export interface IProjectBody{
    id?:number,
    title?:string,
    description?:string,
    image?:any,
    createdAt?:Date,
    updatedAt?:Date,
    path?:string[]
}
export interface IProjectResponse{
    items:IProjectBody[]
}

export interface IClientsBody{
    id?:number,
    path?:any
}
export interface IClientResponse{
    items:IClientsBody[]
}