export class Contacto {
    id? : number;
    telefonoC : string;
    emailC : string;


    constructor(telefonoC: string, emailC: string){
        this.telefonoC = telefonoC;
        this.emailC = emailC;

    }
}
