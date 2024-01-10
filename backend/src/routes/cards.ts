import express from "express";
import * as CardsController from "../controllers/cards";

const router = express.Router();

router.get("/", CardsController.getCards);
router.get("/single", CardsController.getCard);
router.get("/specific", CardsController.getCardsSpecific);




export default router;