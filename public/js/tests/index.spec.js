describe('Chirp Chirp', function(){
  it('should exist', function(){
    expect(chirpChirp).to.be.a('function');
  });

  it('should return a string', function(){
    expect(chirpChirp(1)).to.be.a('string');
  });

  it('should return the correct amount of chirps', function(){
    // console.log('chirp2', chirpChirp(2));
    expect(chirpChirp(4)).to.equal('chirp chirp chirp chirp');
  });
});