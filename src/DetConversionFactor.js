export default function DetConversionFactor(unitOne, unitTwo) {

  let factor = null;
  let unitTypeIndex = 0;
  let unitOneIndex = 0;
  let unitTwoIndex = 0;

  //refer to excel sheet for layout of unit types and conversion factors
  //essentially the conversion factors are listed in a table
  //each unit, i.e. meter [m] has a row heading and column heading
  //based on the two selected units, unitOne and unitTwo, their indices are located
  //which correspond to the row and column headings
  //the row and column is correlated to the coversion factor

  //there is an array for each unit type
  //new data should be added below to UnitTypes and UnitConversions
  const unitTypes = [
    //length
    ["meter [m]", "millimeter [mm]", "inch [in]", "feet [ft]", "mile [mi]"],
    //mass
    ["kilogram [kg]", "pound [lb]"],
    //force
    ["newton [N]", "kilonewton [kN]", "pound-force [lbf]"],
    //temperature
    ["celcius [\xB0C]", "fahrenheit [\xB0F]"]
  ]
  
  const unitConversions = [
    [
      //length heading is ["meter [m]", "millimeter [mm]", "inch [in]", "feet [ft]", "mile [mi]"]
      [1.0000000000000000000000000, 0.0010000000000000000000000, 0.0254000000000000000000000, 0.3048000000000000000000000, 1609.3440000000000000000000000],
      [1000.0000000000000000000000000, 1.0000000000000000000000000, 25.4000000000000000000000000, 304.8000000000000000000000000, 1609344.0000000000000000000000000],
      [39.3700787401575000000000000, 0.0393700787401575000000000, 1.0000000000000000000000000, 12.0000000000000000000000000, 63360.0000000000000000000000000],
      [3.2808398950131200000000000, 0.0032808398950131200000000, 0.0833333333333333000000000, 1.0000000000000000000000000, 5280.0000000000000000000000000],
      [0.0006213711922373340000000, 0.0000006213711922373340000, 0.0000157828282828283000000, 0.0001893939393939390000000, 1.0000000000000000000000000]
    ],
    [
      //mass
      [1.000000000000000000, 0.453592369999748000],
      [2.204622621850000000, 1.000000000000000000]
    ],
    [
      //force
      [1, 1000, 4.4482216],
      [0.001, 1, 0.004448222],
      [0.224808943870962000, 224.808943870962000000, 1.000000000000000000]
    ],
    [
      //temperature
      [1, 1],
      [1, 1]
    ]
  ]

  //determine unit type index
  if (unitTypes[0].includes(unitOne.value)) {
    unitTypeIndex = 0
  } else if (unitTypes[1].includes(unitOne.value)) {
    unitTypeIndex = 1
  } else if (unitTypes[2].includes(unitOne.value)) {
    unitTypeIndex = 2
  } else if (unitTypes[3].includes(unitOne.value)) {
    unitTypeIndex = 3
  }

  //determine index of unitOne
  unitOneIndex = unitTypes[unitTypeIndex].indexOf(unitOne.value)

  //determine index of unitTwo
  unitTwoIndex = unitTypes[unitTypeIndex].indexOf(unitTwo.value)

  //determine conversion factor
  if (unitOneIndex < 0 || unitTwoIndex < 0) {
    factor = NaN
  } else {
    factor = unitConversions[unitTypeIndex][unitTwoIndex][unitOneIndex]
  }

  return factor
}
