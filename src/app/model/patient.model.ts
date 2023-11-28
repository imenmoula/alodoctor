import { Groupe } from "./groupe.model";
export class patient{

    cin!: number;
    nom!: string;
    prenom!: string;
    dateNaiss!: Date;
    tel!: number;
    adresse!: string;
    sexe!: string;
    assurance!: string;
    grp!: Groupe;

}
