(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-categories-categories-module"],{

/***/ "./src/app/views/categories/categories-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/categories/categories-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesRoutingModule", function() { return CategoriesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _categories_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.create.component */ "./src/app/views/categories/categories.create.component.ts");
/* harmony import */ var _categories_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories.list.component */ "./src/app/views/categories/categories.list.component.ts");
/* harmony import */ var _categories_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories.update.component */ "./src/app/views/categories/categories.update.component.ts");






var routes = [
    {
        path: '',
        data: {
            title: 'Categories'
        },
        children: [
            {
                path: '',
                redirectTo: 'create'
            },
            {
                path: 'create',
                component: _categories_create_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesCreateComponent"],
                data: {
                    title: 'Create'
                }
            },
            {
                path: 'list',
                component: _categories_list_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesListComponent"],
                data: {
                    title: 'List'
                }
            },
            {
                path: 'edit/:id',
                component: _categories_update_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesUpdateComponent"],
                data: {
                    title: 'Edit'
                }
            }
        ]
    }
];
var CategoriesRoutingModule = /** @class */ (function () {
    function CategoriesRoutingModule() {
    }
    CategoriesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CategoriesRoutingModule);
    return CategoriesRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/categories/categories.create.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/views/categories/categories.create.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Categories Create</strong>\r\n          <small>Form</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Categories Name</label>\r\n                <input type=\"text\" [(ngModel)]=\"category.name\"  #categories class=\"form-control\" id=\"name\" placeholder=\"Enter your category name\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"color\">Color</label>\r\n                <input type=\"color\" [(ngModel)]=\"category.color\" class=\"form-control\" id=\"color\"\r\n                  placeholder=\"Enter your tags name\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button type=\"submit\" [disabled]=\"!enable\" (click)=\"createCategories()\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\r\n          <button [routerLink]=\"['/admin/categories/list']\" class=\"btn btn-sm btn-secondary\"><i class=\"fa fa-list-alt\"></i> View categories list</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/categories/categories.create.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/categories/categories.create.component.ts ***!
  \*****************************************************************/
/*! exports provided: CategoriesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesCreateComponent", function() { return CategoriesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var _model_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/index */ "./src/app/model/index.ts");
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/notification.service */ "./src/app/service/notification.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");






