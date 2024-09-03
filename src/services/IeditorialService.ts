import { Editorial } from "../models/editorial";

export interface IeditorialService {
    getAllEditorials(): Promise<Editorial[]>;
    getEditorialId(id: number): Promise<Editorial>;
    createEditorial(Editorial: Editorial): Promise<Editorial>;
    updateEditorial(Editorial: Editorial): Promise<Editorial>;
    deleteEditorial(id: number): Promise<Editorial>;
}