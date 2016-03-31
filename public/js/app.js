  var arr = [];
function chirpChirp(num){
  var chirp = "chirp";
  if (num === 0){
    return num;
  };
  num--;
  arr.push(chirp);
  chirpChirp(num);
  return arr.join(' ');
}
console.log(chirpChirp(4));
