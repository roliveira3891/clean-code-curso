import FreightCalculator from "./FreightCalculator";
import Item from "./Item";

export default class DefaultFreightCalculator implements FreightCalculator {
    calculate(item: Item): number {
        const freigth = (1000 * item.getVolume() * (item.getDensity() / 100));
        const minFreight = 10;
        return Math.max(minFreight, freigth);
    }

}