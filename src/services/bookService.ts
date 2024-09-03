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
  createBook(book: Book): Promise<Book> {
    throw new Error("Method not implemented.");
  }
  updateBook(book: Book): Promise<Book> {
    throw new Error("Method not implemented.");
  }
  deleteBook(id: number): Promise<Book> {
    throw new Error("Method not implemented.");
  }
}
