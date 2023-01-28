import axios from 'axios';
import type { AnimalDataType } from '../types';

const OFFICIAL_API =
  'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL';

export async function getAnimalData(count: number) {
  const response = await axios.get<AnimalDataType[]>(
    `${OFFICIAL_API}&$top=${count}`,
  );
  return response;
}
