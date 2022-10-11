/**
Given a DNA strand, return its RNA complement (per RNA transcription).

Both DNA and RNA strands are a sequence of nucleotides.

The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).

Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

- G -> C
- C -> G
- T -> A
- A -> U

Example 1:
Input: 'ACGTGGTCTTAA'
Output: 'UGCACCAGAAUU'

Example 2:
Input: 'XXX'
Output: Error: Invalid Input


Template:

function toRna(input) {
   // write your code here
}

toRna('ACGTGGTCTTAA') === 'UGCACCAGAAUU'
 */


/**
 * This function converts the provided DNA Strand into its corresponding RNA Strand.
 * If there is an invalid letter provided in the string, an error message will be 
 * returned ot the user.
 * @param {input} DNA Strand
 * @returns Corresponding RNA Strand
 */
function toRna(input) {
   let result = "";

   for (let i = 0; i < input.length; i++) {
      switch(input[i]){
         case 'G': result += 'C';
            break;
         case 'C': result += 'G';
            break;
         case 'T': result += 'A';
            break;
         case 'A': result += 'U';
            break;
         default : return "Error: Invalid Input"
      }
   }

   return result;
}

console.log(toRna('ACGTGGTCTTAA') === 'UGCACCAGAAUU');