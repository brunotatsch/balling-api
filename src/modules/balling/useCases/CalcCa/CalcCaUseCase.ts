import { iCalcCaDTO } from "../../dtos/ICalcCaDTO";
import { Round } from "@shared/utils/Round";


class CalCaUseCase {
    async execute({ solutionSize, consumption, reefSize }: iCalcCaDTO) {

        /*
            Cada 1 ml da solução de cálcio preparada em 3 L vai ter 66,60 ppm
            Cada 1 ml da solução de cálcio preparada em 10 L vai ter 20 ppm
            Sabendo como está você precisa calcular qual o consumo em mg/L de cálcio que seu
            sistema consome por dia.
            Exemplo: Digamos que um sistema que tenha o consumo de Cálcio é 5 mg/L por dia
            (para se manter no parâmetro de 440 ppm por exemplo) e tendo meu aquário um
            volume total de 500 Litros, qual seria o valor em ml para dosar da solução A?
            5 mg/L x 500 litros = 2500 ppm
            Cada 1 ml da solução A tem de Cálcio 20 ppm (10L) e 66,6 ppm (3 L)
            2500 ppm / 20 ppm = 125 ml (da preparação de 10L) e 38 ml se usa-se da solução
            preparada em 3 litros, esse seria o volume a ser adicionado, para se manter o cálcio,
            porém este volume vai precisar de ajuste conforme os corais vão crescendo e conforme
            novos vão sendo introduzidos.
        */

        const round = new Round();

        let solutionPrepared: number;
        let caValue: number;
        let consumptionReef: number;


        if (solutionSize === 3) {
            solutionPrepared = 66.60;
        } else {
            solutionPrepared = 20;
        };

        console.log(consumption , reefSize);
        consumptionReef = round.execute((consumption * reefSize), 2);
        console.log(consumptionReef);

        console.log(consumptionReef , solutionPrepared);
        caValue = round.execute((consumptionReef / solutionPrepared), 2);
        console.log(caValue);

        return caValue;
    }
}

export { CalCaUseCase };
