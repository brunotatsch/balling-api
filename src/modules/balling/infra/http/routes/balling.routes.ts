import { CalcCaController } from "@modules/balling/useCases/CalcCa/CalcCaController";
import { CalcKhController } from "@modules/balling/useCases/CalcKh/CalcKhController";
import { Router } from "express";


const ballingRouters = Router();
const calcCaController = new CalcCaController();
const calcKhController = new CalcKhController();

ballingRouters.post("/calcCa", calcCaController.handle);
ballingRouters.post("/calcKh", calcKhController.handle);

export { ballingRouters };
