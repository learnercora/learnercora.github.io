// 1
const yearElement = document.querySelector('footer p');
yearElement.innerHTML = `©${new Date().getFullYear()}<br/>Lin, Chih-Yun<br/>Taiwan`;
// 2
const lastModifiedElement = document.querySelector('#lastModified');
let oLastModif = new Date(document.lastModified);
lastModifiedElement.innerHTML = oLastModif
