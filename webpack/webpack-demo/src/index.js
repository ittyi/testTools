import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Helloo', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());