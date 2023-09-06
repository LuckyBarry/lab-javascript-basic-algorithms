// Iteration 1: Names and Input

const hacker1 = "Jos";

console.log(`The drivers name is ${hacker1}`);

const hacker2 = "Nadia";

console.log(`The navigator\'s name is ${hacker2}`);



// Iteration 2: Conditionals

const hacker1 = "Jos";

const hacker2 = "Nadia";

const numberOfCharName = hacker2.length;

//console.log(numberOfCharName);

console.log(`The navigator has the longest name, it has ${numberOfCharName} characters.`);


// Iteration 3: Loops

const hacker1 = "Jos";

const hacker2 = "Nadia";

let changedName = "";

for (let i = 0; i < hacker1.length; i++) {
    changedName += hacker1[i].toUpperCase();
    if (i < hacker1.length - 1) {
        changedName += " ";
    }
}

console.log(changedName);

// Iteration 3.2

const hacker1 = "Jos";

const hacker2 = "Nadia";

const str = hacker2;
const reversedString = str.split("").reduce((acc, char) => char + acc, "");
console.log(reversedString);

// Iteration 3.3

const strings = [
    "The driver's name goes first.",
    "Yo, the navigator goes first, definitely.",
    "What?! You both have the same name?"
];

// Bubble Sort implementation
for (let i = 0; i < strings.length - 1; i++) {
    for (let j = 0; j < strings.length - i - 1; j++) {
        if (strings[j] > strings[j + 1]) {
            // Swap the strings
            const temp = strings[j];
            strings[j] = strings[j + 1];
            strings[j + 1] = temp;
        }
    }
}

// Now, strings is sorted in lexicographic order
console.log(strings);

// Bonus 1:

const longText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent neque ante, varius vel sem sed, venenatis congue ipsum. Sed nulla lectus, tempus ut tempor quis, aliquet vitae nisi. In aliquet pharetra eros vel mollis. Maecenas a urna sit amet metus varius bibendum vitae eu nibh. Etiam in dapibus diam. Morbi euismod commodo diam. Vestibulum eget viverra sapien, eget hendrerit quam. Suspendisse lobortis sagittis nunc nec aliquam. Pellentesque ullamcorper neque nec magna accumsan viverra. Integer semper, odio sit amet iaculis semper, dui nibh tincidunt felis, non ultrices odio eros vitae tortor. Integer venenatis eros non diam rutrum blandit. Phasellus blandit lobortis lectus, vel pulvinar lectus tristique at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

  Sed et massa ultrices, luctus diam ut, maximus mi. Integer eu erat arcu. Ut condimentum sapien ut fringilla rutrum. Proin feugiat dictum arcu eu mattis. Integer feugiat dolor quis ultrices faucibus. Aenean et ipsum id nulla ultrices dictum ac et ante. Pellentesque sed gravida mi, bibendum sagittis metus.

  Phasellus ullamcorper ultrices suscipit. Vestibulum vel ultrices eros. Duis in sagittis arcu. Aenean ut dapibus elit. Cras sed hendrerit nisl. Pellentesque posuere aliquet quam. Etiam egestas libero ultrices, porttitor ante id, mollis diam. Phasellus augue mauris, interdum et tincidunt sit amet, semper quis diam. Nulla nulla odio, fringilla vel vestibulum sed, scelerisque et ante. In blandit urna ac viverra interdum.
`;

function WordCount(longText) {
    return longText.split(" ").length;
}

console.log(WordCount(longText));

const longText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent neque ante, varius vel sem sed, venenatis congue ipsum. Sed nulla lectus, tempus ut tempor quis, aliquet vitae nisi. In aliquet pharetra eros vel mollis. Maecenas a urna sit amet metus varius bibendum vitae eu nibh. Etiam in dapibus diam. Morbi euismod commodo diam. Vestibulum eget viverra sapien, eget hendrerit quam. Suspendisse lobortis sagittis nunc nec aliquam. Pellentesque ullamcorper neque nec magna accumsan viverra. Integer semper, odio sit amet iaculis semper, dui nibh tincidunt felis, non ultrices odio eros vitae tortor. Integer venenatis eros non diam rutrum blandit. Phasellus blandit lobortis lectus, vel pulvinar lectus tristique at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

  Sed et massa ultrices, luctus diam ut, maximus mi. Integer eu erat arcu. Ut condimentum sapien ut fringilla rutrum. Proin feugiat dictum arcu eu mattis. Integer feugiat dolor quis ultrices faucibus. Aenean et ipsum id nulla ultrices dictum ac et ante. Pellentesque sed gravida mi, bibendum sagittis metus.

  Phasellus ullamcorper ultrices suscipit. Vestibulum vel ultrices eros. Duis in sagittis arcu. Aenean ut dapibus elit. Cras sed hendrerit nisl. Pellentesque posuere aliquet quam. Etiam egestas libero ultrices, porttitor ante id, mollis diam. Phasellus augue mauris, interdum et tincidunt sit amet, semper quis diam. Nulla nulla odio, fringilla vel vestibulum sed, scelerisque et ante. In blandit urna ac viverra interdum.
`;




function CountWordOccurrences(text, word) {
    // Split the text by spaces and then use filter to count occurrences of the specified word
    const words = text.split(" ");
    const wordCount = words.filter(w => w.toLowerCase() === word.toLowerCase()).length;
    return wordCount;
}

const wordToCount = "et"; // Change this to the word you want to count
const count = CountWordOccurrences(longText, wordToCount);

console.log(`The word "${wordToCount}" appears ${count} times in the text.`);

