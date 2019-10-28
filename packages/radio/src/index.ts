import {BaseComponent} from '@mycomponents/base';
import radioTemplate from './template.html';
import style from './style.less';

export class RadioComponent extends BaseComponent {

    constructor() {
        super();
        this.message = 'RadioComponent';
        console.log(this.message);
        console.log(radioTemplate);
        console.log(style);
    }
}