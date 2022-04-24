// Replace list copied from https://css-tricks.com/snippets/javascript/htmlentities-for-javascript/
const _escText = text => {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

const _buildLink = ({id, text, children}, ul, flat, opts, depth = 0) => {
  let nestedList = ''

  const itemClass = opts && opts.itemClass || '';
  const format = opts && opts.format || function(s) { return s };
  const linkTemplate = opts && opts.linkTemplate || function(id, text, depth) {
      return `<a href="#${id}">${text}</a>`
  };


  if (children.length > 0 && flat) {
    nestedList = children.map(c => _buildLink(c, ul, flat, opts, depth))
  } else if (children.length > 0) {
    nestedList = BuildList(children, ul, flat, opts, ++depth)
  }

  text = _escText(format(text));

  if (id && text && flat) {
    return `<li class="${itemClass}">${linkTemplate(id, text, depth)}</li>${(
      nestedList || []
    ).join('')}`
  } else if (id && text) {
    return `<li class="${itemClass}">${linkTemplate(id, text, depth)}</li>${nestedList}`
  } else {
    return nestedList
  }
}

const BuildList = (listItems, ul, flat, opts, depth = 0) => {
  const listClass = opts && opts.listClass || '';
  let depthClass = opts && opts.depthClass || '';

  if (typeof depthClass == "function") {
    depthClass = depthClass(depth);
  }
  else {
    depthClass = depthClass ? `${depthClass}${depth}` : ``;
  }
  

  const listType = ul ? 'ul' : 'ol'
  const list = listItems
    .sort((a, b) => a.order - b.order)
    .map(li => _buildLink(li, ul, flat, opts, depth))

  return list.length > 0 ? `<${listType} class="${listClass}${depthClass ? ` ${depthClass}` : ``}">${list.join('')}</${listType}>` : ''
}

module.exports = BuildList
