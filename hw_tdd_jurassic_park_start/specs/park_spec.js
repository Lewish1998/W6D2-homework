const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  beforeEach(function () {
    park = new Park(
      name='Jurassic Park', 
      ticket_price=15000, 
      dinosaur_collection=['Tyrannosaurus', 'Triceratops', 'Velociraptor']
      );
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticket_price;
    assert.strictEqual(actual, 15000);
  });


  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaur_collection;
    assert.deepStrictEqual(actual, ['Tyrannosaurus', 'Triceratops', 'Velociraptor']);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.add_dinosaur('Stegosaurus');
    const actual = (park.dinosaur_collection); // could also count length of array
    assert.deepStrictEqual(actual, ['Tyrannosaurus', 'Triceratops', 'Velociraptor', 'Stegosaurus'])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.delete_dinosaur('Velociraptor');
    const actual = (park.dinosaur_collection);
    assert.deepStrictEqual(actual, ['Tyrannosaurus', 'Triceratops'])
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
