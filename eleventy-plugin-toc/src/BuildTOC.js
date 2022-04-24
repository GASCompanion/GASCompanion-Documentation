const cheerio = require('cheerio')

const ParseOptions = require('./ParseOptions')
const NestHeadings = require('./NestHeadings')
const BuildList = require('./BuildList')

const defaults = {
  tags: ['h2', 'h3', 'h4'],
  wrapper: 'nav',
  wrapperClass: 'toc',
  wrapperLabel: undefined,
  ul: false,
  flat: false,

  // added
  wrapperHeader: ``, // render before generating main list in wrapper (only if wrapper not disabled with '' empty string)
  listClass: '',
  itemClass: '',
  depthClass: '', // of function(depth) { return ''; }
  linkTemplate: (id, text, template) => { return ''; }
}

const BuildTOC = (text, opts) => {
  const {tags, wrapper, wrapperClass, wrapperLabel, ul, flat} = ParseOptions(
    opts,
    defaults
  )

  const $ = cheerio.load(text)

  const headings = NestHeadings(tags, $)

  if (headings.length === 0) {
    return undefined
  }

  const wrapperHeader = opts && opts.wrapperHeader || '';

  const label = wrapperLabel ? `aria-label="${wrapperLabel}"` : ''

  return wrapper
    ? `<${wrapper} class="${wrapperClass}" ${label}>
        ${wrapperHeader ? wrapperHeader : ''}
        ${BuildList(headings, ul, flat, opts)}
      </${wrapper}>`
    : BuildList(headings, ul, flat, opts)
}

module.exports = BuildTOC
