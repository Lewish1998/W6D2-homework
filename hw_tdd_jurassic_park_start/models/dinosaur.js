const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
}

Dinosaur.prototype.add_dinosaur = function(dinosaur){
  this.dinosaur_collection.push(dinosaur);
}

Dinosaur.prototype.delete_dinosaur = function(dinosaur){
  let dino_index;
  for(const dino of dinosaur_collection){
      if(dino === dinosaur){
          dino_index = this.dinosaur_collection.indexOf(dino);
      }
  } this.dinosaur_collection.splice(dino_index, 1);
}
module.exports = Dinosaur;
