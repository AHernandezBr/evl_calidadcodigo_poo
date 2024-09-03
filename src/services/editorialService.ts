import { Editorial } from "../models/editorial";
import { IeditorialService } from "./IeditorialService";
export class EditorialService implements IeditorialService{
    getAllEditorials(): Promise<Editorial[]> {
        throw new Error("Method not implemented.");
    }
    getEditorialId(id: number): Promise<Editorial> {
        throw new Error("Method not implemented.");
    }
    createEditorial(Editorial: Editorial): Promise<Editorial> {
        throw new Error("Method not implemented.");
    }
    updateEditorial(Editorial: Editorial): Promise<Editorial> {
        throw new Error("Method not implemented.");
    }
    deleteEditorial(id: number): Promise<Editorial> {
        throw new Error("Method not implemented.");
    }

}