import { CalcCaController } from "@modules/balling/useCases/CalcCaController";
import { Router } from "express";


const ballingRouters = Router();
const calcCaController = new CalcCaController();

ballingRouters.post("/calcCa", calcCaController.handle);

export { ballingRouters };
