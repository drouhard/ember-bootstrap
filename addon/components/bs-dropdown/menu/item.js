import Component from '@ember/component';
import { layout as templateLayout, tagName } from '@ember-decorators/component';
import layout from 'ember-bootstrap/templates/components/bs-dropdown/menu/item';

/**
 Component for a dropdown menu item.

 See [Components.Dropdown](Components.Dropdown.html) for examples.

 @class DropdownMenuItem
 @namespace Components
 @extends Ember.Component
 @public
 */
@templateLayout(layout)
@tagName('')
export default class DropdownMenuItem extends Component {}
