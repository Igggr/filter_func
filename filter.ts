export type PriceRange = [number | null, number | null];

export type Course = {
    name: string;
    prices: PriceRange;
}


export function priceFilter(courses: Course[], prices: PriceRange): Course[] {
    return courses;
}