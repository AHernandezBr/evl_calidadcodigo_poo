import pool from "../database/database";
import { Editorial } from "../models/editorial";
import { IeditorialService } from "./IeditorialService";
export class EditorialService implements IeditorialService{
    getAllEditorials(): Promise<Editorial[]> {
        throw new Error("Method not implemented.");
    }
    getEditorialId(id: number): Promise<Editorial> {
        throw new Error("Method not implemented.");
    }
    async createEditorial(editorial: Editorial): Promise<Editorial> {
        const result = await pool.query(
            'INSERT INTO editorials (id,name) VALUES ($1, $2) RETURNING *',
            [editorial.id, editorial.name]
          );
          const row = result.rows[0];
          return new Editorial(row.id, row.name);
    }
    updateEditorial(Editorial: Editorial): Promise<Editorial> {
        throw new Error("Method not implemented.");
    }
    deleteEditorial(id: number): Promise<Editorial> {
        throw new Error("Method not implemented.");
    }

}