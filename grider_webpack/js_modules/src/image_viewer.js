//import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css';

export default () => {
	const  image = document.createElement('img');
	//image.src = 'https://dummyimage.com/400x400/000/fff';
	image.src = small;
	document.body.appendChild(image);
}



/*
const bigImage = document.createElement('img');
bigImage.src = big;

document.body.appendChild(bigImage);*/