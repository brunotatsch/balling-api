import { Request, Response } from "express";
import { CalKhUseCase } from './CalcKhUseCase';


class CalcKhController {

    async handle(request: Request, response: Response) {
        const { solutionSize, consumption, reefSize, isPpm } = request.body;
        const calcKhUseCase = new CalKhUseCase();

        const calc = await calcKhUseCase.execute({ solutionSize, consumption, reefSize, isPpm });

        return response.json(calc);
    }
}

export { CalcKhController };
