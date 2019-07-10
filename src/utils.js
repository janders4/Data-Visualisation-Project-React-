import _pick from "lodash/pick";

export const dataCleanse = breweries => {
  const cleansedData = [];

  //const toPick = ["id", "name", "region", "locationType", "brewery"];
  const toPick = ["id", "nameShortDisplay", "established"];

  breweries.forEach(brewery => {
    brewery = brewery.brewery;
    cleansedData.push(_pick(brewery, toPick));
  });

  cleansedData.forEach(brewery => {
    brewery.label = brewery.nameShortDisplay;
    delete brewery.nameShortDisplay;
    brewery.value = new Date().getFullYear() - brewery.established;
    delete brewery.established;
  });

  return cleansedData;
};

// export const renameKeys =
