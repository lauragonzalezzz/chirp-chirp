describe('Chirp Chirp', function(){
  it('should exist', function(){
    expect(chirpChirp).to.be.a('function');
  });

  it('should return a string', function(){
    expect(chirpChirp(4)).to.be.a('string');
  });
});