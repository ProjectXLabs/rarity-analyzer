import { calculateRarity } from "./calculate-rarity";
import { INftMetadata } from "./types";
import { promises as fs } from 'fs';

const run = async () => {
    const data = await getTestData();
    const result = calculateRarity(data);
};

// C:\gitplay\rarity-analyzer\packages\data\odp-collection.json
export async function getTestData(): Promise<INftMetadata[]> {
    // Relative to project root
    const content = await fs.readFile("../../data/odp-collection.json", {encoding: 'utf-8' });
    const data = JSON.parse(content) as INftMetadata[];
    console.log('data', {data});
    return data;
};

run();