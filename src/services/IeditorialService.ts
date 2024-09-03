import { Editorial } from "../models/editorial";

export interface IbookService {
    getAllBooks(): Promise<Editorial[]>;
    getBookById(id: number): Promise<Editorial>;
    createBook(book: Editorial): Promise<Editorial>;
    updateBook(book: Editorial): Promise<Editorial>;
    deleteBook(id: number): Promise<Editorial>;
}