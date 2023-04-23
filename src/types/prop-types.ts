import { RIGHT_LINK, LEFT_LINK } from "../utils/constants";
export interface IArrowLink {
  text: string
  to: string
  type: typeof RIGHT_LINK | typeof LEFT_LINK
}

export type TSong = {
  link: string
  performer: string | null
  name: string
}

