export class Skills {
    id? : number;
    nombreS : string;
    colorS : string;
    porcentajeS : number;


    constructor(nombreS: string, colorS: string, porcentajeS: number){
        this.nombreS = nombreS;
        this.colorS = colorS;
        this.porcentajeS = porcentajeS;
    }
}
