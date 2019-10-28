import {BaseComponent} from '@mycomponents/base';
import selectTemplate from './template.html';
import style from './style.less';

export class SelectComponent extends BaseComponent {

    constructor() {
        super();
        this.message = 'SelectComponent';
        console.log(this.message);
        console.log(selectTemplate);
        console.log(style);
    }
}