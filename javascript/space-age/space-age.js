// how long it takes earth to orbit in seconds
const EARTH_ORBIT_SECS = 31557600;

// how long it takes the planet to orbit, in earth years
const ORBIT = {
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'earth': 1,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132,
}

// calculate the age of someone in a particular planet, given the age in seconds
export const age = (planetName, secs) => 
  +((secs / EARTH_ORBIT_SECS) / ORBIT[planetName]).toFixed(2);
