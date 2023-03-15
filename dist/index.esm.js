import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".commonButton {\r\n    padding: 8px 12px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    font-size: 16px;\r\n    background-color: #029cca;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.commonButton:hover {\r\n    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;\r\n}\r\n";
styleInject(css_248z);

const Button = (props) => {
    const { children, backgroundColor, color, style, onClick, className, type } = props;
    let _style = style || {};
    let _className = 'commonButton';
    /**Override defaults */
    if (color)
        _style.color = color;
    if (className)
        _className = className;
    if (backgroundColor)
        _style.backgroundColor = backgroundColor;
    return (React.createElement("button", Object.assign({ className: _className, style: _style }, props, { onClick: onClick, type: type }), children));
};

export { Button };
//# sourceMappingURL=index.esm.js.map
