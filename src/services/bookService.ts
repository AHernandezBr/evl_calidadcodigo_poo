import { Book } from "../models/book";
import { IbookService } from "./IbookService";
import pool from "../database/database";

export class BookService implements IbookService{
  async getAllBooks(): Promise<Book[]> {
    const result = await pool.query('SELECT * FROM books');
    return result.rows.map((row: any) => new Book(row.id, row.title, row.author, row.year, row.editorial_id));
  }
  
  getBookById(id: number): Promise<Book> {
    throw new Error("Method not implemented.");
  }
  async createBook(book: Book): Promise<Book> {
    const result = await pool.query(
      'INSERT INTO books (id, title, author, year, editorialid) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [book.id, book.title, book.author, book.year, book.editorialId]
    );
    const row = result.rows[0];
    return new Book(row.id, row.title, row.author, row.year, row.editorialid);
  }

  updateBook(book: Book): Promise<Book> {
    throw new Error("Method not implemented.");
  }
  async deleteBook(id: number): Promise<Book> {
    const result = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *',[id]);
    const row = result.rows[0];
    if (!row) {
      throw new Error(`Book with id ${id} not found`);
    }
    return new Book(row.id, row.title, row.author, row.year, row.editorial_id);
  }
}
