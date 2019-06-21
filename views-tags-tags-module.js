(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-tags-tags-module"],{

/***/ "./src/app/views/tags/tags-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/tags/tags-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TagsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsRoutingModule", function() { return TagsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tags_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags.create.component */ "./src/app/views/tags/tags.create.component.ts");
/* harmony import */ var _tags_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tags.list.component */ "./src/app/views/tags/tags.list.component.ts");
/* harmony import */ var _tags_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tags.update.component */ "./src/app/views/tags/tags.update.component.ts");






var routes = [
    {
        path: '',
        data: {
            title: 'Tags'
        },
        children: [
            {
                path: '',
                redirectTo: 'create'
            },
            {
                path: 'create',
                component: _tags_create_component__WEBPACK_IMPORTED_MODULE_3__["TagsCreateComponent"],
                data: {
                    title: 'Create'
                }
            },
            {
                path: 'list',
                component: _tags_list_component__WEBPACK_IMPORTED_MODULE_4__["TagsListComponent"],
                data: {
                    title: 'List'
                }
            },
            {
                path: 'edit/:id',
                component: _tags_update_component__WEBPACK_IMPORTED_MODULE_5__["TagsUpdateComponent"],
                data: {
                    title: 'Edit'
                }
            }
        ]
    }
];
var TagsRoutingModule = /** @class */ (function () {
    function TagsRoutingModule() {
    }
    TagsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TagsRoutingModule);
    return TagsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/tags/tags.create.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/tags/tags.create.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Tags Create</strong>\r\n          <small>Form</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Tags Name</label>\r\n                <input type=\"text\" [(ngModel)]=\"tag.name\" #tags class=\"form-control\" id=\"name\"\r\n                  placeholder=\"Enter your tags name\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"color\">Color</label>\r\n                <input type=\"color\" [(ngModel)]=\"tag.color\" class=\"form-control\" id=\"color\"\r\n                  placeholder=\"Enter your tags name\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button type=\"submit\" [disabled]=\"!enable\" (click)=\"createTags()\"\r\n            class=\"btn btn-sm btn-primary active btn-square\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\r\n          <button [routerLink]=\"['/admin/tags/list']\" class=\"btn btn-sm btn-secondary active btn-square\"><i\r\n              class=\"fa fa-list-alt\"></i> View tags list</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/tags/tags.create.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/tags/tags.create.component.ts ***!
  \*****************************************************/
/*! exports provided: TagsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsCreateComponent", function() { return TagsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var _model_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/index */ "./src/app/model/index.ts");
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/notification.service */ "./src/app/service/notification.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");






var TagsCreateComponent = /** @class */ (function () {
    function TagsCreateComponent(adminService, notificationService, authService) {
        this.adminService = adminService;
        this.notificationService = notificationService;
        this.authService = authService;
        this.enable = true;
    }
    TagsCreateComponent.prototype.ngOnInit = function () {
        this.tag = new _model_index__WEBPACK_IMPORTED_MODULE_3__["Tags"]();
        this.tag.color = '#51b54a';
    };
    TagsCreateComponent.prototype.createTags = function () {
        var _this = this;
        var name = this.tagsElement.nativeElement.value;
        if (name) {
            this.enable = false;
            this.adminService.createOrUpdateTags(this.tag).subscribe(function (res) {
                _this.enable = true;
                _this.notificationService.showSuccess('Tags was created.', 'Notification');
                _this.tagsElement.nativeElement.focus();
                _this.tag.name = '';
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
            this.notificationService.showWaring('Tags field must nor empty.', 'Notification');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tags'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TagsCreateComponent.prototype, "tagsElement", void 0);
    TagsCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./tags.create.component.html */ "./src/app/views/tags/tags.create.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], TagsCreateComponent);
    return TagsCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/tags/tags.list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/views/tags/tags.list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <!--/.col-->\r\n        <div class=\"col-lg-12 col-sm-8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-align-justify\"></i> <b>TAGS LIST</b>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\"></ngx-loading>\r\n                    \r\n                    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>STT</th>\r\n                                <th>Name</th>\r\n                                <th>Color</th>\r\n                                <th>Create at</th>\r\n                                <th>Updated at</th>\r\n                                <th>Actions</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody *ngIf=\"tags?.length != 0\">\r\n                            <tr *ngFor=\"let tag of tags; let i = index\">\r\n                                <td>{{ i + 1 }}</td>\r\n                                <td>{{ tag.name }}</td>\r\n                                <td>\r\n                                    <input type=\"color\" style=\"width: 70px;\" [readonly]=\"true\" [disabled]=\"true\" value=\"{{tag.color}}\"/>\r\n                                </td>\r\n                                <td>{{ tag.created | date: 'dd/MM/yyyy HH:mm:ss' }}</td>\r\n                                <td>{{ tag.updated | date: 'dd/MM/yyyy HH:mm:ss' }}</td>\r\n                                <td>\r\n                                    <button (click)=\"gotoEdit(tag.id)\" class=\"btn btn-sm btn-primary btn-square\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Edit</button>\r\n                                    <button (click)=\"deleteTags(tag.id)\" class=\"btn btn-sm btn-secondary btn-square\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> Delete</button>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                        <tbody *ngIf=\"tags?.length == 0\">\r\n                            <tr>\r\n                                <td colspan=\"3\" class=\"no-data-available\">No data!</td>\r\n                            </tr>\r\n                        <tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <button type=\"button\" [routerLink]=\"['/admin/tags/create']\" class=\"btn pull-right btn-success btn-square active\" aria-pressed=\"true\"><i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i> Create tags</button>\r\n            <br><br><br>\r\n        </div>\r\n        <!--/.col-->\r\n    </div>\r\n   \r\n</div>"

/***/ }),

/***/ "./src/app/views/tags/tags.list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/tags/tags.list.component.ts ***!
  \***************************************************/
/*! exports provided: TagsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsListComponent", function() { return TagsListComponent; });
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
var TagsListComponent = /** @class */ (function () {
    function TagsListComponent(adminService, router, notificationService, authService, http) {
        this.adminService = adminService;
        this.router = router;
        this.notificationService = notificationService;
        this.authService = authService;
        this.http = http;
        this.tags = [];
        this.loading = false;
        this.dtOptions = {};
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].API_URL;
        // We use this trigger because fetching the list of persons can be quite long,
        // thus we ensure the data is fetched before rendering
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    TagsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 6
        };
        this.loading = true;
        this.adminService.getAllTags().subscribe(function (res) {
            _this.tags = res.data;
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
    TagsListComponent.prototype.deleteTags = function (id) {
        var _this = this;
        var confirmDel = confirm('Are you sure to delete it');
        if (confirmDel) {
            this.adminService.tagsDelete(id).subscribe(function (res) {
                var tag = res.data;
                var index = _this.tags.findIndex(function (x) { return x.id === tag.id; });
                //remove by index:
                _this.tags.splice(index, 1);
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
    TagsListComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            _this.dtTrigger.next();
        });
    };
    //got to edit, parameter is id of tags object
    TagsListComponent.prototype.gotoEdit = function (idTags) {
        this.router.navigate(['/admin/tags/edit', idTags]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"])
    ], TagsListComponent.prototype, "dtElement", void 0);
    TagsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./tags.list.component.html */ "./src/app/views/tags/tags.list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _service_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
    ], TagsListComponent);
    return TagsListComponent;
}());



/***/ }),

/***/ "./src/app/views/tags/tags.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/tags/tags.module.ts ***!
  \*******************************************/
/*! exports provided: TagsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsModule", function() { return TagsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tags_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tags.create.component */ "./src/app/views/tags/tags.create.component.ts");
/* harmony import */ var _tags_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tags.list.component */ "./src/app/views/tags/tags.list.component.ts");
/* harmony import */ var _tags_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tags.update.component */ "./src/app/views/tags/tags.update.component.ts");
/* harmony import */ var _tags_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tags-routing.module */ "./src/app/views/tags/tags-routing.module.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");

