import { Request, Response } from "express";
import { CalMgUseCase } from './CalcMgUseCase';


class CalcMgController {

    async handle(request: Request, response: Response) {
        const { solutionSize, consumption, reefSize } = request.body;
        const calcMgUseCase = new CalMgUseCase();

        const calc = await calcMgUseCase.execute({ solutionSize, consumption, reefSize });

        return response.json(calc);
    }
}

export { CalcMgController };
