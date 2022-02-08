export interface Country {
    name: string,
    code: string,
    region: string,
    subRegion?: string,
    borders: string[],
    population: number,
    map: string,
    flag: string,
    coatOfArms: string
    timezone: string,
}