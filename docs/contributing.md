---
id: contributing
title: Contributing
---

## Getting Started

We'd love to accept your patches, feature upgrades, and adapters that can make
DIDKit, Credible, and/or ssi compatible with other SSI systems and legacy
systems. To make contributions like these, there are just a few small guidelines
you need to follow.

## Contributing to the spruceid.dev Developer Portal

This file documents tricks and customizations made to the default docusaurus
configuration for future editors and even open-source contributors.

### Code blocks

At the time of the Q3 documentation sprint, docusaurus had not well documented
the code block formatting/prettifying, nor provided options for prefixing each
line. For that reason, we did a little research and found that putting `json`
after the three backticks defining a codeblock enabled JSON-syntax color-coding
in the block in the underlying code-block formatting library used by docusaurus.
Contributor Maria Villosa also tailored the CSS for bash and shell codeblocks to
create a system for prefixing each line in the CSS such that the $ prefix would
be displayed but not copied when a viewer used the copy button.

#### Code block decorators

- `json`: color-codes standard JSON.  recommended for any code blocks containing
  JSON objects, JWTs, DID Docs, or VCs.
- `bash`: adds `$` prefix to each line in display, but not when cut or copied
  into user's clipboard. monochrome.
- `sh`: displays shell commands without `$` prefix. monochrome.
- for the docusaurus code-block features, such as adding a title (new in v2.0),
  see [the docusaurus
  docs](https://docusaurus.io/docs/markdown-features/code-blocks#code-title)
- for a list of language-specific syntax templates, see [this JS
  file](https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js)
  in the underlying
  [prism](https://github.com/FormidableLabs/prism-react-renderer/) repo.
  Included at time of press:
  - `{ markup | bash | c | css | javascript | jsx | git | go | graphql | json |
    makefile | markdown | objectivec | ocaml | python | sql | typescript | wasm
    | yaml }`


## Contributor License Agreement

Contributions to Spruce's OS projects must be accompanied by a Contributor
License Agreement. (Don't worry about signing a CLA just for documentation bugs and
requests, those are not licensed the same way as our software releases).

By signing a "CLA", you (and/or your employer) retain all copyrights to your
contribution; this simply gives us permission to use and redistribute your
contributions as part of the project and, if necessary, update the project's
licensing without having to track down all contributors for explicit consent.

Please note that there are two distinct contributor agreements: a [Corporate
CLA][] and an [Individual CLA][]. If your employment contract gives blanket or
scoped control and ownership of your contributions to your employer (as almost
all do in the modern software industry), the corporate contributor agreement is
recommended. Please check with your employer, counsel, or HR staff if you
have any questions about what you are signing or on whose behalf. Do not sign an
individual CLA unless you are certain it does not contradict a pre-existing
contract with your employer.

You generally only need to submit a CLA to Spruce once, so if you've already
submitted one (even if it was for a different Spruce project), you don't need to
do it again. Within two business days of being received, the submitted github
handle(s) will be added to the allowlist for all our repos.

## Attribution Requirement

If you are not the sole contributor to a contribution (pull request), please
identify all contributors in the pull request comment.

To add a contributor (other than yourself, that's automatic), mark them one per
line as follows:

+@github_username

If you added a contributor by mistake, you can remove them in a comment with:

-@github_username

If you are making a pull request on behalf of someone else but you had no part
in designing the feature, you can remove yourself with the above syntax. This
updates the list of contributors to a given PR that must be checked against the
CLA signees list to be accepted.

## Code Reviews

All submissions, including submissions by full-time Spruce employees, require
review. We use GitHub pull requests for this purpose. Consult [GitHub
Help](https://help.github.com/articles/about-pull-requests/) for more
information on using pull requests. You may tag oustide reviewers additionally,
but review by Spruce is still the condition of acceptance.

## Contributing to documentation 

Purely editorial submissions to the git repositories or contributions to this website do not require a CLA, and are warmly welcome. Note that in the case of contributions to the developer documentation website, there are tips in the [_process.md file](https://github.com/spruceid/spruceid.dev/main/_process.md)

## Code of Conduct

All our OS projects follows Spruce's overall [Code of Conduct][].

[corporate cla]: https://spruceid.dev/assets/spruce-corporate-cla.pdf
[individual cla]: https://spruceid.dev/assets/spruce-individual-cla.pdf
[code of conduct]: https://spruceid.dev/docs/code-of-conduct
