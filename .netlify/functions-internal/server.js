var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_stream = require("stream"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 41,
        columnNumber: 4
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 82,
        columnNumber: 4
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react5 = require("@remix-run/react");

// app/components/template/Footer.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "mt-6 flex items-center gap-4 text-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: "\xA9 2023 - All rights reserved" }, void 0, !1, {
      fileName: "app/components/template/Footer.tsx",
      lineNumber: 4,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "a",
      {
        href: "https://github.com/fn7x/expenses",
        target: "_blank",
        rel: "noreferrer",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "images/github.png", alt: "GitHub Icon", className: "h-6" }, void 0, !1, {
          fileName: "app/components/template/Footer.tsx",
          lineNumber: 10,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/template/Footer.tsx",
        lineNumber: 5,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/template/Footer.tsx",
    lineNumber: 3,
    columnNumber: 3
  }, this);
}

// app/components/template/Header.tsx
var import_react3 = require("@remix-run/react"), import_react4 = require("react");

// app/components/template/Navigation.tsx
var import_react2 = require("@remix-run/react"), import_ri = require("react-icons/ri"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Navigation({
  mobileNav,
  setMobileNav
}) {
  let userId = (0, import_react2.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: `${!mobileNav && "hidden md:block"} `, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      import_react2.NavLink,
      {
        to: "/",
        className: ({ isActive }) => isActive ? "my-1 flex items-center gap-2 rounded-md bg-neutral-300 p-2 text-lg font-medium" : "my-1 flex items-center gap-2 p-2 text-lg font-medium",
        onClick: () => {
          setMobileNav(!mobileNav);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_ri.RiHome2Fill, {}, void 0, !1, {
            fileName: "app/components/template/Navigation.tsx",
            lineNumber: 32,
            columnNumber: 7
          }, this),
          "Home"
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/template/Navigation.tsx",
        lineNumber: 21,
        columnNumber: 6
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/template/Navigation.tsx",
      lineNumber: 20,
      columnNumber: 5
    }, this),
    userId && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      import_react2.NavLink,
      {
        to: "/dashboard",
        className: ({ isActive }) => isActive ? "my-1 flex items-center gap-2 rounded-md bg-neutral-300 p-2 text-lg font-medium" : "my-1 flex items-center gap-2 p-2 text-lg font-medium",
        onClick: () => {
          setMobileNav(!mobileNav);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_ri.RiBarChart2Fill, {}, void 0, !1, {
            fileName: "app/components/template/Navigation.tsx",
            lineNumber: 49,
            columnNumber: 8
          }, this),
          "Dashboard"
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/template/Navigation.tsx",
        lineNumber: 38,
        columnNumber: 7
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/template/Navigation.tsx",
      lineNumber: 37,
      columnNumber: 6
    }, this),
    !userId && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      import_react2.NavLink,
      {
        to: "/auth?mode=login",
        className: ({ isActive }) => isActive ? "my-1 flex items-center gap-2 rounded-md bg-neutral-300 p-2 text-lg font-medium" : "my-1 flex items-center gap-2 p-2 text-lg font-medium",
        onClick: () => {
          setMobileNav(!mobileNav);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_ri.RiLoginBoxFill, {}, void 0, !1, {
            fileName: "app/components/template/Navigation.tsx",
            lineNumber: 67,
            columnNumber: 8
          }, this),
          "Login"
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/template/Navigation.tsx",
        lineNumber: 56,
        columnNumber: 7
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/template/Navigation.tsx",
      lineNumber: 55,
      columnNumber: 6
    }, this),
    userId && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Form, { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "button",
      {
        className: "my-1 flex items-center gap-2 p-2 text-lg font-medium",
        onClick: () => {
          setMobileNav(!mobileNav);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_ri.RiLogoutBoxFill, {}, void 0, !1, {
            fileName: "app/components/template/Navigation.tsx",
            lineNumber: 81,
            columnNumber: 9
          }, this),
          "Logout"
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/template/Navigation.tsx",
        lineNumber: 75,
        columnNumber: 8
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/template/Navigation.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/components/template/Navigation.tsx",
      lineNumber: 73,
      columnNumber: 6
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/template/Navigation.tsx",
    lineNumber: 19,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/template/Navigation.tsx",
    lineNumber: 18,
    columnNumber: 3
  }, this);
}

