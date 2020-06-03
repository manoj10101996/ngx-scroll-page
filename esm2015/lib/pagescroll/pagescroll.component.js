import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
let PagescrollComponent = class PagescrollComponent {
    constructor() { }
    ngOnInit() {
    }
    top() {
        document.documentElement.scrollTop = 0;
    }
};
PagescrollComponent.ɵfac = function PagescrollComponent_Factory(t) { return new (t || PagescrollComponent)(); };
PagescrollComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PagescrollComponent, selectors: [["ngx-page-scroll"]], inputs: { background: "background" }, decls: 2, vars: 2, consts: [["id", "totop", 3, "click"]], template: function PagescrollComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function PagescrollComponent_Template_div_click_0_listener() { return ctx.top(); });
        ɵngcc0.ɵɵtext(1, " \u21E7\n");
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("background-color", ctx.background);
    } }, styles: ["#totop[_ngcontent-%COMP%]{background-color:#dc143c;position:fixed;bottom:0;right:0;margin:20px;padding:9px 15px;border-radius:100%;color:#fff;box-shadow:0 0 5px 5px #f5f5f5;font-weight:bolder;cursor:pointer}"] });
__decorate([
    Input()
], PagescrollComponent.prototype, "background", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PagescrollComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-page-scroll',
                template: "<div (click)=\"top()\" id=\"totop\" [style.backgroundColor]=\"background\" >\n    &#8679;\n</div>",
                styles: ["#totop{background-color:#dc143c;position:fixed;bottom:0;right:0;margin:20px;padding:9px 15px;border-radius:100%;color:#fff;box-shadow:0 0 5px 5px #f5f5f5;font-weight:bolder;cursor:pointer}"]
            }]
    }], function () { return []; }, { background: [{
            type: Input
        }] }); })();
export { PagescrollComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNjcm9sbC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9uZ3gtc2Nyb2xsLXBhZ2UvbGliL3BhZ2VzY3JvbGwvcGFnZXNjcm9sbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU96RCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtBQUFHLElBRWpDLGdCQUFnQixDQUFDO0FBQ25CLElBR0UsUUFBUTtBQUFLLElBQ2IsQ0FBQztBQUNILElBQUUsR0FBRztBQUNMLFFBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQzNDLElBQUUsQ0FBQztBQUNILENBQUM7Ozs7Ozs7Ozt3T0FBQTtBQVBVO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsdURBQW1CO0FBSmpCLG1CQUFtQixvQkFML0IsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFO1FBQWlCLFVBQzNCOzs7d0NBQTBDO2lJQUUzQyxDQUFDLElBQ1csbUJBQW1CLENBVy9COzs7O29CQUNEOztBQW5CQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQU9BLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBUEEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUpBLEFBQUEsQUFMQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQVdBLEFBWEEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtcGFnZS1zY3JvbGwnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZXNjcm9sbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhZ2VzY3JvbGwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlc2Nyb2xsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIEBJbnB1dCgpIGJhY2tncm91bmQ6IHN0cmluZztcbiAgXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG4gIHRvcCgpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgfVxufVxuIl19