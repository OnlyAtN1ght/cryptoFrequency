# cryptoFrequency
 A JavaScript tool for performing frequency analysis on n-grams (sequences of n characters) in ciphertexts.


## Installation
To install this module, run the following command:

```
npm install cryptofrequency
```

## Usage
To use the `cryptofrequency` function, import the module and pass in an array of ciphertexts, the length of the n-grams to be counted (n), an optional string of characters to include in the analysis, and an optional array of characters to exclude from the analysis. The function will return an array of objects containing the n-grams and their counts, sorted in descending order by count.

Here is an example of how to use the `cryptofrequency` function:

```
import nGramFrequencyAnalysis from "cryptofrequency";

const ciphertext1 = "sltwjc rgdgjsc kjr mkr fjgikc kjr pjeqjc kjr tkgzkc";
const ciphertext2 = "skj skj tkgzkc";
const ciphertexts = [ciphertext1, ciphertext2];
const n = 3; // Count 3-grams
const include = "abcdefghijklmnopqrstuvwxyz"; // Only include letters in the analysis
const exclude = ["j", "k", "r", "z"]; // Exclude these letters from the analysis

const nGramFrequencies = nGramFrequencyAnalysis(ciphertexts, n, include, exclude);

// Output the sorted list of n-grams and their counts
for (const { nGram, count } of nGramFrequencies) {
  console.log(`${nGram}: ${count}`);
}
```



## License
MIT. See the LICENSE file