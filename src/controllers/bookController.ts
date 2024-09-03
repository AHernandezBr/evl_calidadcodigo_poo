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

  create = async (req: Request, res: Response) => {
    let book = new Book(3, "The Silmarillion", "J.R.R. Tolkien", 1977, 1);
    try {
      const newBook = await this.bookService.createBook(book);
      res.status(200).json(newBook);
    } catch (error) {
      res.status(500).json({ error: "Error creating book" });
    }


  };
}
