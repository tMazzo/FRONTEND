export class Perfil {
    id? : number;
    nombreP : string;
    apellidoP : string;
    apodoP : string;
    imgP : string;

    constructor(nombreP: string, apellidoP: string, apodoP: string, imgP: string){
        this.nombreP = nombreP;
        this.apellidoP = apellidoP;
        this.apodoP = apodoP;
        this.imgP = imgP;
    }
}
