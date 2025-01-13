'use server';
import Data from '@/../../data-to-visualize/data.json';

export const fetchLengthOfRecord = async () => {
  const data = Data as VehicleRecord[];

  const length = data.length;
  return length;
};

export const fetchMakerData = async () => {
  const data = Data as CarData[];

  const countsByMake = data.reduce((acc: Record<string, number>, item) => {
    acc[item.Make] = (acc[item.Make] || 0) + 1;
    return acc;
  }, {});
  return countsByMake;
};

export const fetchVehicleTypeCounts = async () => {
  const data = Data as VehicleType[];

  const typeCounts = data.reduce((acc: Record<string, number>, item) => {
    const type = item['Electric Vehicle Type'];
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  return typeCounts;
};

// Top five countries
export const getTopFiveCounties = async () => {
  const data = Data as VehicleRecord[];

  // Count the occurrences of each county
  const countyCounts = data.reduce((acc: Record<string, number>, item) => {
    acc[item.County] = (acc[item.County] || 0) + 1;
    return acc;
  }, {});

  // Convert the object to an array and sort by count in descending order
  const sortedCounties = Object.entries(countyCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Convert the array to an array of objects
  const top5Counties: TopFiveCounty[] = sortedCounties.map(([name, count]) => ({
    name,
    count,
  }));

  return top5Counties;
};

// Top five models
export const getTopFiveModels = async () => {
  const data = Data as VehicleRecord[];

  // Count the occurrences of each county
  const modelCounts = data.reduce((acc: Record<string, number>, item) => {
    acc[item.Model] = (acc[item.Model] || 0) + 1;
    return acc;
  }, {});

  // Convert the object to an array and sort by count in descending order
  const sortedModels = Object.entries(modelCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Convert the array to an array of objects
  const top5Models: TopFiveModel[] = sortedModels.map(([name, count]) => ({
    name,
    count,
  }));

  return top5Models;
};

// Top five state
export const getTopFiveState = async () => {
  const data = Data as VehicleRecord[];

  const stateCounts = data.reduce((acc: Record<string, number>, item) => {
    acc[item.State] = (acc[item.State] || 0) + 1;
    return acc;
  }, {});

  const sortedStates = Object.entries(stateCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const top5States: TopFiveState[] = sortedStates.map(([name, count]) => ({
    name,
    count,
  }));

  return top5States;
};

//Fetch Full Details
export const getFullData = async () => {
  const data = Data as VehicleRecord[];

  return data;
};
