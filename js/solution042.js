//Remove consecutive duplicate words 7 kyu


// DESCRIPTION:
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s => s.split(' ').filter((a,i,arr) => a !== arr[i-1]).join(' ')
