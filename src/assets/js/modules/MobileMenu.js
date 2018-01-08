import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.siteHeader = $('body');
        this.menuIcon = $(".mobile-menu-icon");
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        this.siteHeader.toggleClass("header-visible");
    }
}

export default MobileMenu;