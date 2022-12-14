//Reverse each word of string in given manner(VVIP)
//"Concept of The Day"- "tpecnoC fo ehT yaD"
//"They are playing game"- "yehT era gniyalp emag"
//"Hi to all"- "iH ot lla"

function reverse(str) {
  if (str.length == 0) return "";
  return reverse(str.slice(1)) + str[0];
}
console.log(reverse("name"));

function reverseWord(sent) {
  let word = sent.split(" ");
  for (let i = 0; i < word.length; i++) {
    word[i] = reverse(word[i]);
  }
  return word.join(" ");
}
console.log(reverseWord("hi to all"));
