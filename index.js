const searchStr = "cat dog javascript python ruby some other word"


 function findLength(str, word1, word2) {
  const result = []
  const mainArr = str.toLowerCase().split(' ');
  mainArr.forEach((elem, index) => {
    if (elem == word1.toLowerCase() || elem == word2.toLowerCase()) {
      result.push(index)
    }
  })
  const finalMessage = `расстояние между словами равно ${Math.abs(result[0]-result[1])} слов`
  if(result.length<2){
    console.log('не хватает слов')
  }
  else if ( result.length === 2) {
    console.log(finalMessage)
  }
  else {
    console.log('слишком много слов')
  }
}

findLength(searchStr, "some", "word")

// function findLength(str, word1, word2) {
//     const words = str.split(' ');
//
//   const iWord1 = words.findIndex(word => word === word1);
//   const iWord2 = words.findIndex(word => word === word2);
//   if (iWord1 === -1 || iWord2 === -1) { return null; }
//
//   return Math.abs(iWord2 - iWord1);
// }
//  const dist = findLength(searchStr,"cat","word")
// console.log(dist)
