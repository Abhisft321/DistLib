(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('demo-ng6lib', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['demo-ng6lib'] = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DemoNg6libService = /** @class */ (function () {
        function DemoNg6libService() {
        }
        DemoNg6libService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DemoNg6libService.ctorParameters = function () { return []; };
        /** @nocollapse */ DemoNg6libService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DemoNg6libService_Factory() { return new DemoNg6libService(); }, token: DemoNg6libService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [DemoNg6libComponent],
                        imports: [],
                        exports: [DemoNg6libComponent]
                    },] }
        ];
        return DemoNg6libModule;
    }());

    exports.DemoNg6libComponent = DemoNg6libComponent;
    exports.DemoNg6libModule = DemoNg6libModule;
    exports.DemoNg6libService = DemoNg6libService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=demo-ng6lib.umd.js.map
