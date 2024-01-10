import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose, { set } from "mongoose";
const dataBaseUrl = "https://digimoncard.io/api-public/search.php?series=Digimon Card Game";

export const getCards: RequestHandler = async (req, res, next) => {
    try {
        const response = await fetch(`${dataBaseUrl}&sort=name&sortdirection=desc&limit=10`);
        const cards = await response.json();
        res.status(200).json(cards);
    } catch (error) {
        next(error);
    }
};

export const getCard: RequestHandler = async (req, res, next) => {
    const cardnumber = req.body.card;

    try {
        if(!cardnumber){
            throw createHttpError(400, "Parameters missing");
        }
        console.log(`${dataBaseUrl}&card=${cardnumber}`);
        const response = await fetch(`${dataBaseUrl}&card=${cardnumber}`);
        const card = await response.json();

        if (!card) {
            throw createHttpError(404, "Note not found");
        }

        res.status(200).json(card);
    } catch (error) {
        next(error);
    }
};


export const getCardsSpecific: RequestHandler = async (req, res, next) => {
    
    const name = req.body.name;
    const type = req.body.type;
    const color = req.body.color;
    const stage = req.body.stage;
    const attribute = req.body.attribute;
    const set_name = req.body.set_name;

    let finalString = dataBaseUrl;

    try {
        if(name){
            finalString+=("&n="+name);
        }
        if(type){
            finalString+=("&type="+type);
        }
        if(color){
            finalString+=("&color="+color);
        }
        if(stage){
            finalString+=("&stage="+stage);
        }
        if(attribute){
            finalString+=("&attribute="+attribute);
        }
        if(set_name){
            finalString+=("&pack="+set_name);
        }
        
        const response = await fetch(`${finalString}`);
        const card = await response.json();
        res.status(200).json(card);
    } catch (error) {
        next(error);
    }
};