var CategoriesCreateComponent = /** @class */ (function () {
    function CategoriesCreateComponent(adminService, notificationService, authService) {
        this.adminService = adminService;
        this.notificationService = notificationService;
        this.authService = authService;
        this.enable = true;
    }
    CategoriesCreateComponent.prototype.ngOnInit = function () {
        this.category = new _model_index__WEBPACK_IMPORTED_MODULE_3__["Category"]();
        this.category.color = '#51b54a';
    };
    CategoriesCreateComponent.prototype.createCategories = function () {
        var _this = this;
        var name = this.categoriesElement.nativeElement.value;
        if (name) {
            this.enable = false;
            this.adminService.createOrUpdateCategories(this.category).subscribe(function (res) {
                _this.enable = true;
                _this.notificationService.showSuccess('Category was created.', 'Notification');
                _this.categoriesElement.nativeElement.focus();
                _this.category.name = '';
            }, function (err) {
                var status = String(err);
                if (status === "Error: 401") {
                    _this.notificationService.showWaring('Session time out', 'Notification');
                    //set interval:
                    setTimeout(function () {
                        _this.authService.sessionTimeOut();
                    }, 2500);
                }
                else {
                    _this.notificationService.showWaring('Error with create tags: ' + status, 'Notification');
                }
                _this.enable = true;
            });
        }
        else {
            this.notificationService.showWaring('Category field must nor empty.', 'Notification');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('categories'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CategoriesCreateComponent.prototype, "categoriesElement", void 0);
    CategoriesCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./categories.create.component.html */ "./src/app/views/categories/categories.create.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], CategoriesCreateComponent);
    return CategoriesCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/categories/categories.list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/categories/categories.list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <!--/.col-->\r\n        <div class=\"col-lg-12 col-sm-8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-align-justify\"></i> <b>CATEGORIES LIST</b>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\"></ngx-loading>\r\n                    \r\n                    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>STT</th>\r\n                                <th>Name</th>\r\n                                <th>Color</th>\r\n                                <th>Create at</th>\r\n                                <th>Updated at</th>\r\n                                <th>Actions</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody *ngIf=\"categories?.length != 0\">\r\n                            <tr *ngFor=\"let category of categories; let i = index\">\r\n                                <td>{{ i + 1 }}</td>\r\n                                <td>{{ category.name }}</td>\r\n                                <td>\r\n                                    <input type=\"color\" style=\"width: 70px;\" [readonly]=\"true\" [disabled]=\"true\" value=\"{{category.color}}\"/>\r\n                                </td>\r\n                                <td>{{ category.created | date: 'dd/MM/yyyy HH:mm:ss' }}</td>\r\n                                <td>{{ category.updated | date: 'dd/MM/yyyy HH:mm:ss' }}</td>\r\n                                <td>\r\n                                    <button (click)=\"gotoEdit(category.id)\" class=\"btn btn-sm btn-primary btn-square\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Edit</button>\r\n                                    <button (click)=\"deleteCategory(category.id)\" class=\"btn btn-sm btn-secondary btn-square\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> Delete</button>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                        <tbody *ngIf=\"categories?.length == 0\">\r\n                            <tr>\r\n                                <td colspan=\"3\" class=\"no-data-available\">No data!</td>\r\n                            </tr>\r\n                        <tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <button type=\"button\" [routerLink]=\"['/admin/categories/create']\" class=\"btn pull-right btn-success btn-square active\" aria-pressed=\"true\"><i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i> Create category</button>\r\n            <br><br><br>\r\n        </div>\r\n        <!--/.col-->\r\n    </div>\r\n   \r\n</div>"

/***/ }),

/***/ "./src/app/views/categories/categories.list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/categories/categories.list.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesListComponent", function() { return CategoriesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/notification.service */ "./src/app/service/notification.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");










var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var CategoriesListComponent = /** @class */ (function () {
    function CategoriesListComponent(adminService, router, notificationService, authService, http) {
        this.adminService = adminService;
        this.router = router;
        this.notificationService = notificationService;
        this.authService = authService;
        this.http = http;
        this.tags = [];
        this.categories = [];
        this.loading = false;
        this.dtOptions = {};
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].API_URL;
        // We use this trigger because fetching the list of persons can be quite long,
        // thus we ensure the data is fetched before rendering
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    CategoriesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 6
        };
        this.loading = true;
        this.adminService.getAllCategories().subscribe(function (res) {
            _this.categories = res.data;
            // Calling the DT trigger to manually render the table
            _this.dtTrigger.next();
            _this.loading = false;
        }, function (err) {
            var status = String(err);
            if (status === "Error: 401") {
                _this.notificationService.showWaring('Session time out', 'Notification');
                //set interval:
                setTimeout(function () {
                    _this.authService.sessionTimeOut();
                }, 2500);
            }
            else {
                _this.notificationService.showWaring('Error with create tags: ' + status, 'Notification');
            }
            _this.loading = false;
        });
    };
    //delete tags by id:
    CategoriesListComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        var confirmDel = confirm('Are you sure to delete it');
        if (confirmDel) {
            this.adminService.categoryDelete(id).subscribe(function (res) {
                var category = res.data;
                var index = _this.tags.findIndex(function (x) { return x.id === category.id; });
                //remove by index:
                _this.categories.splice(index, 1);
                _this.rerender();
            }, function (err) {
                var status = String(err);
                if (status === "Error: 401") {
                    _this.notificationService.showWaring('Session time out', 'Notification');
                    //set interval:
                    setTimeout(function () {
                        _this.authService.sessionTimeOut();
                    }, 2500);
                }
                else {
                    _this.notificationService.showWaring('Error with create tags: ' + status, 'Notification');
                }
            });
        }
    };
    //when update list
    CategoriesListComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            _this.dtTrigger.next();
        });
    };
    //got to edit, parameter is id of categories object
    CategoriesListComponent.prototype.gotoEdit = function (idCategory) {
        this.router.navigate(['/admin/categories/edit', idCategory]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"])
    ], CategoriesListComponent.prototype, "dtElement", void 0);
    CategoriesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./categories.list.component.html */ "./src/app/views/categories/categories.list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _service_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
    ], CategoriesListComponent);
    return CategoriesListComponent;
}());



/***/ }),

