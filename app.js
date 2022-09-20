'use strict';
let kittenSection = document.getElementById('kitten-profiles');

console.dir()

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let frankie = {
  name: 'Frankie',
  age: 0,
  intrests: ['wet food', 'toy mice', 'catnip'],
  isGoodWithCats: true,
  isGoodWithDogs: true,
  isGoodWithKids: true,
  photo: 'img/frankie.jpeg',
  getAge: function () {
    this, age = randomAge(3, 12);
  },
  render: function () {
    // ******** DOM manipulation**********
    // step 2 create the elemetn
    let articleElem = document.createElement('article');
    // step 3 give context if neccesssary in this case it is not needed
    //  add it to the DOM parent.appendChild(child to append)

    kittenSection.appendChild(articleElem);
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.name} is ${this.age} moths old`;
    articleElem, appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.append(ulElem);
    for (let i = 0; i < this.intrests.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = this.interest[i];
      ulElem.appendChild(liElem);
    }
    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    articleElem.appendChild(imgElem);


  }
};
let Jumper = {
  name: 'Jumper',
  age: 0,
  intrests: ['dry food', 'toy mice', 'catnip'],
  isGoodWithCats: true,
  isGoodWithDogs: true,
  isGoodWithKids: true,
  photo: 'img/jumper.jpeg',
  getAge: function () {
    this, age = randomAge(3, 12);
  },
  render: function () {
    // ******** DOM manipulation**********
    // step 2 create the elemetn
    let articleElem = document.createElement('article');
    // step 3 give context if neccesssary in this case it is not needed
    //  add it to the DOM parent.appendChild(child to append)

    kittenSection.appendChild(articleElem);
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.name} is ${this.age} moths old`;
    articleElem, appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.append(ulElem);
    for (let i = 0; i < this.intrests.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = this.interest[i];
      ulElem.appendChild(liElem);
    }
    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    articleElem.appendChild(imgElem);


  }
};


frankie.getAge();
frankie.render();
Jumper.getAge();
Jumper.render();
