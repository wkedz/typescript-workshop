/// <reference path="./types/AuthTypes.d.ts" />

import auth = require("AuthTypes");

let jon: auth.User;
let alice: auth.User;
let derp: auth.User;

jon = {
    email: "jon@snow.snow",
    roles: ["admin"]
};


alice = {
    email: "alice@snow.com",
    roles: ["super_admin"],
    source: "facebook"
};

derp = {
    email: 123,
    roles: "admin"
}