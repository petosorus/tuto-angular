export interface Beer {
    id: number;
    name: string,
    description: string;
    image_url: string;
    ingredients: {
        malt: Array<Malt>;
        hops: Hop[];
    };
}

export interface Malt {
    name: string, amount: { value: number, unit: string }
}

export interface Hop {
    name: string,
    amount: {
        value: number,
        unit: string
    },
}