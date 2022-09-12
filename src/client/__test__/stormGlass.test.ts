import { StormGlass } from '@src/client/stormGlass';
import axios from 'axios';
import stormGlassWeather3Hours from '@test/fixtures/stormGlass_weather_3_hours.json'
import stormGlassNormalized3Hours from '@test/fixtures/stormglass_normalized_3_hours.json'

jest.mock('axios');
describe('stormGlass service', () => {
  it('Should return the normalized forecast from the stormGlass service', async () => {
    const lat = -33.792726;
    const lng = -151.792726;

    axios.get = jest.fn().mockResolvedValue(stormGlassWeather3Hours);

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);

    expect(response).toEqual(stormGlassNormalized3Hours);
  });
});
