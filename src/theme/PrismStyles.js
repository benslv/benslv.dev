import { css } from "styled-components";

import { hexToRGBA } from "../utils";

const prismColors = {
  text: "#e3eaf2",
  background: "#111b27",
  selection: "#3c526d",
  orange: "#e9ae7e",
  pink: "#f4adf4",
  purple: "#c699e3",
  blue: "#6cb8e6",
  green: "#91d076",
  yellow: "#e6d37a",
  blueGrey: "#8da1b9",
  red: "#cd6660",
  cyan: "#66cccc",
  darkBlue: "#0b121b",
};

export const PrismStyles = css`
  .gatsby-highlight {
    background-color: ${prismColors.background};
    border-radius: 8px;
    margin: 0 calc(-1 * var(--gap-width));
    margin-top: var(--font-size-base);
    margin-bottom: calc(2 * var(--font-size-base));
    overflow: auto;
    position: relative;
    font-family: var(--font-mono);
    font-size: var(--font-size-base);
  }

  /* PrismJS Code Titles
     https://www.gatsbyjs.com/plugins/gatsby-remark-code-titles/
  */
  .gatsby-code-title {
    padding: 1em;
    font-family: var(--font-mono);

    background-color: ${prismColors.background};
    color: var(--color-text);
    font-size: var(--font-size-base);
    z-index: 0;

    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    border-bottom: 1px solid var(--color-text);

    & + .gatsby-highlight {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  /**
 * Coldark Theme for Prism.js
 * Theme variation: Dark
 * Tested with HTML, CSS, JS, JSON, PHP, YAML, Bash script
 * @author Armand Philippot <contact@armandphilippot.com>
 * @homepage https://github.com/ArmandPhilippot/coldark-prism
 * @license MIT
 */
  code[class*="language-"],
  pre[class*="language-"] {
    color: ${prismColors.text};
    background: none;
    padding: 0;
    font-family: var(--font-mono);
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

    scrollbar-width: thin;
    scrollbar-color: ${prismColors.selection} ${prismColors.background};
  }

  pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection {
    background: ${prismColors.selection};
  }

  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection {
    background: ${prismColors.selection};
  }

  /* Code blocks */
  pre[class*="language-"] {
    margin: 0;
    overflow: auto;
    padding: calc(1.25 * var(--font-size-base));
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: ${prismColors.background};
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    /* padding: 0.1em 0.3em;
    border-radius: 0.3em; */
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${prismColors.blueGrey};
  }

  .token.punctuation {
    color: ${prismColors.text};
  }

  .token.delimiter.important,
  .token.selector .parent,
  .token.tag,
  .token.tag .token.punctuation {
    color: ${prismColors.cyan};
  }

  .token.attr-name,
  .token.boolean,
  .token.boolean.important,
  .token.number,
  .token.constant,
  .token.selector .token.attribute {
    color: ${prismColors.yellow};
  }

  .token.class-name,
  .token.key,
  .token.parameter,
  .token.property,
  .token.property-access,
  .token.variable {
    color: ${prismColors.blue};
  }

  .token.attr-value,
  .token.inserted,
  .token.color,
  .token.selector .token.value,
  .token.string,
  .token.string .token.url-link {
    color: ${prismColors.green};
  }

  .token.builtin,
  .token.keyword-array,
  .token.package,
  .token.regex {
    color: ${prismColors.pink};
  }

  .token.function,
  .token.selector .token.class,
  .token.selector .token.id {
    color: ${prismColors.purple};
  }

  .token.atrule .token.rule,
  .token.combinator,
  .token.keyword,
  .token.operator,
  .token.pseudo-class,
  .token.pseudo-element,
  .token.selector,
  .token.unit {
    color: ${prismColors.orange};
  }

  .token.deleted,
  .token.important {
    color: ${prismColors.red};
  }

  .token.keyword-this,
  .token.this {
    color: ${prismColors.blue};
  }

  .token.important,
  .token.keyword-this,
  .token.this,
  .token.bold {
    font-weight: bold;
  }

  .token.delimiter.important {
    font-weight: inherit;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .language-markdown .token.title,
  .language-markdown .token.title .token.punctuation {
    color: ${prismColors.blue};
    font-weight: bold;
  }

  .language-markdown .token.blockquote.punctuation {
    color: ${prismColors.pink};
  }

  .language-markdown .token.code {
    color: ${prismColors.cyan};
  }

  .language-markdown .token.hr.punctuation {
    color: ${prismColors.blue};
  }

  .language-markdown .token.url .token.content {
    color: ${prismColors.green};
  }

  .language-markdown .token.url-link {
    color: ${prismColors.yellow};
  }

  .language-markdown .token.list.punctuation {
    color: ${prismColors.pink};
  }

  .language-markdown .token.table-header {
    color: ${prismColors.text};
  }

  .language-json .token.operator {
    color: ${prismColors.text};
  }

  .language-scss .token.variable {
    color: ${prismColors.cyan};
  }

  /* overrides color-values for the Line Highlight plugin
 * http://prismjs.com/plugins/line-highlight/
 */
  .line-highlight {
    background: ${hexToRGBA(prismColors.selection, 0.37)};
    background: linear-gradient(
      to right,
      ${hexToRGBA(prismColors.selection, 0.37)} 70%,
      ${hexToRGBA(prismColors.selection, 0.33)}
    );
  }

  .line-highlight:before,
  .line-highlight[data-end]:after {
    background-color: ${prismColors.blueGrey};
    color: ${prismColors.background};
    box-shadow: 0 1px ${prismColors.selection};
  }

  pre[id].linkable-line-numbers span.line-numbers-rows > span:hover:before {
    background-color: ${hexToRGBA(prismColors.blueGrey, 0.09)};
  }

  /* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */
  .line-numbers .line-numbers-rows {
    border-right: 1px solid ${prismColors.darkBlue};
    background: ${hexToRGBA(prismColors.darkBlue, 0.48)};
  }

  .line-numbers-rows > span:before {
    color: ${hexToRGBA(prismColors.blueGrey, 0.85)};
  }

  /* overrides color-values for the Match Braces plugin
 * https://prismjs.com/plugins/match-braces/
 */
  .rainbow-braces .token.punctuation.brace-level-1,
  .rainbow-braces .token.punctuation.brace-level-5,
  .rainbow-braces .token.punctuation.brace-level-9 {
    color: ${prismColors.yellow};
  }

  .rainbow-braces .token.punctuation.brace-level-2,
  .rainbow-braces .token.punctuation.brace-level-6,
  .rainbow-braces .token.punctuation.brace-level-10 {
    color: ${prismColors.pink};
  }

  .rainbow-braces .token.punctuation.brace-level-3,
  .rainbow-braces .token.punctuation.brace-level-7,
  .rainbow-braces .token.punctuation.brace-level-11 {
    color: ${prismColors.blue};
  }

  .rainbow-braces .token.punctuation.brace-level-4,
  .rainbow-braces .token.punctuation.brace-level-8,
  .rainbow-braces .token.punctuation.brace-level-12 {
    color: ${prismColors.purple};
  }

  /* overrides color-values for the Diff Highlight plugin
 * https://prismjs.com/plugins/diff-highlight/
 */
  pre.diff-highlight > code .token.deleted:not(.prefix),
  pre > code.diff-highlight .token.deleted:not(.prefix) {
    background-color: ${hexToRGBA(prismColors.red, 0.12)};
  }

  pre.diff-highlight > code .token.inserted:not(.prefix),
  pre > code.diff-highlight .token.inserted:not(.prefix) {
    background-color: ${hexToRGBA(prismColors.green, 0.12)};
  }

  /* overrides color-values for the Command Line plugin
 * https://prismjs.com/plugins/command-line/
 */
  .command-line-prompt {
    border-right: 1px solid ${prismColors.darkBlue};
  }

  .command-line-prompt > span:before {
    color: ${hexToRGBA(prismColors.blueGrey, 0.85)};
  }
`;
