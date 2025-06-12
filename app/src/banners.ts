import { cards } from "./Cards";

const genshinbanner = cards.filter((card) => card.game === 'Genshin Impact')
const honkaibanner = cards.filter((card) => card.game === 'Honkai: Star Rail')

export {genshinbanner, honkaibanner}