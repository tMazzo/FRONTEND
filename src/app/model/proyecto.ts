export class Proyecto {
    id? : number;
    nombreP : string;
    descripcionP : string;
    linkP : string;
    imgP : string;

    constructor(nombreP: string, descripcionP: string, linkP: string, imgP: string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.linkP = linkP;
        this.imgP = imgP;
    }
}

