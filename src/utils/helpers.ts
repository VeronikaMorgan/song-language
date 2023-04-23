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
