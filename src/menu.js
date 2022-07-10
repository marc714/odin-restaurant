import Food from './innoutmenu.png';

const myFood = new Image();
myFood.src = Food;

const foodMenuButton = () => {
    console.log("foodMenuButton imported successfully");

    const main = document.querySelector('.menu-page-wrapper');
    const newDiv = document.createElement('div');
    newDiv.classList.add('section-menu-page');
    main.appendChild(newDiv);

    newDiv.append(myFood);
};

export { foodMenuButton };