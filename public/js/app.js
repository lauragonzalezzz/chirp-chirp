function chirpChirp(num){
  var chirp = "chirp";
  if (num <= 1){
    return "chirp";
  };
  return "chirp " + chirpChirp(num -1);
}