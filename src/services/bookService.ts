import { Book } from "../models/book";
import { IbookService } from "./IbookService";
import pool from "../database/database";

export class BookService implements IbookService{
  async getAllBooks(): Promise<Book[]> {
    return [
      new Book(1, "The Hobbit", "J.R.R. Tolkien", 1937, 1),
      new Book(2, "The Lord of the Rings", "J.R.R. Tolkien", 1954, 1),
    ];
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
