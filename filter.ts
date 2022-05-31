export type PriceRange = [number | null, number | null];

export type Course = {
    name: string;
    prices: PriceRange;
}


export function priceFilter(courses: Course[], searchRange: PriceRange): Course[] {
    function isMatch(course: Course, [lowerSearchPrice, upperSearchPrice]: PriceRange): boolean {
        const [lowerCoursePrice, upperCoursePrice] = course.prices;

        if (lowerSearchPrice !== null && upperCoursePrice !== null && lowerSearchPrice > upperCoursePrice) {
            return false;
        }
        if (upperSearchPrice !== null && lowerCoursePrice !== null && upperSearchPrice < lowerCoursePrice) {
            return false;
        }
        return true;

    }
    return courses.filter((course) => isMatch(course, searchRange));
}