// app/components/template/Header.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Header() {
  let [mobileNav, setMobileNav] = (0, import_react4.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "header",
    {
      className: `${mobileNav ? "bg-neutral-200 " : "bg-white"} border-m fixed z-10 w-screen flex-col gap-5 border-neutral-300 p-4 drop-shadow-md md:flex md:h-screen md:w-auto md:border-r md:bg-neutral-200`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Link, { to: "/", className: "select-none text-4xl font-semibold", children: [
          "E",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "bg-gradient-to-r from-black to-amber-600 bg-clip-text text-transparent", children: "xpenses" }, void 0, !1, {
            fileName: "app/components/template/Header.tsx",
            lineNumber: 16,
            columnNumber: 5
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/template/Header.tsx",
          lineNumber: 14,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Navigation, { mobileNav, setMobileNav }, void 0, !1, {
          fileName: "app/components/template/Header.tsx",
          lineNumber: 20,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "button",
          {
            onClick: () => {
              setMobileNav(!mobileNav);
            },
            type: "button",
            className: `${mobileNav && "open"} absolute top-7 right-5 h-5 w-6 cursor-pointer transition-all duration-300 focus:outline-none md:hidden`,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "hamburger-top" }, void 0, !1, {
                fileName: "app/components/template/Header.tsx",
                lineNumber: 30,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "hamburger-middle" }, void 0, !1, {
                fileName: "app/components/template/Header.tsx",
                lineNumber: 31,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "hamburger-bottom" }, void 0, !1, {
                fileName: "app/components/template/Header.tsx",
                lineNumber: 32,
                columnNumber: 5
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/template/Header.tsx",
            lineNumber: 21,
            columnNumber: 4
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/template/Header.tsx",
      lineNumber: 9,
      columnNumber: 3
    },
    this
  );
}

// app/components/util/Error.tsx
var import_ri2 = require("react-icons/ri"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Error2({
  title,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-xl font-bold", children: title }, void 0, !1, {
        fileName: "app/components/util/Error.tsx",
        lineNumber: 14,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_ri2.RiErrorWarningFill, { size: 20 }, void 0, !1, {
        fileName: "app/components/util/Error.tsx",
        lineNumber: 15,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/util/Error.tsx",
      lineNumber: 13,
      columnNumber: 4
    }, this),
    children
  ] }, void 0, !0, {
    fileName: "app/components/util/Error.tsx",
    lineNumber: 12,
    columnNumber: 3
  }, this);
}

// app/data/auth.server.ts
var import_node2 = require("@remix-run/node"), import_bcryptjs = require("bcryptjs");

// app/data/database.server.ts
var import_client = require("@prisma/client"), prisma;
{
  let globalWithPrisma = global;
  globalWithPrisma.prisma || (globalWithPrisma.prisma = new import_client.PrismaClient(), globalWithPrisma.prisma.$connect()), prisma = globalWithPrisma.prisma;
}

// app/data/auth.server.ts
var SESSION_SECRET = process.env.SESSION_SECRET, sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    secure: !1,
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60,
    httpOnly: !0
  }
});
async function createUserSession(userId, redirectPath) {
  let session = await sessionStorage.getSession();
  return session.set("userId", userId), (0, import_node2.redirect)(redirectPath, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session)
    }
  });
}
async function getUserFromSession(request) {
  let userId = (await sessionStorage.getSession(request.headers.get("Cookie"))).get("userId");
  return userId || null;
}
async function destroyUserSession(request) {
  let session = await sessionStorage.getSession(request.headers.get("Cookie"));
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}
async function requireUserSession(request) {
  let userId = await getUserFromSession(request);
  if (!userId)
    throw (0, import_node2.redirect)("/auth?mode=login");
  return userId;
}
async function signup(email, password) {
  if (await prisma.user.findFirst({ where: { email } })) {
    let error = new Error(
      "A user with the provided email address exists already."
    );
    throw error.status = 422, error;
  }
  let passwordHash = await (0, import_bcryptjs.hash)(password, 12), user = await prisma.user.create({
    data: { email, password: passwordHash }
  });
  return createUserSession(user.id, "/expenses");
}
async function login(email, password) {
  let existingUser = await prisma.user.findFirst({ where: { email } });
  if (!existingUser) {
    let error = new Error(
      "Could not log you in, please check the provided credentials."
    );
    throw error.status = 401, error;
  }
  if (!await (0, import_bcryptjs.compare)(password, existingUser.password)) {
    let error = new Error(
      "Could not log you in, please check the provided credentials."
    );
    throw error.status = 401, error;
  }
  return createUserSession(existingUser.id, "/expenses");
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-QHASMGJM.css";

// app/root.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Expenses",
  description: "Manage your expenses with ease.",
  keywords: "Expenses App, CRUD App",
  viewport: "width=device-width,initial-scale=1"
});
function loader({ request }) {
  return getUserFromSession(request);
}
function Document({
  title,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", { children: [
      title && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 41,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("body", { className: "mx-auto flex min-w-[22rem] max-w-6xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Header, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { className: "mt-14 flex w-full flex-col gap-4 p-6 sm:p-10 md:ml-52 md:mt-0 md:p-6 lg:p-10", children: [
        children,
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Footer, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 50,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 46,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 40,
    columnNumber: 3
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 63,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 62,
    columnNumber: 3
  }, this);
}
function CatchBoundary() {
  var _a;
  let caughtResponse = (0, import_react5.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Document, { title: caughtResponse.statusText, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Error2, { title: caughtResponse.statusText, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: ((_a = caughtResponse.data) == null ? void 0 : _a.message) || "Something went wrong. Please try again later." }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 75,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: [
      "Back to",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.Link, { className: "font-semibold  hover:underline", to: "/", children: "safety" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 81,
        columnNumber: 7
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 79,
      columnNumber: 6
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 73,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 72,
    columnNumber: 3
  }, this);
}
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Document, { title: "An error occurred", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Error2, { title: "An error occurred", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Something went wrong. Please try again later." }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 97,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: [
      "Back to",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.Link, { className: "font-semibold hover:underline", to: "/", children: "safety" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 100,
        columnNumber: 7
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 98,
      columnNumber: 6
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 95,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 94,
    columnNumber: 3
  }, this);
}
var links = () => [{ rel: "stylesheet", href: tailwind_default }];

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  CatchBoundary: () => CatchBoundary2,
  default: () => DashboardPage,
  loader: () => loader2,
  meta: () => meta2
});
var import_react9 = require("@remix-run/react");

// app/components/dashboard/ChartBar.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function ChartBar({
  maxValue,
  value,
  label
}) {
  let barFillHeight = "0%";
  return maxValue > 0 && (barFillHeight = Math.round(value / maxValue * 100) + "%"), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex h-20 flex-col justify-end rounded-md bg-neutral-300 sm:h-28 md:h-36", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "div",
      {
        className: "min-w-[1rem] rounded-md bg-black sm:min-w-[2rem]",
        style: { height: barFillHeight }
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/ChartBar.tsx",
        lineNumber: 19,
        columnNumber: 5
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/dashboard/ChartBar.tsx",
      lineNumber: 18,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-0.5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "hidden sm:block", children: label }, void 0, !1, {
        fileName: "app/components/dashboard/ChartBar.tsx",
        lineNumber: 25,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "sm:hidden", children: label.charAt(0) }, void 0, !1, {
        fileName: "app/components/dashboard/ChartBar.tsx",
        lineNumber: 26,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/ChartBar.tsx",
      lineNumber: 24,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/ChartBar.tsx",
    lineNumber: 17,
    columnNumber: 3
  }, this);
}

