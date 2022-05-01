
export function formatText(text) {
  const arr = text.split(' ');
  const arrFormatted = arr.map(word => {
                    word = word.toLowerCase();

                    for (let i = 0; i < word.length; i++) {
                      if (word[i] !== '\'' && (word[i] !== '"')) {
                        word = word.replace(word[i], word[i].toUpperCase());
                        break;
                      } else {
                        if (word[i + 1]) {
                          word = word.replace(word[i + 1], word[i + 1].toUpperCase());
                          break;
                        }
                      }
                    }

                    return word;
                  }
  ); 
  
  const textFormatted = arrFormatted.join(' ');
  return textFormatted;
}

export function pull_IdOfUrl(path) { 
  let id = '';

  for (const char of path) {
    if (typeof Number(char) === 'number' && !isNaN(Number(char))) {
      id += char;
    }
  }

  return id;
}