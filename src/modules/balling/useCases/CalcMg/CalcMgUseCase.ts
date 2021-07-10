import { iCalcMgDTO } from "../../dtos/ICalcMgDTO";
import { Round } from "@shared/utils/Round";

class CalMgUseCase {
    async execute({ solutionSize, consumption, reefSize }: iCalcMgDTO) {

        /*
          Magnésio
            Cada 1 ml da solução de magnésio 3 L = 24,5 ppm
            Cada 1 ml da solução de magnésio 10 L = 7,36 ppm
            Exemplo: No mesmo aquário de 500 L se o Mg estiver em 1320 e você queira ir para
            1350, estão faltando 30 ppm.
            30 ppm x 500 L = 15000 ppm
            15000 dividido por 24.5 = 612 ml (3L)
            15000 dividido por 7,36 = 2000 ml ou 2 L (10 L)
        */
        let solutionPrepared: number;
        let mgValue: number;
        let consumptionReef: number;

        const round = new Round();

        if (solutionSize === 3) {
            solutionPrepared = 24.5;
        } else {
            solutionPrepared = 7.36;
        };


        //console.log(consumption , reefSize);
        consumptionReef = round.execute((consumption * reefSize), 2);
        //console.log(consumptionReef);

        //console.log(consumptionReef , solutionPrepared);
        mgValue = round.execute((consumptionReef / solutionPrepared), 2);
        //console.log(mgValue);

        return mgValue;
    }
}

export { CalMgUseCase };
