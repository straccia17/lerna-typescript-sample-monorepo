import baseTemplate from './template.html';
import style from './style.less';

export class BaseComponent {

    protected message: string = 'BaseComponent';

    constructor() {
        console.log(this.message);
        console.log(baseTemplate);
        console.log(style);
    }
}