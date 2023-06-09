import { TSong } from "../types/prop-types"

export const findSongByName = (name: string, songs:TSong[]): TSong | undefined => {
  const data = songs.find(e => new RegExp(name, 'ig').test(e.name))
  if(data) {
    return data;
  } else {
    console.log(`song with name: ${name} doesn't exist in the array`);
    return;
  }
}

export const shuffleArray = (arr: any[]): any[] => {
  let m = arr.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  return arr;
}

export const compareArrays = (arr1: string[] | number[], arr2: string[] | number[]):boolean => {
  if(arr1.length !== arr2.length) return false
  return JSON.stringify(arr1) === JSON.stringify(arr2)
} 
