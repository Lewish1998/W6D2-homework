const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dino1;
  let dino2;
  let dino3;
  let dino4;
  //['Tyrannosaurus', 'Triceratops', 'Velociraptor', 'Stegosaurus']
  beforeEach(function () {
    park = new Park(
      name='Jurassic Park', 
      ticket_price=15000, 
      dinosaur_collection=[dino1, dino2]
      );

    dino1 = new Dinosaur('Tyrannosaurus', 'Carnivore', 186);
    dino2 = new Dinosaur('Triceratops', 'Omnivore', 94);
    dino3 = new Dinosaur('Velociraptor', 'Carnivore', 113);
    dino4 = new Dinosaur('Stegosaurus', 'Herbivore', 87);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
    console.log(dinosaur_collection)
  });

  it('should have a ticket price', function(){
    const actual = park.ticket_price;
    assert.strictEqual(actual, 15000);
  });

  describe('Dinosaurs', function(){

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaur_collection.length;
    assert.deepEqual(actual, 2)
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.add_dinosaur(dino3);
    const actual = (park.dinosaur_collection.length);
    assert.deepStrictEqual(actual, 3)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.delete_dinosaur('Velociraptor');
    const actual = (park.dinosaur_collection.length);
    assert.deepStrictEqual(actual, 1)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.mostVisitors();
    assert.strictEqual(actual, 186);
  });

  it('should be able to find all dinosaurs of a particular species', function(){;
    park.add_dinosaur(dino1);
    park.add_dinosaur(dino1);
    park.add_dinosaur(dino1);
    park.add_dinosaur(dino1);
    const actual = park.findSpecies('Tyrannosaurus').length;
    assert.strictEqual(actual, 5)
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const actual = park.totalVisitorsPerDay();
    assert.strictEqual(actual, 280)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const actual = park.totalVisitorsPerDay() * 365; // no taking into account leap years
    assert.strictEqual(actual, 102200)
  });


  it('should be able to calculate total revenue for one year', function(){
    const visitorsPerYear = park.totalVisitorsPerDay() * 365;
    const actual = visitorsPerYear * ticket_price;
    assert.strictEqual(actual, 1533000000)
  });

  }) 


});
