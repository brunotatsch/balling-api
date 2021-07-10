import { CalcCaController } from "@modules/balling/useCases/CalcCa/CalcCaController";
import { CalcKhController } from "@modules/balling/useCases/CalcKh/CalcKhController";
import { CalcMgController } from "@modules/balling/useCases/CalcMg/CalcMgController";
import { Router } from "express";


const ballingRouters = Router();
const calcCaController = new CalcCaController();
const calcKhController = new CalcKhController();
const calcMgController = new CalcMgController();


ballingRouters.post("/calcCa", calcCaController.handle);
ballingRouters.post("/calcKh", calcKhController.handle);
ballingRouters.post("/calcMg", calcMgController.handle);

export { ballingRouters };
