---
id: example--qr-issuance
title: qR Code Issuance
---

## Introduction

This video demonstrates the qR-triggered issuance flow described on the [Core
Concepts](concepts.md#offer-flow) page.  Note that:
* `java.theosirian.com` is the test-server generating the qR code and issuing
  the credential. The pop-up automatically gets consent from the user about any
  domain referenced from a qR code. This pop-up, which is enabled by default, is
  to prevent spoofing or phishing attacks, should the page serving the qR and
  the contents of the qR be in different domains. Further validation can be
  added as a failsafe.
* The credential offered, containing a proof of control of a doximity.com
  account, is dummy data from a client project. The contents displayed should
  normally come from a processing of the contents of the actual credential, but
  in this demo, they are mocked up graphically by a few manual overrides in the
  folder /lib/app/pages/credentials/widget/document/

![Credible header](/assets/credible-vc-vp.gif)

