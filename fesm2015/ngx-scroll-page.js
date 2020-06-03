import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, Input, NgModule } from '@angular/core';

import * as ɵngcc0 from '@angular/core';
let NgxScrollPageService = class NgxScrollPageService {
    constructor() { }
};
NgxScrollPageService.ɵfac = function NgxScrollPageService_Factory(t) { return new (t || NgxScrollPageService)(); };
NgxScrollPageService.ɵprov = ɵɵdefineInjectable({ factory: function NgxScrollPageService_Factory() { return new NgxScrollPageService(); }, token: NgxScrollPageService, providedIn: "root" });

let NgxScrollPageComponent = class NgxScrollPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
NgxScrollPageComponent.ɵfac = function NgxScrollPageComponent_Factory(t) { return new (t || NgxScrollPageComponent)(); };
NgxScrollPageComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxScrollPageComponent, selectors: [["lib-ngx-scroll-page"]], decls: 2, vars: 0, template: function NgxScrollPageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "p");
        ɵngcc0.ɵɵtext(1, " ngx-scroll-page works! ");
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });

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

let NgxScrollPageModule = class NgxScrollPageModule {
};
NgxScrollPageModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgxScrollPageModule });
NgxScrollPageModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgxScrollPageModule_Factory(t) { return new (t || NgxScrollPageModule)(); }, imports: [[]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxScrollPageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxScrollPageComponent, [{
        type: Component,
        args: [{
                selector: 'lib-ngx-scroll-page',
                template: `
    <p>
      ngx-scroll-page works!
    </p>
  `
            }]
    }], function () { return []; }, null); })();
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxScrollPageModule, { declarations: [NgxScrollPageComponent,
        PagescrollComponent], exports: [NgxScrollPageComponent,
        PagescrollComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxScrollPageModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxScrollPageComponent, PagescrollComponent],
                imports: [],
                exports: [NgxScrollPageComponent, PagescrollComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-scroll-page
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxScrollPageComponent, NgxScrollPageModule, NgxScrollPageService, PagescrollComponent as ɵa };

//# sourceMappingURL=ngx-scroll-page.js.map