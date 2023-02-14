const Park = function(name, ticket_price, dinosaur_collection){
    this.name = name;
    this.ticket_price = ticket_price;
    this.dinosaur_collection = dinosaur_collection
}

Park.prototype.add_dinosaur = function(dinosaur){
    this.dinosaur_collection.push(dinosaur);
}


Park.prototype.delete_dinosaur = function(dinosaur){
    let dino_index;
    for(const dino of dinosaur_collection){
        if(dino === dinosaur){
            dino_index = this.dinosaur_collection.indexOf(dino);
        }
    } this.dinosaur_collection.splice(dino_index, 1);
}

Park.prototype.mostVisitors = function(){
    for (const dino of this.dinosaur_collection){
        return Math.max(dino.guestsAttractedPerDay);
    }
}

Park.prototype.findSpecies = function(species){ // need to get the index and the .species
    let index = 0;
    let speciesList = [];
    for (const dino of this.dinosaur_collection){
        if (this.dinosaur_collection[index].species === species){
            speciesList.push(this.dinosaur_collection[index])
        }
        index ++;
    } return(speciesList)
}

Park.prototype.totalVisitorsPerDay = function(){
    let index = 0;
    let total = 0;
    for (const dino of this.dinosaur_collection){
        total += this.dinosaur_collection[index].guestsAttractedPerDay;
        index ++
    } return total
}


module.exports = Park