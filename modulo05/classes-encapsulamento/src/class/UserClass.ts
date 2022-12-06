export class UserClass{
    private id: string;
    private email: string;
    private password: string;
 
    constructor(id: string, email: string, password: string){
        this.id = id;
        this.email = email;
        this.password = password;
    }

    public getId():string { 
        return this.id; 
    }
 
    public getEmail():string { 
        return this.email; 
    }

    public getPassword():string { 
        return this.password; 
    }

    public setid(newId:string){ 
        this.id=newId; 
    }

    public setEmail(newEmail:string):void { 
        this.email=newEmail; 
    }

    public setPassword(newPassword:string){ 
        this.password=newPassword; 
    }
}