// app/components/dashboard/Chart.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Chart({ expenses }) {
  let chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 }
  ];
  for (let expense of expenses) {
    let expenseMonth = new Date(expense.date).getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  let dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value), totalMaximum = Math.max(...dataPointValues);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { className: "rounded-md bg-neutral-200 p-4 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ul", { className: "grid grid-cols-12 justify-items-center gap-3 ", children: chartDataPoints.map((dataPoint) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    ChartBar,
    {
      value: dataPoint.value,
      maxValue: totalMaximum,
      label: dataPoint.label
    },
    dataPoint.label,
    !1,
    {
      fileName: "app/components/dashboard/Chart.tsx",
      lineNumber: 32,
      columnNumber: 6
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/dashboard/Chart.tsx",
    lineNumber: 30,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/dashboard/Chart.tsx",
    lineNumber: 29,
    columnNumber: 3
  }, this);
}
var Chart_default = Chart;

// app/components/dashboard/List.tsx
var import_react7 = require("@remix-run/react"), import_ri4 = require("react-icons/ri");

// app/components/dashboard/ListItem.tsx
var import_react6 = require("@remix-run/react"), import_ri3 = require("react-icons/ri"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function ListItem({
  id,
  title,
  amount
}) {
  let fetcher = (0, import_react6.useFetcher)();
  function deleteItemHandler() {
    fetcher.submit(null, { method: "delete", action: `/dashboard/${id}` });
  }
  return fetcher.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: "Deleting..." }, void 0, !1, {
    fileName: "app/components/dashboard/ListItem.tsx",
    lineNumber: 19,
    columnNumber: 10
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "font-bold", children: title }, void 0, !1, {
        fileName: "app/components/dashboard/ListItem.tsx",
        lineNumber: 25,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-sm", children: [
        "\u20AC",
        amount.toFixed(2)
      ] }, void 0, !0, {
        fileName: "app/components/dashboard/ListItem.tsx",
        lineNumber: 26,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/ListItem.tsx",
      lineNumber: 24,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("menu", { className: "flex gap-1 text-neutral-400 md:hidden md:group-hover/item:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        import_react6.Link,
        {
          to: id,
          className: "active:bg-bg-neutral-900 rounded-full p-1 hover:bg-neutral-900 hover:text-white  active:text-white",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_ri3.RiEdit2Fill, { size: 16 }, void 0, !1, {
            fileName: "app/components/dashboard/ListItem.tsx",
            lineNumber: 33,
            columnNumber: 6
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/dashboard/ListItem.tsx",
          lineNumber: 29,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "button",
        {
          onClick: deleteItemHandler,
          className: "rounded-full p-1 hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_ri3.RiCloseFill, { size: 16 }, void 0, !1, {
            fileName: "app/components/dashboard/ListItem.tsx",
            lineNumber: 39,
            columnNumber: 6
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/dashboard/ListItem.tsx",
          lineNumber: 35,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/ListItem.tsx",
      lineNumber: 28,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/ListItem.tsx",
    lineNumber: 23,
    columnNumber: 3
  }, this);
}

// app/components/dashboard/List.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function List({ expenses }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ul", { className: "rounded-md bg-neutral-200 p-2", children: [
    expenses.map((expense) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "li",
      {
        className: "group/item active flex items-center justify-between rounded-md p-2 hover:bg-neutral-100",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          ListItem,
          {
            id: expense.id,
            title: expense.title,
            amount: expense.amount
          },
          void 0,
          !1,
          {
            fileName: "app/components/dashboard/List.tsx",
            lineNumber: 14,
            columnNumber: 6
          },
          this
        )
      },
      expense.id,
      !1,
      {
        fileName: "app/components/dashboard/List.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: "flex max-w-max ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_react7.Link,
      {
        to: "/dashboard/add",
        className: "flex rounded-md p-2 hover:bg-neutral-300",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: "Add" }, void 0, !1, {
            fileName: "app/components/dashboard/List.tsx",
            lineNumber: 26,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_ri4.RiAddFill, { size: 24 }, void 0, !1, {
            fileName: "app/components/dashboard/List.tsx",
            lineNumber: 27,
            columnNumber: 6
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/dashboard/List.tsx",
        lineNumber: 22,
        columnNumber: 5
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/dashboard/List.tsx",
      lineNumber: 21,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/List.tsx",
    lineNumber: 8,
    columnNumber: 3
  }, this);
}

// app/components/dashboard/Statistics.tsx
var import_react8 = require("react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function calculateSummaryStatistics(expenses) {
  if (expenses.length > 0) {
    let amounts = expenses.map((expense) => +expense.amount), maxAmount = Math.max(...amounts), minAmount = Math.min(...amounts), sum = expenses.reduce((prevVal, curVal) => curVal.amount + prevVal, 0), avg = sum / expenses.length;
    return { minAmount, maxAmount, sum, avg };
  } else
    return { minAmount: 0, maxAmount: 0, sum: 0, avg: 0 };
}
function Statistics({ expenses }) {
  let { minAmount, maxAmount, sum, avg } = (0, import_react8.useMemo)(
    () => calculateSummaryStatistics(expenses),
    [expenses]
  ), Statistics2 = [
    {
      id: 1,
      title: "Total",
      value: sum.toFixed(2)
    },
    {
      id: 2,
      title: "Average",
      value: avg.toFixed(2)
    },
    {
      id: 3,
      title: "Min. Amount",
      value: minAmount.toFixed(2)
    },
    {
      id: 4,
      title: "Max. Amount",
      value: maxAmount.toFixed(2)
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ul", { id: "expense-statistics", className: "grid grid-cols-2 gap-4", children: Statistics2.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "li",
    {
      className: "flex flex-col items-center rounded-md bg-neutral-200 p-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "sm:text-lg", children: item.title }, void 0, !1, {
          fileName: "app/components/dashboard/Statistics.tsx",
          lineNumber: 59,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "font-bold sm:text-lg  lg:text-xl", children: [
          "\u20AC",
          item.value
        ] }, void 0, !0, {
          fileName: "app/components/dashboard/Statistics.tsx",
          lineNumber: 60,
          columnNumber: 7
        }, this)
      ]
    },
    item.id,
    !0,
    {
      fileName: "app/components/dashboard/Statistics.tsx",
      lineNumber: 55,
      columnNumber: 6
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/dashboard/Statistics.tsx",
    lineNumber: 53,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/dashboard/Statistics.tsx",
    lineNumber: 52,
    columnNumber: 3
  }, this);
}

// app/data/expenses.server.ts
async function addExpense(title, amount, date, userId) {
  try {
    return await prisma.expense.create({
      data: {
        title,
        amount: +amount,
        date: new Date(date),
        User: { connect: { id: userId } }
      }
    });
  } catch {
    throw new Error("Failed to add expense.");
  }
}
async function getExpenses(userId) {
  if (!userId)
    throw new Error("Failed to get expenses.");
  try {
    return await prisma.expense.findMany({
      where: { userId },
      orderBy: { date: "desc" }
    });
  } catch {
    throw new Error("Failed to get expenses.");
  }
}
async function updateExpense(id, title, amount, date) {
  try {
    await prisma.expense.update({
      where: { id },
      data: {
        title,
        amount: +amount,
        date: new Date(date)
      }
    });
  } catch {
    throw new Error("Failed to update expense.");
  }
}
async function deleteExpense(id) {
  try {
    await prisma.expense.delete({
      where: { id }
    });
  } catch {
    throw new Error("Failed to delete expense.");
  }
}

// app/routes/dashboard.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function DashboardPage() {
  let expenses = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "text-2xl font-bold", children: "Dashboard" }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 14,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Chart_default, { expenses }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 15,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Statistics, { expenses }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 16,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("section", { className: "grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(List, { expenses }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 18,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react9.Outlet, {}, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 19,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 17,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 13,
    columnNumber: 3
  }, this);
}
async function loader2({ request }) {
  let userId = await requireUserSession(request);
  return await getExpenses(userId);
}
function meta2() {
  return {
    title: "Expenses | Dashboard"
  };
}
function CatchBoundary2() {
  var _a;
  let caughtResponse = (0, import_react9.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Error2, { title: caughtResponse.statusText, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: ((_a = caughtResponse.data) == null ? void 0 : _a.message) || "Something went wrong - could not load expenses." }, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 42,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 41,
    columnNumber: 3
  }, this);
}

