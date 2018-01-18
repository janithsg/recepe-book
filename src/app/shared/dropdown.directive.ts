import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {

    @HostBinding('class.open')isOpen = false;  //open is the class name of change the value dinamically
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}

