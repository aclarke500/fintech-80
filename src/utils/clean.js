/**
 * 
 * @param {Object} response response from the RAG backend
 * @returns 
 */
export function cleanAggressive(object) {
  return {
    balanced: object.premiums.Balanced,
    economic: object.premiums.Economic,
    totalCoverage: object.premiums["Total Coverage"],
    ratios: object.ratios,
  }
}

/**
 * 
 * @param {Object} responseJson from backend
 * @returns 4 arrays with the same length
 */
export function cleanSpeed(object) {
  const premiums = object.premiums;
  let speeds = object.speeds;
  let balanced = premiums.Balanced;
  let economic = premiums.Economic;
  let total = premiums["Total Coverage"];

  let validIndices = [];
  for (let i = 0; i < speeds.length; i++) {
    if (speeds[i] !== null && balanced[i] !== null && economic[i] !== null && total[i] !== null) {
      validIndices.push(i);
    }
  }

  speeds = validIndices.map(index => speeds[index]);
  balanced = validIndices.map(index => balanced[index]);
  economic = validIndices.map(index => economic[index]);
  total = validIndices.map(index => total[index]);


  return {
    speeds: speeds,
    balanced: balanced,
    economic: economic,
    total: total,
  }
}