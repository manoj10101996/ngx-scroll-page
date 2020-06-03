import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
var PagescrollComponent = /** @class */ (function () {
    function PagescrollComponent() {
    }
    PagescrollComponent.prototype.ngOnInit = function () {
    };
    PagescrollComponent.prototype.top = function () {
        document.documentElement.scrollTop = 0;
    };
    __decorate([
        Input()
    ], PagescrollComponent.prototype, "background", void 0);
PagescrollComponent.ɵfac = function PagescrollComponent_Factory(t) { return new (t || PagescrollComponent)(); };
PagescrollComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PagescrollComponent, selectors: [["ngx-page-scroll"]], inputs: { background: "background" }, decls: 2, vars: 2, consts: [["id", "totop", 3, "click"]], template: function PagescrollComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function PagescrollComponent_Template_div_click_0_listener() { return ctx.top(); });
        ɵngcc0.ɵɵtext(1, " \u21E7\n");
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("background-color", ctx.background);
    } }, styles: ["#totop[_ngcontent-%COMP%]{background-color:#dc143c;position:fixed;bottom:0;right:0;margin:20px;padding:9px 15px;border-radius:100%;color:#fff;box-shadow:0 0 5px 5px #f5f5f5;font-weight:bolder;cursor:pointer}"] });
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
    return PagescrollComponent;
}());
export { PagescrollComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNjcm9sbC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9uZ3gtc2Nyb2xsLXBhZ2UvbGliL3BhZ2VzY3JvbGwvcGFnZXNjcm9sbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU96RDtBQUVDLElBQUM7QUFFWSxJQUZJLENBQUM7QUFDbkIsSUFHRSxzQ0FBUSxHQUFSO0FBQWMsSUFDZCxDQUFDO0FBQ0YsSUFBQyxpQ0FBRyxHQUFIO0FBQ0ksUUFBRixRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDM0MsSUFBRSxDQUFDO0FBQ0YsSUFQVTtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFDLDJEQUFtQjtJQUpqQixtQkFBbUIsd0JBTC9CLFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSxpQkFBaUIsY0FDM0I7NEdBQTBDOztJQUUzQyxDQUFDLFFBQ1csbUJBQW1CLENBVy9COzs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELDBCQUFDO0FBQ0EsQ0FEQSxBQVhELElBV0M7O0FBbEJBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBT0EsQUFFQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQU5BLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFKQSxBQUFBLEFBTEEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFXQSxBQUFBLEFBQUEsQUFBQSxBQVhBLEFBV0EsQUFYQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1wYWdlLXNjcm9sbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlc2Nyb2xsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnZXNjcm9sbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VzY3JvbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQElucHV0KCkgYmFja2dyb3VuZDogc3RyaW5nO1xuICBcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cbiAgdG9wKCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICB9XG59XG4iXX0=