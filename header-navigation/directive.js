import template from '../header-navigation/template.html';
import controller from './../header-navigation/controller';

export default function directive() {
    return {
        restrict: 'E',
        controller: controller,
        template: template
    }
}