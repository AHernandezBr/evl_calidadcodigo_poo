import pool from "../database/database";
import { Editorial } from "../models/editorial";
import { IeditorialService } from "./IeditorialService";
export class EditorialService implements IeditorialService{
    getAllEditorials(): Promise<Editorial[]> {
        const result = pool.query('SELECT * FROM editorials');
        return result.then((res) => res.rows.map((row) => new Editorial(row.id, row.name)));
    }
    getEditorialId(id: number): Promise<Editorial> {
        const result = pool.query('SELECT * FROM editorials WHERE id = $1', [id]);
        return result.then((res) => {
          const row = res.rows[0];
          if (!row) {
            throw new Error(`Editorial with id ${id} not found`);
          }
          return new Editorial(row.id, row.name);
        }
        );
    }
    async createEditorial(editorial: Editorial): Promise<Editorial> {
        const result = await pool.query(
            'INSERT INTO editorials (id,name) VALUES ($1, $2) RETURNING *',
            [editorial.id, editorial.name]
          );
          const row = result.rows[0];
          return new Editorial(row.id, row.name);
    }

    updateEditorial(id:number, editorial: Editorial): Promise<Editorial> {
        const result = pool.query('UPDATE editorials SET name = $1 WHERE id = $2 RETURNING *', [editorial.name, id]);
        return result.then((res) => {
          const row = res.rows[0];
          if (!row) {
            throw new Error(`Editorial with id ${id} not found`);
          }
          return new Editorial(row.id, row.name);
        }
        );
    }

    async deleteEditorial(id: number): Promise<Editorial> {
        const result = await pool.query('DELETE FROM editorials WHERE id = $1 RETURNING *',[id]);
    const row = result.rows[0];
    if (!row) {
      throw new Error(`Editorial with id ${id} not found`);
    }
    return new Editorial(row.id, row.name);
    }

}