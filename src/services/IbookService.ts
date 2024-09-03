import { Book } from "../models/book";

export interface IbookService {
    getAllBooks(): Promise<Book[]>;
    getBookById(id: number): Promise<Book>;
    createBook(book: Book): Promise<Book>;
    updateBook(book: Book): Promise<Book>;
    deleteBook(id: number): Promise<Book>;
}