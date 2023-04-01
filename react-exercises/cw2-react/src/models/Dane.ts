export class Contact{
    constructor(public firstName:string, public lastName:string,public email? :string){}
}
export function GetAll():Array<Contact>{
    return [
        new Contact("Adam","Nowak","anowak@gmail.com"),
        new Contact("Monika","Małecka","amonk@gmail.com"),
        new Contact("Jerzy","Zbereży","jj@gmail.com"),
        new Contact("Roman","Boman","rb@gmail.com"),
        new Contact("Renata","Edwińska"),
        new Contact("Marzena","Rybnicka"),
    ]
}