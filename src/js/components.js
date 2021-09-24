import '../css/components.css';
import webpackLogo from '../assets/img/webpackLogo.png';

export const greet = ( name ) => {
    const h1 = document.createElement('h1');
    h1.innerText = `¡Hi ${ name }!`;
    document.body.append(h1);

    // const img = document.createElement('img');
    // img.src = webpackLogo;
    // document.body.append(img);
}
