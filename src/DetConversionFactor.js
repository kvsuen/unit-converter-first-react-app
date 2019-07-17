export default function DetConversionFactor(unitOne, unitTwo) {

  let factor = null;

  if (unitOne.value === "meter [m]" && unitTwo.value === "mile [mi]") {
    factor = 1 / 1609.344
  } else if (unitOne.value === "meter [m]" && unitTwo.value === "meter [m]") {
    factor = 1
  }

  return factor
}
