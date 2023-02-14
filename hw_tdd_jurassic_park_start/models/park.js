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



module.exports = Park