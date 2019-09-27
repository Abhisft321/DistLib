import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DemoNg6libService {
    constructor() { }
}
DemoNg6libService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DemoNg6libService.ctorParameters = () => [];
/** @nocollapse */ DemoNg6libService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DemoNg6libService_Factory() { return new DemoNg6libService(); }, token: DemoNg6libService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DemoNg6libComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DemoNg6libComponent.decorators = [
    { type: Component, args: [{
                selector: 'dnl-demo-ng6lib',
                template: `
    <p>
      demo-ng6lib works!
    </p>
  `
            }] }
];
/** @nocollapse */
DemoNg6libComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DemoNg6libModule {
}
DemoNg6libModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DemoNg6libComponent],
                imports: [],
                exports: [DemoNg6libComponent]
            },] }
];

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
