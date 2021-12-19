import { css } from "~/stitches.config";

export const prismTheme = css({
  ".token.comment, .token.prolog, .token.doctype, .token.cdata": {
    color: "$slate9",
    fontStyle: "italic",
  },
  ".token.punctuation": { color: "$slate11" },
  ".token.delimiter.important, .token.selector .parent, .token.tag, .token.tag .token.punctuation":
    {
      color: "$slate11",
    },
  ".token.attr-name, .token.boolean, .token.boolean.important, .token.number, .token.constant, .token.selector .token.attribute":
    {
      color: "$cyan9",
    },
  ".token.class-name, .token.key, .token.parameter, .token.property, .token.property-access, .token.variable":
    {
      color: "$blue10",
    },
  ".token.attr-value, .token.inserted, .token.color, .token.selector .token.value, .token.string, .token.string .token.url-link":
    {
      color: "$grass9",
    },
  ".token.builtin, .token.keyword-array, .token.package, .token.regex, .token.maybe-class-name": {
    color: "$pink9",
  },
  ".token.function, .token.selector .token.class, .token.selector .token.id": {
    color: "$pink9",
  },
  ".token.atrule .token.rule, .token.combinator, .token.keyword, .token.operator, .token.pseudo-class, .token.pseudo-element, .token.selector, .token.unit":
    {
      color: "$orange9",
    },
  ".token.deleted, .token.important": { color: "$red9" },
  ".token.keyword-this, .token.this": { color: "$blue9" },
  ".token.important, .token.keyword-this, .token.this, .token.bold": {
    fontWeight: "bold",
  },
  ".token.delimiter.important": { fontWeight: "inherit" },
  ".token.italic": { fontStyle: "italic" },
  ".token.entity": { cursor: "help" },
  ".language-markdown .token.title, .language-markdown .token.title .token.punctuation": {
    color: "$blue9",
    fontWeight: "bold",
  },
  ".language-markdown .token.blockquote.punctuation": { color: "$pink9" },
  ".language-markdown .token.code": { color: "$cyan9" },
  ".language-markdown .token.hr.punctuation": { color: "$blue9" },
  ".language-markdown .token.url .token.content": { color: "$green9" },
  ".language-markdown .token.url-link": { color: "$yellow9" },
  ".language-markdown .token.list.punctuation": { color: "$pink9" },
  ".language-markdown .token.table-header": { color: "$slate11" },
  ".language-json .token.operator": { color: "$slate11" },
  ".language-scss .token.variable": { color: "$cyan9" },
});
