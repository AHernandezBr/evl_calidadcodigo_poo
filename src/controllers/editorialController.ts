import { Request, Response } from "express";
import { EditorialService } from "../services/editorialService";

export class editorialController {
  private editorialService: EditorialService;
  constructor() {
    this.editorialService = new EditorialService();
  }
  getAll = async (req: Request, res: Response) => {
    try {
      const editorials = await this.editorialService.getAllBooks();
      res.status(200).json(editorials);
    } catch (error) {
      res.status(500).json({ error: "Error fetching editorials" });
    }
  };
}