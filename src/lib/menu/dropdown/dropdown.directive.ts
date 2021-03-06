import {AfterContentInit, ContentChild, Directive, HostBinding, HostListener} from '@angular/core';
import { DropdownService } from './dropdown.service';
import {MenuComponent} from '../menu.component';

@Directive({
  selector: '[dhsCloseToggle], [dhs-close-toggle], [closeToggle], [close-toggle]'
})

export class CloseToggleDirective {
  constructor(
    public service: DropdownService
  ) {}

  @HostListener('click') onClick() {
    this.service.closeToggle();
  }
}


@Directive({
  selector: '[dhsDropdown], [dhs-dropdown], [dropdown]'
})

export class DropdownDirective implements AfterContentInit {
  @ContentChild(MenuComponent) menuComponent: MenuComponent;

  @HostBinding('class.dropdown') private isDropdown: boolean;
  constructor() {
    this.isDropdown = true;
  }

  ngAfterContentInit() {
    this.menuComponent.classList = `dropdown-menu`
  }

}
