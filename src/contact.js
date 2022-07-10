import Employment from './employment.png';

const myJob = new Image();
myJob.src = Employment;

const contactButton = () => {
    console.log("contact button imported successfully");

    const main = document.querySelector('.menu-page-wrapper');
    const newDiv = document.createElement('div');
    newDiv.classList.add('section-job-page');
    main.appendChild(newDiv);
    
    newDiv.append(myJob);

    const jobText = document.createElement('div');
    jobText.classList.add('job-text-wrapper');
    jobText.textContent = "Since 1948, In-N-Out has been a great place to work and grow. Our Founders, Harry and Esther Snyder, wanted not only to take care of our customers but to take care of our Associates as well. More than 70 years later, that focus still remains firmly in place. We’re committed to offering higher starting wages, great benefits and opportunities to grow. Quality is our most important ingredient in everything we do, and that’s why people who join our family have to be the best. So what are you waiting for? Apply today!";
    main.append(jobText)
}

export { contactButton }