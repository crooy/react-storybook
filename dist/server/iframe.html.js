'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (headHtml, publicPath) {
  return '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset="utf-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <script>\n          if (window.parent !== window) {\n            window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__;\n          }\n        </script>\n        <title>React Storybook</title>\n        ' + headHtml + '\n      </head>\n      <body>\n        <div id="root"></div>\n        <script src="' + _path2.default.join(publicPath, 'preview.bundle.js') + '"></script>\n      </body>\n    </html>\n  ';
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }