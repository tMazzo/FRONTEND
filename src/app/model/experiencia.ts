export class Experiencia {
    id? : number;
    anioE : string;
    nombreE : string;
    localidadE : string;
    descripcionE : string;

    constructor(anioE: string, nombreE: string, localidadE: string, descripcionE: string){
        this.anioE = anioE;
        this.nombreE = nombreE;
        this.localidadE = localidadE;
        this.descripcionE = descripcionE;
    }
}
