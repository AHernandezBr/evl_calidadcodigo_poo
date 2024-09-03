import { Request, Response } from "express";
import { EditorialService } from "../services/editorialService";
import { Editorial } from "../models/editorial";


export class EditorialController {
  private editorialService: EditorialService;
  constructor() {
    this.editorialService = new EditorialService();
  }
  getAll = async (req: Request, res: Response) => {
    try {
      const editorials = await this.editorialService.getAllEditorials();
      res.status(200).json(editorials);
    } catch (error) {
      res.status(500).json({ error: "Error fetching editorials" });
    }
  };

  create = async (req: Request, res: Response) => {
    let editorial = new Editorial(3, "Planeta");
    try {
      const newEditorial = await this.editorialService.createEditorial(editorial);
      res.status(200).json(newEditorial);
    } catch (error) {
      res.status(500).json({ error: "Error creating editorial" });
    }


  };

  update = async (req:Request, res:Response) => {
    try {

    }catch (error) {
      res.status(500).json({error: "Error updating editorial"});
    }
  };

  delete = async (req:Request, res:Response) => {
    try {

    }catch (error) {
      res.status(500).json({error: "Error deleting editorial"});
    }
  };
  getById = async (req:Request, res:Response) => {
    try {

    }catch (error) {
      res.status(500).json({error: "Error finding editorial"});
    }
  }
}