// Angular






// Components Routing



var TagsModule = /** @class */ (function () {
    function TagsModule() {
    }
    TagsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _tags_routing_module__WEBPACK_IMPORTED_MODULE_7__["TagsRoutingModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_8__["NgxLoadingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"]
            ],
            declarations: [
                _tags_create_component__WEBPACK_IMPORTED_MODULE_4__["TagsCreateComponent"],
                _tags_list_component__WEBPACK_IMPORTED_MODULE_5__["TagsListComponent"],
                _tags_update_component__WEBPACK_IMPORTED_MODULE_6__["TagsUpdateComponent"]
            ]
        })
    ], TagsModule);
    return TagsModule;
}());



/***/ }),

/***/ "./src/app/views/tags/tags.update.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/tags/tags.update.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Tags Update</strong>\r\n          <small>Form</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Tags Name</label>\r\n                <input type=\"text\" [(ngModel)]=\"tag.name\" #tags class=\"form-control\" id=\"name\"\r\n                  placeholder=\"Enter your tags name\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label for=\"name\">Color</label>\r\n                  <input type=\"color\" [(ngModel)]=\"tag.color\" class=\"form-control\" id=\"color\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button type=\"submit\" [disabled]=\"!enable\" (click)=\"updateTags()\" class=\"btn btn-sm btn-primary\"><i\r\n              class=\"fa fa-dot-circle-o\"></i> Update</button>\r\n          <button [routerLink]=\"['/admin/tags/list']\" class=\"btn btn-sm btn-secondary\"><i class=\"fa fa-list-alt\"></i>\r\n            View tags list</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\"></ngx-loading>\r\n</div>"

/***/ }),

/***/ "./src/app/views/tags/tags.update.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/tags/tags.update.component.ts ***!
  \*****************************************************/
/*! exports provided: TagsUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsUpdateComponent", function() { return TagsUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var _model_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/index */ "./src/app/model/index.ts");
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/notification.service */ "./src/app/service/notification.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var TagsUpdateComponent = /** @class */ (function () {
    function TagsUpdateComponent(adminService, router, notificationService, authService, activeRoute) {
        this.adminService = adminService;
        this.router = router;
        this.notificationService = notificationService;
        this.authService = authService;
        this.activeRoute = activeRoute;
        this.enable = true;
        this.loading = false;
    }
    TagsUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tag = new _model_index__WEBPACK_IMPORTED_MODULE_3__["Tags"]();
        this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));
        if (this.id) {
            this.loading = true;
            this.adminService.findTagById(this.id).subscribe(function (res) {
                _this.tag = res.data;
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
    TagsUpdateComponent.prototype.updateTags = function () {
        var _this = this;
        this.enable = false;
        this.adminService.createOrUpdateTags(this.tag).subscribe(function (res) {
            _this.enable = true;
            _this.notificationService.showSuccess('Tags was updated.', 'Notification');
            _this.tag = res.data;
            _this.tagsElement.nativeElement.focus();
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
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tags'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TagsUpdateComponent.prototype, "tagsElement", void 0);
    TagsUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./tags.update.component.html */ "./src/app/views/tags/tags.update.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], TagsUpdateComponent);
    return TagsUpdateComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-tags-tags-module.js.map