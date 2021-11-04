# Process

## Introduction

This file documents tricks and customizations made to the default docusaurus
configuration for future editors and even open-source contributors.

## Code blocks

At the time of the Q3 documentation sprint, docusaurus had not well documented the code block formatting/prettifying, nor provided options for prefixing each line. For that reason, we did a little research and found that putting `json` after the three backticks defining a codeblock enabled JSON-syntax color-coding in the block in the underlying code-block formatting library used by docusaurus.  Contibutor Maria Villosa also tailored the CSS for bash and shell codeblocks to create a system for prefixing each line in the CSS such that the $ prefix would be displayed but not copied when a viewer used the copy button.

### Code block decorators

- `json`: color-codes standard JSON.  recommended for any code blocks containing JSON objects, JWTs, DID Docs, or VCs.
- `bash`: adds `$` prefix to each line in display, but not when cut or copied into user's clipboard. monochrome.
- `sh`: displays shell commands without `$` prefix. monochrome.
- for the docusaurus code-block features, such as adding a title (new in v2.0), see [the docusaurus docs](https://docusaurus.io/docs/markdown-features/code-blocks#code-title)
- for a list of language-specific syntax templates, see [this JS file](https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js) in the underlying [prism](https://github.com/FormidableLabs/prism-react-renderer/) repo. Included at time of press:
  - `{ markup | bash | c | css | javascript | jsx | git | go | graphql | json | makefile | markdown | objectivec | ocaml | python | sql | typescript | wasm | yaml }`

