function nGramFrequencyAnalysis(ciphertexts, n, include, exclude) {
  // Set default values for include and exclude parameters
  include = include || " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  exclude = exclude || [];
  
  // Convert single string input to array of strings
  if (typeof ciphertexts === "string") {
    ciphertexts = [ciphertexts];
  }
  
  // Create an empty object to store n-gram frequencies
  var frequencies = {};
  
  // Loop through the ciphertexts and count the frequency of each n-gram in all of the texts
  for (var i = 0; i < ciphertexts.length; i++) {
    var ciphertext = ciphertexts[i];
    for (var j = 0; j < ciphertext.length - n + 1; j++) {
      var nGram = ciphertext.substr(j, n);
      // Only count the n-gram if all of its characters are in the include list and none of its characters are in the exclude list
      if (include.includes(nGram) && !exclude.includes(nGram)) {
        if (frequencies[nGram]) {
          frequencies[nGram]++;
        } else {
          frequencies[nGram] = 1;
        }
      }
    }
  }
  
  // Sort the frequencies in descending order
  var sortedFrequencies = Object.keys(frequencies).sort(function(a, b) {
    return frequencies[b] - frequencies[a];
  });
  
  // Return the sorted frequencies and their counts
  return sortedFrequencies.map(function(nGram) {
    return { nGram: nGram, count: frequencies[nGram] };
  });
}

exports.nGramFrequencyAnalysis = nGramFrequencyAnalysis;