import axios from "axios";

export interface Launch {
  cores: Array<{
    core: string;
    flight: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
  }>;
  date_local: string;
  date_precision: string;
  date_unix: number;
  date_utc: string;
  flight_number: number;
  id: string;
  launch_library_id: string;
  name: string;
  rocket: string;
  upcoming: boolean;
}

const instance = axios.create({
  baseURL: "https://api.spacexdata.com/v5/launches",
});

export const API = {
  async getPastLaunches(): Promise<Launch[]> {
    try {
      const response = await instance.get("/past");

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getLaunches(): Promise<Launch[]> {
    try {
      const response = await instance.get("/upcoming");

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