/***/ "./src/app/views/categories/categories.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/categories/categories.module.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _categories_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories.create.component */ "./src/app/views/categories/categories.create.component.ts");
/* harmony import */ var _categories_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories.list.component */ "./src/app/views/categories/categories.list.component.ts");
/* harmony import */ var _categories_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.update.component */ "./src/app/views/categories/categories.update.component.ts");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories-routing.module */ "./src/app/views/categories/categories-routing.module.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");

// Angular






// Components Routing



var CategoriesModule = /** @class */ (function () {
    function CategoriesModule() {
    }
    CategoriesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _categories_routing_module__WEBPACK_IMPORTED_MODULE_7__["CategoriesRoutingModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_8__["NgxLoadingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"]
            ],
            declarations: [
                _categories_create_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesCreateComponent"],
                _categories_list_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesListComponent"],
                _categories_update_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesUpdateComponent"]
            ]
        })
    ], CategoriesModule);
    return CategoriesModule;
}());



/***/ }),

/***/ "./src/app/views/categories/categories.update.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/views/categories/categories.update.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Category Update</strong>\r\n          <small>Form</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Category Name</label>\r\n                <input type=\"text\" [(ngModel)]=\"category.name\" #categories class=\"form-control\" id=\"name\"\r\n                  placeholder=\"Enter your tags name\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"color\">Color</label>\r\n                <input type=\"color\" [(ngModel)]=\"category.color\" class=\"form-control\" id=\"color\"\r\n                  placeholder=\"Enter your tags name\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button type=\"submit\" [disabled]=\"!enable\" (click)=\"updateCategory()\" class=\"btn btn-sm btn-primary\"><i\r\n              class=\"fa fa-dot-circle-o\"></i> Update</button>\r\n          <button [routerLink]=\"['/admin/categories/list']\" class=\"btn btn-sm btn-secondary\"><i class=\"fa fa-list-alt\"></i>\r\n            View categories list</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\"></ngx-loading>\r\n</div>"

/***/ }),

/***/ "./src/app/views/categories/categories.update.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/categories/categories.update.component.ts ***!
  \*****************************************************************/
/*! exports provided: CategoriesUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesUpdateComponent", function() { return CategoriesUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var _model_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/index */ "./src/app/model/index.ts");
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/notification.service */ "./src/app/service/notification.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var CategoriesUpdateComponent = /** @class */ (function () {
    function CategoriesUpdateComponent(adminService, router, notificationService, authService, activeRoute) {
        this.adminService = adminService;
        this.router = router;
        this.notificationService = notificationService;
        this.authService = authService;
        this.activeRoute = activeRoute;
        this.enable = true;
        this.loading = false;
    }
    CategoriesUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.category = new _model_index__WEBPACK_IMPORTED_MODULE_3__["Category"]();
        this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));
        if (this.id) {
            this.loading = true;
            this.adminService.findCategoryById(this.id).subscribe(function (res) {
                _this.category = res.data;
                _this.loading = false;
            }, function (err) {
                var status = String(err);
                if (status === "Error: 401") {
                    _this.notificationService.showWaring('Session time out', 'Notification');
                    //set interval:
                    setTimeout(function () {
                        _this.authService.sessionTimeOut();
                    }, 2500);
                }
                else {
                    _this.router.navigate(['/404']);
                }
                _this.loading = false;
            });
        }
    };
    //update tags
    CategoriesUpdateComponent.prototype.updateCategory = function () {
        var _this = this;
        this.enable = false;
        this.adminService.createOrUpdateCategories(this.category).subscribe(function (res) {
            _this.enable = true;
            _this.notificationService.showSuccess('Category was updated.', 'Notification');
            _this.tag = res.data;
            _this.categoriesElement.nativeElement.focus();
        }, function (err) {
            var status = String(err);
            if (status === "Error: 401") {
                _this.notificationService.showWaring('Session time out', 'Notification');
                //set interval:
                setTimeout(function () {
                    _this.authService.sessionTimeOut();
                }, 2500);
            }
            else {
                _this.notificationService.showWaring('Error with create category: ' + status, 'Notification');
            }
            _this.enable = true;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('categories'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CategoriesUpdateComponent.prototype, "categoriesElement", void 0);
    CategoriesUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./categories.update.component.html */ "./src/app/views/categories/categories.update.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], CategoriesUpdateComponent);
    return CategoriesUpdateComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-categories-categories-module.js.map