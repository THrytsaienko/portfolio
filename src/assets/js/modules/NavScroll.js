import $ from 'jquery';
import waypoint from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from 'jquery-smooth-scroll';

class NavScroll {
    constructor() {
        this.pageSections = $(".page-section");
        this.headerLinks = $(".side-nav a");
        this.createSectionPageWaypoints();
        this.addSmoothScrolling();
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }

    createSectionPageWaypoints() {
        var that = this;
        this.pageSections.each(function () {
            var currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function (direction) {
                    if (direction == "down") {
                        var machingHeaderLink = currentPageSection.getAttribute("data-maching-link");
                        that.headerLinks.removeClass("side-nav__item--active");
                        $(machingHeaderLink).addClass("side-nav__item--active");
                    }
                },
                // offset: "18%"
                offset: "5%"
            });

            new Waypoint({
                element: currentPageSection,
                handler: function (direction) {
                    if (direction == "up") {
                        var machingHeaderLink = currentPageSection.getAttribute("data-maching-link");
                        that.headerLinks.removeClass("side-nav__item--active");
                        $(machingHeaderLink).addClass("side-nav__item--active");
                    }
                },
                offset: "-60%"
            });
        });
    }
}

export default NavScroll;