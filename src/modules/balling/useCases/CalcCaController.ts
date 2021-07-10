import { Request, Response } from "express";
import { CalCaUseCase } from './CalcCaUseCase';


class CalcCaController {

    async handle(request: Request, response: Response) {
        const { solutionSize, consumption, reefSize } = request.body;
        const calcCaUseCase = new CalCaUseCase();

        const calc = await calcCaUseCase.execute({ solutionSize, consumption, reefSize });

        return response.json(calc);
    }
}

export { CalcCaController };
