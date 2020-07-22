const DNAtoRNA = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U',
  '': '',
}
export const toRna = dna => 
  dna.split('').reduce((rna, dnaVal) => {
    return rna + DNAtoRNA[dnaVal];
  }, '') 

