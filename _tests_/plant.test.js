import { TestScheduler } from 'jest';
import { yuckyFood, plant, goodFood, light, water} from './../src/plant.js';

describe('hydrate', () => {
  test('should increase water level by 2', () => {
    const plant = {};
    const newPlant = hydrate(1)(plant);
    expect(newPlant.water).toEqual(2);
  });
});