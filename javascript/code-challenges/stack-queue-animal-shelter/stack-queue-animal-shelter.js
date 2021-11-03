class Animal {
  constructor (name, species) {
    this.name = name;
    this.species = species;
    this.previous = null;
    this.next = null;
    this.nextInSpecies = null;
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
    this.allowedSpecies = {'cat':null,'dog':null};
    this.lastOfSpecies = {'cat':null,'dog':null};
  }

  enqueue (name, species) {
    if ( !(species in this.allowedSpecies) ) throw ("That's not allowed here!");
    let newAnimal = new Animal(name, species);
    if (this.allowedSpecies[species] === null) {
      this.allowedSpecies[species] = newAnimal;
    } else {
      this.lastOfSpecies[species].nextInSpecies = newAnimal;
    }
    this.lastOfSpecies[species] = newAnimal;
    if (!this.front) this.front = newAnimal;
    if (this.rear) {
      this.rear.next = newAnimal;
      newAnimal.previous = this.rear;
    }
    this.rear = newAnimal;
  }

  dequeue (pref) {
    if ( !(pref in this.allowedSpecies) ) return null;
    if (!this.front) throw('There are no animals here =(');
    let tempAnimal = this.allowedSpecies[pref];
    if (!tempAnimal) throw (`No ${pref} could be found.`);
    if (this.front.species === pref) {
      if (this.front.next) {
        this.front.next.previous = null;
        this.front = this.front.next;
      } else {
        this.front = null;
        this.rear = null;
      }
    } else {
      if (this.allowedSpecies[pref].next) {
        this.allowedSpecies[pref].previous.next = this.allowedSpecies[pref].next;
        this.allowedSpecies[pref].next.previous = this.allowedSpecies[pref].previous;
      } else {
        this.allowedSpecies[pref].previous = null;
        this.rear = this.allowedSpecies[pref].previous;
      }
    }
    if (this.allowedSpecies[pref].nextInSpecies) {
      this.allowedSpecies[pref] = this.allowedSpecies[pref].nextInSpecies;
    } else {
      this.allowedSpecies[pref] = null;
      this.lastOfSpecies[pref] = null;
    }
    return tempAnimal;
  }
}

module.exports = AnimalShelter;
