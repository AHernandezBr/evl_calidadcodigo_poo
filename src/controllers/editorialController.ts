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
    const { id,name } = req.body;
    const newEditorial = new Editorial(id,name); 
    try {
      const createdEditorial = await this.editorialService.createEditorial(newEditorial);
      res.status(200).json(createdEditorial);
    } catch (error) {
      res.status(500).json({ error: "Error creating editorial" });
    }


  };

  update = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const {name} = req.body;
    const editorial = new Editorial(id,name);
    try {
      const updatedEditorial = await this.editorialService.updateEditorial(id, editorial);
      res.status(200).json(updatedEditorial);
    }catch (error) {
      res.status(500).json({error: "Error updating editorial"});
    }
  };

  delete = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
      const deletedEditorial = this.editorialService.deleteEditorial(id);
      res.status(200).json(deletedEditorial);
    } catch (error) {
      res.status(500).json({ error: "Error deleting editorial" });
    }
  };
  getById = async (req:Request, res:Response) => {
    try {
      const id = parseInt(req.params.id);
      const editorial = await this.editorialService.getEditorialId(id);
      res.status(200).json(editorial);
    }catch (error) {
      res.status(500).json({error: "Error finding editorial"});
    }
  }
}