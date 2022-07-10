import * as uuid from "uuid";

export default function useNcId(pre = "nc"): string {
  const id = uuid.v4();
  return `${pre}_${id.replace(/:/g, "_")}`;
}
