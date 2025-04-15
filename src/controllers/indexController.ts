import { Request, Response } from "express";

const indexController = (req:Request, res: Response) =>{
    res.status(200).json({msg: "Api em funcionamento"})
    return
}

export default indexController;