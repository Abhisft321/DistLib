import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DemoNg6libService = /** @class */ (function () {
    function DemoNg6libService() {
    }
    DemoNg6libService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DemoNg6libService.ctorParameters = function () { return []; };
    /** @nocollapse */ DemoNg6libService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DemoNg6libService_Factory() { return new DemoNg6libService(); }, token: DemoNg6libService, providedIn: "root" });
    return DemoNg6libService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DemoNg6libComponent = /** @class */ (function () {
    function DemoNg6libComponent() {
    }
    /**
     * @return {?}
     */
    DemoNg6libComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DemoNg6libComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dnl-demo-ng6lib',
                    template: "\n    <p>\n      demo-ng6lib works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    DemoNg6libComponent.ctorParameters = function () { return []; };
    return DemoNg6libComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DemoNg6libModule = /** @class */ (function () {
    function DemoNg6libModule() {
    }
    DemoNg6libModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DemoNg6libComponent],
                    imports: [],
                    exports: [DemoNg6libComponent]
                },] }
    ];
    return DemoNg6libModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DemoNg6libComponent, DemoNg6libModule, DemoNg6libService };
//# sourceMappingURL=demo-ng6lib.js.map
