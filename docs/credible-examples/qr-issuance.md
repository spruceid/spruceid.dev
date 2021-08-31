---
id: qr-issuance
title: QR Code Issuance
---

## Introduction

This video demonstrates the QR-triggered issuance flow described on the [Core
Concepts](credible/concepts.md#offer-flow) page.  Note that:
* `java.theosirian.com` is the test-server generating the QR code issuing
  the credential. The pop-up, which is enabled by default, serves to prevent 
  spoofing or phishing attacks, should the page serving the qR and
  the contents of the QR be in different domains. The consent pop-up can be
  skipped if the requesting domain matches the domain referenced from a QR 
  code. Further validation can also be added as a failsafe or alternative.
* The credential offered, containing a proof of control of a doximity.com
  account, is dummy data from a client project. The contents displayed should
  normally come from a processing of the contents of the actual credential, but
  in this demo, they are mocked up graphically by a few manual overrides in the
  folder /lib/app/pages/credentials/widget/document/ . For more details, see the [VC Display example](credible-examples/vc-display)

![credible-vc-vp-half](https://user-images.githubusercontent.com/95347/113591505-f422ff00-9601-11eb-9e16-4d0c45ab8ef9.gif)

