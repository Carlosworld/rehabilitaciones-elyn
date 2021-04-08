exports.ids = [19];
exports.modules = {

/***/ "2zui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ OurTeamContainer; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/OurTeam/components/TeamMember/TeamMember.jsx
var __jsx = external_react_default.a.createElement;

function TeamMember({
  name,
  designation,
  image,
  about
}) {
  return __jsx("div", {
    className: "hover-team"
  }, __jsx("div", {
    className: "our-team"
  }, __jsx("img", {
    src: image,
    alt: name
  }), __jsx("div", {
    className: "team-content"
  }, __jsx("h3", {
    className: "title"
  }, name), __jsx("span", {
    className: "post"
  }, designation)), __jsx("ul", {
    className: "social"
  }, __jsx("li", null, __jsx("a", {
    href: "#",
    className: "fab fa-facebook"
  })), __jsx("li", null, __jsx("a", {
    href: "#",
    className: "fab fa-twitter"
  })), __jsx("li", null, __jsx("a", {
    href: "#",
    className: "fab fa-google-plus"
  })), __jsx("li", null, __jsx("a", {
    href: "#",
    className: "fab fa-youtube"
  }))), __jsx("div", {
    className: "icon"
  }, __jsx("i", {
    className: "fa fa-plus",
    "aria-hidden": "true"
  }))), __jsx("div", {
    className: "team-description"
  }, __jsx("p", null, about)), __jsx("hr", {
    className: "my-0"
  }));
}
// CONCATENATED MODULE: ./components/OurTeam/OurTeam.jsx
var OurTeam_jsx = external_react_default.a.createElement;


function OurTeam({
  teamMembers = []
}) {
  return OurTeam_jsx("div", {
    className: "row my-4"
  }, OurTeam_jsx("div", {
    className: "col-12"
  }, OurTeam_jsx("h2", {
    className: "noo-sh-title"
  }, "Meet Our Team")), teamMembers.map((memberDetails, index) => OurTeam_jsx("div", {
    className: "col-sm-6 col-lg-3",
    key: index
  }, OurTeam_jsx(TeamMember, memberDetails))));
}
// CONCATENATED MODULE: ./components/OurTeam/OurTeam.container.js
var OurTeam_container_jsx = external_react_default.a.createElement;



function OurTeamContainer() {
  const teamMembers = Object(external_react_redux_["useSelector"])(state => state.teamMembers);
  return OurTeam_container_jsx(OurTeam, {
    teamMembers: teamMembers
  });
}

/***/ })

};;