// app/routes/dashboard/$id.tsx
var id_exports = {};
__export(id_exports, {
  action: () => action,
  default: () => IndividualPage
});
var import_node3 = require("@remix-run/node");

// app/components/dashboard/Form.tsx
var import_react10 = require("@remix-run/react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function ExpenseForm() {
  var _a;
  let today = new Date().toISOString().slice(0, 10), validationErrors = (0, import_react10.useActionData)(), navigation = (0, import_react10.useNavigation)(), params = (0, import_react10.useParams)(), matches = (0, import_react10.useMatches)(), expenseData = ((_a = matches == null ? void 0 : matches.find(
    (match) => (match == null ? void 0 : match.id) === "routes/dashboard"
  )) == null ? void 0 : _a.data).find(
    (expense) => expense.id === params.id
  );
  if (params.id && !expenseData)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex max-h-14 w-full justify-between rounded-md bg-neutral-200 p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: "Invalid expense id." }, void 0, !1, {
        fileName: "app/components/dashboard/Form.tsx",
        lineNumber: 27,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react10.Link, { to: "..", className: "hover:underline", children: "Close" }, void 0, !1, {
        fileName: "app/components/dashboard/Form.tsx",
        lineNumber: 28,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/Form.tsx",
      lineNumber: 26,
      columnNumber: 4
    }, this);
  let defaultValues = expenseData ? {
    title: expenseData.title,
    amount: expenseData.amount,
    date: expenseData.date
  } : {
    title: "",
    amount: "",
    date: ""
  }, isSubmitting = navigation.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
    validationErrors && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("ul", { className: "flex flex-col gap-4 md:flex-row lg:flex-col", children: Object.values(validationErrors).map((error, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "li",
      {
        className: "w-full rounded-md bg-red-400 p-2 text-white",
        children: error
      },
      index,
      !1,
      {
        fileName: "app/components/dashboard/Form.tsx",
        lineNumber: 54,
        columnNumber: 7
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/dashboard/Form.tsx",
      lineNumber: 52,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      import_react10.Form,
      {
        method: expenseData ? "patch" : "post",
        className: "grid max-h-64 grid-cols-2 gap-4 rounded-md bg-neutral-200 p-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "col-span-2 flex rounded-md border-[3px] border-black bg-neutral-300 ring-amber-600 focus-within:ring", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "label",
              {
                htmlFor: "title",
                className: "whitespace-nowrap border-r border-neutral-400 py-2 px-3",
                children: "Title:"
              },
              void 0,
              !1,
              {
                fileName: "app/components/dashboard/Form.tsx",
                lineNumber: 68,
                columnNumber: 6
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "input",
              {
                type: "text",
                id: "title",
                name: "title",
                maxLength: 16,
                required: !0,
                defaultValue: defaultValues.title,
                className: "w-full rounded-r-md bg-neutral-200 p-2 outline-none"
              },
              void 0,
              !1,
              {
                fileName: "app/components/dashboard/Form.tsx",
                lineNumber: 74,
                columnNumber: 6
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/dashboard/Form.tsx",
            lineNumber: 67,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "col-span-2 flex rounded-md border-[3px] border-black bg-neutral-300 ring-amber-600 focus-within:ring", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "label",
              {
                htmlFor: "amount",
                className: 'z-10 whitespace-nowrap border-r border-neutral-400 py-2 px-3 after:absolute after:-right-4 after:content-["\u20AC"]',
                children: "Amount:"
              },
              void 0,
              !1,
              {
                fileName: "app/components/dashboard/Form.tsx",
                lineNumber: 85,
                columnNumber: 6
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "input",
              {
                type: "number",
                id: "amount",
                name: "amount",
                max: 999999,
                min: "0",
                step: "0.01",
                required: !0,
                defaultValue: defaultValues.amount,
                className: "w-full rounded-r-md bg-neutral-200 p-2 pl-4 outline-none"
              },
              void 0,
              !1,
              {
                fileName: "app/components/dashboard/Form.tsx",
                lineNumber: 91,
                columnNumber: 6
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/dashboard/Form.tsx",
            lineNumber: 84,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "col-span-2 flex rounded-md border-[3px] border-black bg-neutral-300 ring-amber-600 focus-within:ring ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "label",
              {
                htmlFor: "date",
                className: "whitespace-nowrap border-r border-neutral-400 py-2 px-3",
                children: "Date:"
              },
              void 0,
              !1,
              {
                fileName: "app/components/dashboard/Form.tsx",
                lineNumber: 104,
                columnNumber: 6
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "input",
              {
                type: "date",
                id: "date",
                name: "date",
                max: today,
                required: !0,
                defaultValue: defaultValues.date ? defaultValues.date.slice(0, 10) : "",
                className: "w-full rounded-r-md bg-neutral-200 p-2 outline-none"
              },
              void 0,
              !1,
              {
                fileName: "app/components/dashboard/Form.tsx",
                lineNumber: 110,
                columnNumber: 6
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/dashboard/Form.tsx",
            lineNumber: 103,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "col-span-2 flex gap-4 sm:col-span-1 sm:col-end-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              import_react10.Link,
              {
                to: "..",
                className: "w-full rounded-md border-2 border-black  p-2 text-center font-bold  ",
                children: "Cancel"
              },
              void 0,
              !1,
              {
                fileName: "app/components/dashboard/Form.tsx",
                lineNumber: 123,
                columnNumber: 6
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "button",
              {
                disabled: isSubmitting,
                className: "w-full rounded-md border-2 border-black bg-neutral-900 p-2 text-center font-bold text-white drop-shadow-md",
                children: isSubmitting ? "Saving..." : "Save"
              },
              void 0,
              !1,
              {
                fileName: "app/components/dashboard/Form.tsx",
                lineNumber: 129,
                columnNumber: 6
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/dashboard/Form.tsx",
            lineNumber: 122,
            columnNumber: 5
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/dashboard/Form.tsx",
        lineNumber: 63,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/Form.tsx",
    lineNumber: 50,
    columnNumber: 3
  }, this);
}

// app/data/validation.server.ts
function isValidTitle(value) {
  return value && value.trim().length > 0 && value.trim().length <= 16;
}
function isValidAmount(value) {
  let amount = parseFloat(value.toString());
  return !isNaN(amount) && amount > 0;
}
function isValidDate(value) {
  return value && new Date(value).getTime() < new Date().getTime();
}
function validateExpenseInput(title, amount, date) {
  let validationErrors = {};
  if (isValidTitle(title) || (validationErrors.title = "Invalid expense title. Must be at most 16 characters long."), isValidAmount(amount) || (validationErrors.amount = "Invalid amount. Must be a number greater than zero."), isValidDate(date) || (validationErrors.date = "Invalid date. Must be a date before today."), Object.keys(validationErrors).length > 0)
    throw validationErrors;
}
function isValidEmail(value) {
  return value && value.includes("@");
}
function isValidPassword(value) {
  return value && value.trim().length >= 7;
}
function validateCredentials(email, password) {
  let validationErrors = {};
  if (isValidEmail(email) || (validationErrors.email = "Invalid email address."), isValidPassword(password) || (validationErrors.password = "Invalid password. Must be at least 7 characters long."), Object.keys(validationErrors).length > 0)
    throw validationErrors;
}

// app/routes/dashboard/$id.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function IndividualPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(ExpenseForm, {}, void 0, !1, {
    fileName: "app/routes/dashboard/$id.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}
async function action({ params, request }) {
  let expenseId = params.id;
  if (request.method === "PATCH") {
    let formData = await request.formData(), title = formData.get("title"), amount = Number(formData.get("amount")), date = formData.get("date");
    try {
      validateExpenseInput(title, amount, date);
    } catch (error) {
      return error;
    }
    return await updateExpense(expenseId, title, amount, date), (0, import_node3.redirect)("/dashboard");
  } else if (request.method === "DELETE")
    return await deleteExpense(expenseId), { deletedId: expenseId };
}

// app/routes/dashboard/add.tsx
var add_exports = {};
__export(add_exports, {
  action: () => action2,
  default: () => AddPage
});
var import_node4 = require("@remix-run/node");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function AddPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ExpenseForm, {}, void 0, !1, {
    fileName: "app/routes/dashboard/add.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
}
async function action2({ request }) {
  let userId = await requireUserSession(request), formData = await request.formData(), title = formData.get("title"), amount = Number(formData.get("amount")), date = formData.get("date");
  try {
    validateExpenseInput(title, amount, date);
  } catch (error) {
    return error;
  }
  return await addExpense(title, amount, date, userId), (0, import_node4.redirect)("/dashboard");
}

// app/routes/logout.ts
var logout_exports = {};
__export(logout_exports, {
  action: () => action3
});
var import_node5 = require("@remix-run/node");
function action3({ request }) {
  if (request.method !== "POST")
    throw (0, import_node5.json)({ message: "Invalid request method" }, { status: 400 });
  return destroyUserSession(request);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexPage,
  headers: () => headers,
  meta: () => meta3
});
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function IndexPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-2xl font-bold", children: "Home" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 4,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: "rounded-md bg-neutral-200 p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "font-semibold", children: "Manage your expenses in one place." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 6,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "m-2 mb-0 rotate-6 scale-90 rounded-md bg-white p-2 ring ring-amber-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { src: "images/dashboard.png", alt: "A demo dashboard" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 8,
        columnNumber: 6
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 7,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "font-semibold", children: "Detailed Analytics." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 10,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 5,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: "rounded-md bg-neutral-200 p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "font-semibold", children: "Create an account." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 13,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "font-semibold", children: "Your credentials are safe." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 14,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 12,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 3,
    columnNumber: 3
  }, this);
}
function meta3() {
  return {
    title: "Expenses | Home"
  };
}
function headers() {
  return {
    "Cache-Control": "max-age=3600"
  };
}

// app/routes/auth.tsx
var auth_exports = {};
__export(auth_exports, {
  action: () => action4,
  default: () => AuthPage,
  meta: () => meta4
});

// app/components/auth/AuthForm.tsx
var import_react11 = require("@remix-run/react"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function AuthForm() {
  let [searchParams] = (0, import_react11.useSearchParams)(), authMode = searchParams.get("mode") || "login", validationErrors = (0, import_react11.useActionData)(), isSubmitting = (0, import_react11.useNavigation)().state !== "idle", toggleBtnCaption = authMode == "login" ? "Go to Sign Up" : "Go back to Log In";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { className: "col-span-3 text-2xl font-bold ", children: authMode == "login" ? "Log In" : "Sign Up" }, void 0, !1, {
      fileName: "app/components/auth/AuthForm.tsx",
      lineNumber: 20,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      import_react11.Form,
      {
        method: "post",
        className: " col-span-3 space-y-4 rounded-md bg-neutral-200 p-4 sm:col-span-2 ",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex rounded-md border-[3px] border-black bg-neutral-300 ring-amber-600 focus-within:ring", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              "label",
              {
                htmlFor: "email",
                className: "border-r border-neutral-400 py-2 px-3",
                children: "Email:"
              },
              void 0,
              !1,
              {
                fileName: "app/components/auth/AuthForm.tsx",
                lineNumber: 28,
                columnNumber: 6
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              "input",
              {
                required: !0,
                type: "email",
                name: "email",
                id: "email",
                placeholder: "",
                className: "w-full rounded-r-md bg-neutral-200 p-2 outline-none"
              },
              void 0,
              !1,
              {
                fileName: "app/components/auth/AuthForm.tsx",
                lineNumber: 34,
                columnNumber: 6
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/auth/AuthForm.tsx",
            lineNumber: 27,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex rounded-md border-[3px] border-black bg-neutral-300 ring-amber-600 focus-within:ring", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              "label",
              {
                htmlFor: "password",
                className: "border-r border-neutral-400 py-2 px-3",
                children: "Password:"
              },
              void 0,
              !1,
              {
                fileName: "app/components/auth/AuthForm.tsx",
                lineNumber: 44,
                columnNumber: 6
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              "input",
              {
                required: !0,
                type: "password",
                name: "password",
                id: "password",
                minLength: 7,
                placeholder: "",
                className: "w-full rounded-r-md bg-neutral-200 p-2 outline-none"
              },
              void 0,
              !1,
              {
                fileName: "app/components/auth/AuthForm.tsx",
                lineNumber: 50,
                columnNumber: 6
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/auth/AuthForm.tsx",
            lineNumber: 43,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "button",
            {
              disabled: isSubmitting,
              type: "submit",
              className: "mb-2 flex w-full items-center justify-center space-x-1 rounded-md  border-2 border-black bg-neutral-900 p-2 font-bold text-white drop-shadow-md",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { children: isSubmitting ? "Authenticating..." : "Next" }, void 0, !1, {
                  fileName: "app/components/auth/AuthForm.tsx",
                  lineNumber: 66,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "w-5 group-hover:stroke-white",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    stroke: "#fff",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }, void 0, !1, {
                        fileName: "app/components/auth/AuthForm.tsx",
                        lineNumber: 77,
                        columnNumber: 8
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("line", { x1: "5", y1: "12", x2: "19", y2: "12" }, void 0, !1, {
                        fileName: "app/components/auth/AuthForm.tsx",
                        lineNumber: 78,
                        columnNumber: 8
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("line", { x1: "13", y1: "18", x2: "19", y2: "12" }, void 0, !1, {
                        fileName: "app/components/auth/AuthForm.tsx",
                        lineNumber: 79,
                        columnNumber: 8
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("line", { x1: "13", y1: "6", x2: "19", y2: "12" }, void 0, !1, {
                        fileName: "app/components/auth/AuthForm.tsx",
                        lineNumber: 80,
                        columnNumber: 8
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/auth/AuthForm.tsx",
                    lineNumber: 67,
                    columnNumber: 7
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/auth/AuthForm.tsx",
              lineNumber: 61,
              columnNumber: 6
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/auth/AuthForm.tsx",
            lineNumber: 60,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex w-full justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            import_react11.Link,
            {
              to: authMode === "login" ? "?mode=signup" : "?mode=login",
              className: "text-center underline underline-offset-2 hover:text-neutral-500",
              children: toggleBtnCaption
            },
            void 0,
            !1,
            {
              fileName: "app/components/auth/AuthForm.tsx",
              lineNumber: 85,
              columnNumber: 6
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/auth/AuthForm.tsx",
            lineNumber: 84,
            columnNumber: 5
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/auth/AuthForm.tsx",
        lineNumber: 23,
        columnNumber: 4
      },
      this
    ),
    validationErrors && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { className: "col-span-3 flex w-full flex-col gap-4 sm:col-span-1 lg:flex-col", children: Object.values(validationErrors).map((error, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      "li",
      {
        className: "w-full rounded-md bg-red-400 p-2 text-white ",
        children: error
      },
      index,
      !1,
      {
        fileName: "app/components/auth/AuthForm.tsx",
        lineNumber: 96,
        columnNumber: 7
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/auth/AuthForm.tsx",
      lineNumber: 94,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/auth/AuthForm.tsx",
    lineNumber: 19,
    columnNumber: 3
  }, this);
}

// app/routes/auth.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function AuthPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("section", { className: "grid grid-cols-3 gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AuthForm, {}, void 0, !1, {
    fileName: "app/routes/auth.tsx",
    lineNumber: 9,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.tsx",
    lineNumber: 8,
    columnNumber: 3
  }, this);
}
async function action4({ request }) {
  let authMode = new URL(request.url).searchParams.get("mode") || "login", formData = await request.formData(), email = formData.get("email"), password = formData.get("password");
  try {
    validateCredentials(email, password);
  } catch (error) {
    return error;
  }
  try {
    return authMode === "login" ? await login(email, password) : await signup(email, password);
  } catch (error) {
    if (error.status === 422)
      return { credentials: error.message };
  }
}
function meta4() {
  return {
    title: "Expenses | Authentification"
  };
}

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  loader: () => loader3
});
var import_node6 = require("@remix-run/node");
function loader3() {
  return (0, import_node6.redirect)("/");
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "29617575", entry: { module: "/build/entry.client-IKQD3AYF.js", imports: ["/build/_shared/chunk-CDPLVGKR.js", "/build/_shared/chunk-VIPVJV6J.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-YQ7YOWS2.js", imports: ["/build/_shared/chunk-AGCODC3N.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-PIBUPWSW.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth": { id: "routes/auth", parentId: "root", path: "auth", index: void 0, caseSensitive: void 0, module: "/build/routes/auth-TRMKXKB4.js", imports: ["/build/_shared/chunk-CE64HNUM.js", "/build/_shared/chunk-ORVPAIGU.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-LWHERYCF.js", imports: ["/build/_shared/chunk-PQTATYW2.js", "/build/_shared/chunk-CE64HNUM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/dashboard/$id": { id: "routes/dashboard/$id", parentId: "routes/dashboard", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/$id-5ZQC3IIB.js", imports: ["/build/_shared/chunk-XYYDJOVA.js", "/build/_shared/chunk-ORVPAIGU.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/add": { id: "routes/dashboard/add", parentId: "routes/dashboard", path: "add", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/add-SDC6IYFA.js", imports: ["/build/_shared/chunk-XYYDJOVA.js", "/build/_shared/chunk-ORVPAIGU.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-MQMJ6NVH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-NVA4EOD7.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-29617575.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !0, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/dashboard/$id": {
    id: "routes/dashboard/$id",
    parentId: "routes/dashboard",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/dashboard/add": {
    id: "routes/dashboard/add",
    parentId: "routes/dashboard",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: add_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/auth": {
    id: "routes/auth",
    parentId: "root",
    path: "auth",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
