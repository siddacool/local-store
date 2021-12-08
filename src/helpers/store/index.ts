import {
  createLocalStorage as createLocalStorageMain,
  createSessionStorage as createSessionStorageMain,
} from "./create-storage";
import { useStorage as useStorageMain } from "./use-storage";

export const createLocalStorage = createLocalStorageMain;
export const createSessionStorage = createSessionStorageMain;
export const useStorage = useStorageMain;
