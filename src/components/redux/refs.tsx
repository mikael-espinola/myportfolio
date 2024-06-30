import { MutableRefObject } from "react";

interface Refs {
  [key: string]: MutableRefObject<HTMLElement | null> | null;
}

export const refs: Refs = {
  homeRef: null,
  projectRef: null,
  contactRef: null,
};
