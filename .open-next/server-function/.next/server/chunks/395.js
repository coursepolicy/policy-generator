exports.id = 395;
exports.ids = [395];
exports.modules = {

/***/ 7224:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6382))

/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 6382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./app/components/Logo.tsx


function Logo() {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "/",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
            className: "ml-[16px] md:ml-[32px]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-xl font-bold leading-[35px] text-white md:text-2xl md:leading-9",
                    children: "CoursePolicy."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-xl font-bold leading-[35px] text-emerald-300 md:text-2xl md:leading-9",
                    children: "AI"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/components/Navigation.tsx


function Navigation() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "mr-[22px] hidden w-[495px] items-center justify-between md:flex",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-right text-sm font-semibold leading-[25px] text-white",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/blog",
                    children: "Findings + Insights"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-right text-sm font-semibold leading-[25px] text-white",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/about",
                    children: "About"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-right text-sm font-semibold leading-[25px] text-white",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/contact",
                    children: "Contact"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/generate",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex items-start justify-start gap-2.5 rounded-[100px] bg-teal-600 px-6 py-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "GenerateAPolicy text-right text-sm font-semibold leading-[25px] text-white",
                        children: "Generate a Policy"
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./app/components/BurgerMenu.tsx


function BurgerMenu({ toggleMenu, isMenuOpen }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: isMenuOpen ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "relative h-[50px] w-[50px] cursor-pointer bg-slate-800 md:hidden",
            onClick: ()=>toggleMenu(),
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: "absolute left-[13px] top-[13px]",
                alt: "Burger menu",
                src: "/burger-menu-open.png",
                width: 24,
                height: 24
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            className: "mb-[10px] mr-[16px] cursor-pointer md:hidden",
            alt: "Burger menu",
            src: "/burger-menu-close.png",
            width: 24,
            height: 24,
            onClick: ()=>toggleMenu()
        })
    });
}

;// CONCATENATED MODULE: ./app/components/NavigationAlt.tsx



function NavigationAlt({ isMenuOpen, toggleMenu }) {
    const navItems = [
        {
            title: "Findings + Insights",
            href: "/"
        },
        {
            title: "About",
            href: "/about"
        },
        {
            title: "Contact",
            href: "/contact"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "absolute top-[50px] w-[100%] bg-indigo-900 md:hidden",
        children: isMenuOpen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                navItems.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: item.href,
                        onClick: ()=>toggleMenu(),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "h-[49px] border-t-[1px] border-slate-700",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "ml-[26px] mt-[15px] text-sm font-bold leading-normal text-white",
                                children: item.title
                            })
                        })
                    }, i)),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/generate",
                    onClick: ()=>toggleMenu(),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-[49px] border-t-[1px] border-slate-700",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "ml-[26px] mt-[11px] flex items-center text-sm font-bold leading-normal text-white",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-sm font-bold leading-normal text-emerald-300",
                                    children: "Generate a Policy"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "ml-[4px]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: "",
                                        alt: "Green right pointed arrow",
                                        src: "/green-right-arrow.png",
                                        width: 17,
                                        height: 24
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/components/Header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





function Header() {
    const [isMenuOpen, setIsMenuOpen] = (0,react_.useState)(false);
    const toggleMenu = ()=>setIsMenuOpen(!isMenuOpen);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "relative flex h-[50px] items-center justify-between bg-blue-950 md:h-[85px]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Logo, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(BurgerMenu, {
                toggleMenu: toggleMenu,
                isMenuOpen: isMenuOpen
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NavigationAlt, {
                toggleMenu: toggleMenu,
                isMenuOpen: isMenuOpen
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {})
        ]
    });
}


/***/ }),

/***/ 1773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(9160);
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(7272);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./app/components/Header.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/cecil/dev/cr/policy-gen/app/components/Header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Header = (__default__);
;// CONCATENATED MODULE: ./app/layout.tsx




const metadata = {
    title: "CourcePolicy.AI",
    description: "AI Policy Generation"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                children
            ]
        })
    });
}


/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;