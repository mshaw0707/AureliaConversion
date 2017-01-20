import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

export class Detail {
    static inject() { return [DialogController]; };

    constructor(controller) {
        this.controller = controller;
    }

    activate(image) {
        this.image = image;
    }
}