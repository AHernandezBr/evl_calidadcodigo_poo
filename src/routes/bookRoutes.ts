import { Router } from "express";
import { BookController } from "../controllers/bookController";
import { EditorialController } from "../controllers/editorialController";

const router = Router();
const bookController = new BookController();

router.get("/books", bookController.getAll);
router.post('/books', bookController.create);
// router.get('/books/:id', bookController.getById);
// router.put('/books/:id', bookController.update);
// router.delete('/books/:id', bookController.delete);
// router.post('/editorials', editorialController.create);
// router.get('/editorials', editorialController.getAll);
// router.get('/editorials/:id', editorialController.getById);
// router.put('/editorials/:id', editorialController.update);
// router.delete('/editorials/:id', editorialController.delete);

export default router;
