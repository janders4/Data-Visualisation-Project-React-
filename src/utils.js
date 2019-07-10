import _pick from "lodash/pick";

export const dataCleanse = breweries => {
  const cleansedData = [];
  const toPick = ["id", "name", "region", "locationType", "brewery"];

  breweries.forEach(brewery => cleansedData.push(_pick(brewery, toPick)));
  return cleansedData;
};
