import { priceFilter, Course, PriceRange } from '../filter';

// Список курсов
let courses: Course[] = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

describe('filter by price', () => {
  it('[100, 350]', () => {
    const requiredRange: PriceRange = [100, 350];
    const expected = [
      { name: "Courses in England", prices: [0, 100] }, 
      { name: "Courses in Italy", prices: [100, 200] }, 
      { name: "Courses in Russia", prices: [null, 400] },
      { name: "Courses in China", prices: [50, 250] },
      { name: "Courses in USA", prices: [200, null] },
      { name: "Courses in Kazakhstan", prices: [56, 324] },
      { name: "Courses in France", prices: [null, null] },
    ];

    const actual = priceFilter(courses, requiredRange)
    expect(actual).toEqual(expected);
  });

  it('[null, 200]', () => {
    const requiredRange: PriceRange = [null, 200];
    const expected = [
      { name: "Courses in England", prices: [0, 100] }, 
      { name: "Courses in Italy", prices: [100, 200] }, 
      { name: "Courses in Russia", prices: [null, 400] },
      { name: "Courses in China", prices: [50, 250] },
      { name: "Courses in USA", prices: [200, null] },
      { name: "Courses in Kazakhstan", prices: [56, 324] },
      { name: "Courses in France", prices: [null, null] },
  ];

  const actual = priceFilter(courses, requiredRange)
  expect(actual).toEqual(expected);
  });

  it('[200, null]', () => {
    const requiredRange: PriceRange = [200, null];
    const expected = [
      { name: "Courses in Germany", prices: [500, null] }, 
      { name: "Courses in Italy", prices: [100, 200] }, 
      { name: "Courses in Russia", prices: [null, 400] },
      { name: "Courses in China", prices: [50, 250] },
      { name: "Courses in USA", prices: [200, null] },
      { name: "Courses in Kazakhstan", prices: [56, 324] },
      { name: "Courses in France", prices: [null, null] },
  ];

  const actual = priceFilter(courses, requiredRange)
  expect(actual).toEqual(expected);
  });

});