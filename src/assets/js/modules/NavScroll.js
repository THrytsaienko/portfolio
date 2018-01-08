import $ from 'jquery';
import waypoint from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from 'jquery-smooth-scroll';
// import 'lazysizes';

class NavScroll {
    constructor() {
        // this.lazyImages = $(".lazyload");
        // this.siteHeader = $(".site-header");
        // this.headerTriggerElement = $(".large-hero__title");
        // this.createHeaderWaypoint();
        this.pageSections = $(".page-section");
        this.headerLinks = $(".side-nav a");
        this.createSectionPageWaypoints();
        this.addSmoothScrolling();
        // this.refreshWaypoints();
    }

    // refreshWaypoints() {
    //     this.lazyImages.on('load', function () {
    //         Waypoint.refreshAll();
    //     });
    // }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }

    // createHeaderWaypoint() {
    //     var correctThis = this;
    //     new Waypoint({
    //         element: this.headerTriggerElement[0],
    //         handler: function (direction) {
    //             if (direction == "down") {
    //                 correctThis.siteHeader.addClass("site-header--dark");
    //             } else {
    //                 correctThis.siteHeader.removeClass("site-header--dark");
    //             }
    //         }
    //     });
    // }

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
                offset: "18%"
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
                offset: "-40%"
            });
        });
    }
}


export default NavScroll;