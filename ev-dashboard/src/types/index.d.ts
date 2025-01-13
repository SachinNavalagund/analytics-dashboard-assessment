declare global {
  interface VehicleRecord {
    'VIN (1-10)': string;
    County: string;
    City: string;
    State: string;
    'Postal Code': number;
    'Model Year': number;
    Make: string;
    Model: string;
    'Electric Vehicle Type': string;
    'Clean Alternative Fuel Vehicle (CAFV) Eligibility': string;
    'Electric Range': number;
    'Base MSRP': number;
    'Legislative District': number;
    'DOL Vehicle ID': number;
    'Vehicle Location': string;
    'Electric Utility': string;
    '2020 Census Tract': number;
  }

  interface CarData {
    Make: string;
    Model: string;
  }

  interface VehicleType {
    'Electric Vehicle Type': string;
  }

  interface TopFiveCounty {
    name: string;
    count: number;
  }

  interface TopFiveState {
    name: string;
    count: number;
  }

  interface TopFiveMaker {
    name: string;
    count: number;
  }

  interface TopFiveModel {
    name: string;
    count: number;
  }
}

export {};
