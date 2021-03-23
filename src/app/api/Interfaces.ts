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