import { TEXT } from './const';

function createElement(type, props, ...children) {
  if (props) {
    delete props.__self;
    delete props.__source;
  }
  let defaultProps = {};
  if (type && type.defaultProps) {
    defaultProps = { ...type.defaultProps };
  }
  return {
    type,
    props: {
      ...defaultProps,
      ...props,
      children: children.map((child) =>
        typeof child === 'object' ? child : createTextNode(child)
      ),
    },
  };
}

/**
 * 创建文本节点
 */

function createTextNode(text) {
  return {
    type: TEXT,
    props: {
      children: [],
      nodeValue: text,
    },
  };
}

export default {
  createElement,
};
