import { useParams } from "react-router-dom";

export function useTypeParams<T>() {
  return useParams as T;
}
