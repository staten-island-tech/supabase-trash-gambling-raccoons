export type card = {
    name: string;
    description: string;
    power: number;
    leader: boolean;
    card_type: string;
    card_image: string;
    stars: number;
    game: string;
    region: string;
}

export type deck = {
    name: string
    cards: card[]
}

type profile = {
    email: string;
    name: string;
    password: string;

}

export type userdoc = {
    profile: profile;
}