import { iCalcKhDTO } from "../../dtos/ICalcKhDTO";
import { Round } from "@shared/utils/Round";

class CalKhUseCase {
    async execute({ solutionSize, consumption, reefSize, isPpm }: iCalcKhDTO) {

        /*
           Kh
            O Kh para se calcular em ppm, precisa ser convertido de grau alemão para ppm usando
            o fator de 17,8.
            Cada 1 ml da solução preparada em 7,5 L vai ter 81,13 ppm ou 4,55 graus.
            Cada 1 ml da solução preparada em 10 L vai ter 61 ppm ou 3,42 graus.
            Exemplo: Você esta com o Kh em 6,5 e quer deixar em 8, esta faltando 1,5 graus. Vamos
            ao calculo:
            1,5 graus x 17,8 = 26,7 ppm por litro
            Usando o mesmo exemplo de 500 litros.
            26,7 ppm x 500 L = 13550 ppm faltando
            13550 divide pelo valor do ppm da solução preparada
            13550 dividio por 81,13 (7,5 L) = 167 ml
            13550 dividido por 61 (10 L) = 222 ml
        */
        let solutionPrepared: number;
        let khValue: number;
        let consumptionPpm: number;

        const round = new Round();
        const ppmValue: number = 17.8;

        if (solutionSize === 7.5) {
            solutionPrepared = 81.13;
        } else {
            solutionPrepared = 61;
        };

        //console.log(consumption , ppmValue);
        consumptionPpm = round.execute((consumption * ppmValue), 2);
        //console.log(consumptionPpm);

        //console.log(consumptionPpm , reefSize);
        consumptionPpm = round.execute((consumptionPpm * reefSize), 2);
        //console.log(consumptionPpm);

        //console.log(consumptionPpm , solutionPrepared);
        //console.log(consumptionPpm / solutionPrepared);

        khValue = round.execute((consumptionPpm / solutionPrepared), 2);

        return khValue;
    }
}

export { CalKhUseCase };
