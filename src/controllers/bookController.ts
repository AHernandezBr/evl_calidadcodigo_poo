import { Request, Response } from "express";
import { BookService } from "../services/bookService";
import { Book } from "../models/book";

export class BookController {
  private bookService: BookService;
  constructor() {
    this.bookService = new BookService();
  }
  
  getAll = async (req: Request, res: Response) => {
    try {
      const books = await this.bookService.getAllBooks();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: "Error fetching books" });
    }
  };

  getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
      const book = await this.bookService.getBookById(id);
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ error: "Error fetching book" });
    }
  }

  create = async (req: Request, res: Response) => {
    const {id, title, author, year, editorialId } = req.body;
    const newBook = new Book(id, title, author, year, editorialId); // ID será generado automáticamente por la base de datos
    try {
      const createdBook = await this.bookService.createBook(newBook);
      res.status(201).json(createdBook);
    } catch (error) {
      res.status(500).json({ error: "Error creating book" });
    }
  };

  update = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const {title,author,year,editorialId} = req.body;
    const book = new Book(id,title,author,year,editorialId);
    try {
      const updatedEditorial = await this.bookService.updateBook(id, book);
      res.status(200).json(updatedEditorial);
    }catch (error) {
      res.status(500).json({error: "Error updating book"});
    }
  };

  delete = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
      const deletedBook = await this.bookService.deleteBook(id);
      res.status(200).json(deletedBook);
    } catch (error) {
      res.status(500).json({ error: "Error deleting book" });
    }
  }


}
