class Cat {
    constructor(breed, age, gender, furColor, name, photoURL) {
      this.breed = breed;
      this.age = age;
      this.gender = gender;
      this.furColor = furColor;
      this.name = name;
      this.photoURL = photoURL;
      this.isSleeping = false;
    }
  
    askForFood() {
      if (!this.isSleeping) {
        console.log(`${this.name} is asking for food.`);
      } else {
        console.log(`${this.name} is sleeping and cannot ask for food.`);
      }
    }
  
    goToSleep() {
      this.isSleeping = true;
      console.log(`${this.name} is now sleeping.`);
    }
  
    wakeUp() {
      this.isSleeping = false;
      console.log(`${this.name} has woken up.`);
    }
  }
 
  const cats = [
    new Cat('Persian', 2, 'Male', 'White', 'Fluffy', 'img/cat1.jpg'),
    new Cat('Siamese', 1, 'Female', 'Brown', 'Whiskers', 'img/cat2.jpg'),
    new Cat('Maine Coon', 3, 'Male', 'Gray', 'Shadow', 'img/cat3.jpg'),
    new Cat('Sphynx', 4, 'Female', 'Pink', 'Naked', 'img/cat4.jpg')
  ];
 
  const catButtonsDiv = document.getElementById('catButtons');
  cats.forEach((cat, index) => {
    const button = document.createElement('button');
    button.textContent = `Cat ${index + 1}`;
    button.onclick = () => showCatInfo(index);
    catButtonsDiv.appendChild(button);
  });
  
  function showCatInfo(catIndex) {
    const catInfoDiv = document.getElementById('catInfo');
    const currentCat = cats[catIndex];
  
    const catInfoHTML = `
      <h2>${currentCat.name}</h2>
      <p><strong>Breed:</strong> ${currentCat.breed}</p>
      <p><strong>Age:</strong> ${currentCat.age} years</p>
      <p><strong>Gender:</strong> ${currentCat.gender}</p>
      <p><strong>Fur Color:</strong> ${currentCat.furColor}</p>
      <p><strong>Is Sleeping:</strong> ${currentCat.isSleeping ? 'Yes' : 'No'}</p>
      <img src="${currentCat.photoURL}" alt="${currentCat.name} Photo">
    `;
  
    catInfoDiv.innerHTML = catInfoHTML;
  }