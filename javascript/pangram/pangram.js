/**
 * Is string a Pangram?
 * @param {string} s 
 */
export const isPangram = s => {
  const letters = [...'abcdefghijklmnopqrstuvwxyz'];
  return letters.every(letter =>
    s.toLowerCase().includes(letter)
  );
}