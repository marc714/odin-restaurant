import Hero from './hero.png';

const myHero = new Image();
myHero.src = Hero;

const homePageButton = () => {
    console.log("home page button was imported successfully")
    // hero graphic
    const main = document.querySelector('.menu-page-wrapper');
    const newDiv = document.createElement('div');
    newDiv.classList.add('section-home-page');
    main.appendChild(newDiv);

    newDiv.append(myHero);
    
    // tiles section
    const tilesContainer = document.createElement('div');
    tilesContainer.classList.add('section-home-page-tiles-container');
    main.append(tilesContainer);

    ['Store', 'Truck', 'Gift'].forEach(element => {
        const tileDiv = document.createElement('div');
        tileDiv.classList.add('tile');
        tileDiv.setAttribute('id', element);
        tilesContainer.append(tileDiv);
    });    
    
}

export { homePageButton }