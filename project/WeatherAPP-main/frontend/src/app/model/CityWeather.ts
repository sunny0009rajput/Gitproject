import { Coordinate } from "./Coordinate";
import { Temperature } from "./Temperature";
import { Weather } from "./Weather";

export class CityWeather {

    country : string | undefined;
    name: string | undefined;
    coord: Coordinate | undefined;
    weather: Weather | undefined;
    temperature: Temperature | undefined;
    visibility:number | undefined;

}