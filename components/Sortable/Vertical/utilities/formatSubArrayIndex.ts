export function formatSubArrayIndex(outerIndex: number, innerIndex: number) {
  // Getting the letter part by mapping 0 -> a, 1 -> b, etc.
  let letterPart = String.fromCharCode(97 + innerIndex);

  return `${outerIndex}${letterPart}`;
}
