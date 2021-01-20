---
slug: reimagining-the-ssn
title: "Reimagining the Social Security Number"
author: Wayne Change
author_title: Bodega Afficionado and CEO
author_url: "https://github.com/wyc"
author_image_url: "https://avatars3.githubusercontent.com/u/858687?s=460&v=4"
tags: [spruce, ssn, identity]
---

![detective clip art](https://miro.medium.com/max/700/0*VG04k6Z9_bswosHp.png)

### What would it look like to have a more secure social security number?

In today’s digital world, individuals are approximated by combining and cross-referencing as many as possible of the documents and connections that form their “identity.” We are glimpsed through these collections of numbers, letters, visual representations, verbal and non-verbal affirmations that confirm or betray our own claims about ourselves. Some pieces of information are inherent to an individual such as a photograph, while others are assigned such as a driver’s license number, or name on a birth certificate. In America, individuals are often assigned a number of assigned identifiers at birth, with one standing beyond all others as a critical but high-risk identifier: the social security number.

The optional nine-digit social security number (SSN) is at the core of every American’s administrative identity — and it is also a major attack vector for most kinds of financial fraud. It was originally [developed and deployed as a unique identifier](https://www.ssa.gov/policy/docs/ssb/v45n11/v45n11p29.pdf) in the 1930s in order to track an individual’s wages over time. This was a critical activity to assess future government benefits under the [Social Security Act](https://www.ssa.gov/OP_Home/ssact/ssact-toc.htm), as well as supporting other critical functions such as linking federal income tax and payroll accounting. In a pre-digital age, it became important as a federally issued unique identifier and found its way into most major government institutions from there, binding individuals to all kinds of records about them. Eventually, it became a means to enable the employment of an individual, and a requirement to access financial services and government-backed assistance programs.

Today, institutions will commonly request an SSN along with other supplemental forms of identity verification to create stronger guarantees that each individual has been reliably identified. In these cases, where it supplements identity assurance, it is being used as an “[authenticator” in addition to an identifier](https://www.microsoft.com/security/blog/2017/10/23/ssn-for-authentication-is-all-wrong/). But it is as valuable to falsify identification as it is to verify it: it is a valuable target for malicious actors due to the plausibility and control it grants upon presentation when impersonating its proper subject.

Considering the increasing severity and frequency of digital breaches in recent years, it wouldn’t be unreasonable to believe that [nearly every SSN has been compromised](https://www.forbes.com/sites/suzannerowankelleher/2019/08/01/everyones-social-security-number-has-been-compromised-heres-how-to-protect-yourself/#1e15105d29ac). One of the most well-known events of this type was the [Equifax data breach in 2017](https://www.equifaxsecurity2017.com/consumer-notice/), which left nearly 150 million Americans helpless as malicious actors gained, shared, and traded access to their records, including their SSNs. Others include a [2019 breach of Capital One](https://www.capitalone.com/facts2019/) that saw 140,000 compromised SSNs, [over 22 million SSNs compromised from the Office of Personnel Management](https://www.cnet.com/news/over-22-million-social-security-numbers-stolen-in-opm-hacks-agency-says/), and even a data breach of a [US Defense Agency](https://www.reuters.com/article/us-usa-defense-breach/u-s-agency-responsible-for-trumps-secure-communication-suffered-data-breach-letter-idUSKBN20E27A?utm_medium=Social&utm_source=twitter). Once an attacker has access to an SSN and can associate it to the same subject’s other PII such as the corresponding full name, their capabilities for fraud and impersonation increase drastically. Often, all it takes to access an individual’s line of credit in digital systems is a full name and a SSN. This issue is especially pressing today, with interactions [migrating online at breakneck pace](https://news.bloomberglaw.com/banking-law/push-for-digital-id-tech-development-spurred-on-by-pandemic) due to the global pandemic.

One of the larger issues is that a SSN is as persistent as one’s own shadow, due to an original number remaining [embedded](https://www.consumer.ftc.gov/articles/0248-do-you-need-new-social-security-number#:~:text=in your files.-,Applying for a New Number or Replacement Card,number and is using it.) in government systems, ***even in the case of reissuance\***. Additionally, it is etched into the deep inner workings of countless institutions and information businesses, meaning that nothing short of a paradigm shift can spur significant change. Even if we wanted to move to a new system, phasing out the old identifiers and migrating all Americans’ records to a more secure system would take decades. Without abolishing the SSN overnight, how could we offer a more secure way to use it?

### Reimagining the Social Security Number by Separating Concerns

![Incremental workflow improvements to enable SSN+ security](https://miro.medium.com/max/1056/0*IUrYGeaxXRTQjjtM)

*Incremental workflow improvements to enable SSN+ security (dotted steps)*

We believe that there is no way to completely **replace** the SSN and the relationship it has across government agencies and private institutions without incurring massive unjustifiable expenses. Running a national identifier scheme such as the SSN system is staggeringly difficult to begin with, and unpopular to boot, triggering all kinds of defenses from civil society and financial institutions. Furthermore, it’s not even clear that a full “rip-and-replace” approach would build additional security or solve most of the key problems. As Steven Bellovin wrote in [Motherboard](https://www.vice.com/en_us/article/pakwnb/replacing-social-security-numbers-is-harder-than-you-think):

*The problem underlying identity theft is not the existence of (SSNs), but rather, how little authentication is done for a person*.

To reshape this system, we must first accept that any additions to the system must be incremental and come with a rollback strategy, like any other upgrade to critical information systems central to the banking system and federal government. We propose the addition of an opt-in authenticator to separate concerns, gradually shifting the SSN to serve as an identifier only and to double no longer as an authenticator. According to this proposal, if someone were to present another person’s SSN which has additional authentication enabled, it would be useless in granting access to resources and services, lowering the fraud potential, and thus the “street value,” of exfiltrated SSNs considerably.

The process would start with an individual voluntarily enrolling to receive an SSN+ package (as we’re calling it). This would require first passing the appropriate levels of identity proofing, not dissimilar from those necessary in the existing process of [SSN card replacement](https://blog.ssa.gov/so-youve-lost-your-social-security-card) or enrollments in other comparable identity documentation programs. De-enrollment would mirror this workflow with respect to identity proofing. A lost SSN+ package is handled in much the same way that a lost SSN is handled today.

Once equipped with an SSN+ package, a user can approach the institutions currently using their SSN as a knowledge-based authenticator and register their account’s support for SSN+ improved authentication. This re-enrollment involves little more than being presented with an additional challenge that only someone with the corresponding SSN+ package could correctly answer. Each new authentication challenge thereafter would similarly require a new SSN+ challenge.

For the institutions that wish to support SSN+ improved authentication to upgrade their security for their end-users, it is straightforward to modify their existing systems. They would add a flag to the user’s account indicating that SSN+ support has been enabled, as well as collecting a new “shared seed value” generated by the user’s SSN+ package to check against future challenges.

The institution would then make minor adjustments to their existing workflows where the user is currently asked for their SSN as part of authentication. Specifically, after retrieving the user’s account, there is a new automated check SSN+ enablement. If SSN+ is not enabled, then the workflow proceeds just as before. However, if it is enabled, then in order to continue, the user must present a time-based verification code that can only be produced by their registered SSN+ package.

This approach has parallels in user experience to the time-based one-time password (TOTP) which enjoys increasingly wide adoption, and can be incorporated across a number of communication channels including web forms, telephone, and SMS. Due to its opt-in nature, this simply grants choice to users and systems that value security, and does not force any other workflows to be affected.

### The Privacy Possibility Frontier

![Proposed Architecture Diagram](https://miro.medium.com/max/2010/0*X49O98uBkqg5-66D)

*One possible privacy-preserving architecture for SSN+*

With the right choice of architecture for the SSN+ package, we can generate a virtually unlimited number of new identifiers that serve as part of a privacy-preserving shell around the original SSN. We can derive so-called “linked identifiers” that:

- are meaningless by themselves but globally unique
- do not leak sensitive data
- cannot be used as an authenticator alone
- are shareable across systems in a permissioned way
- support interoperable standards.

These disposable identifiers can be used directly in new systems that are built to address existing IT security and privacy issues, such as those designed for smart cities and next-generation business entity systems. By using interoperable standards such as W3C Decentralized Identifiers, this approach to user-controlled identifiers can be deployed in ways agnostic to the host country, system, or jurisdiction — and compatible with their infrastructural investments and architectures.

In one possible implementation, the user could generate their own “private keys” that not even the government knows about, creating an identity entirely under that individual’s ultimate control. This increase in the user’s control also reduces the government’s liability in the case of another breach, in that the exfiltrated data is useless without each user’s private keys. After the user is appropriately authenticated and authorized to receive an SSN+ package, the government or an authorized vendor would then securely send an SSN+ package to the user, which contains verifiable credentials issued by the government linking the user’s SSN to their private key through one-time-use identifiers. This package issuance is enabled through existing [federal PKI](https://fpki.idmanagement.gov/). The user could then generate ad-hoc identifiers for use in new situations or single interactions that cannot be linked back to their other ones. For each identifier, the user may demonstrate varying degrees of information attested by the government and without over-revealing information, such as:

- This identifier is backed by a legitimate SSN, but I won’t tell you which one
- These are the last 4 digits of the linked SSN, but I won’t tell you the whole thing
- This identifier is linked to a specific SSN, and it is the following…

In the fully deployed version of this particular approach, even if an attacker were to completely breach and wrest control of federal government databases, they would be left with a stack of identifiers of little value because they cannot be correlated to individuals or converted to SSNs. The government could then freeze digital services so that no further damage could be committed, as opposed to “letting the cat out of the bag,” such as when today’s attackers score a “honeypot” of useful personally identifiable information (PII) that can be resold and shared. In the case of a breach, a system based on SSN+ could be patched while in stasis and then rolled back to a trusted state with minimal disruption of services, and little erosion of security guarantees.

### Alternatives to Increasing Control of Existing Systems

We believe the system described above can incrementally deescalate the need for widespread national ID regimes through open standards-based approaches. We may even avoid a national ID system altogether in favor of alternative identity schemes where identities consist solely of publicly and privately issued credentials held and controlled by the user. Historically, reliance on national ID systems has enabled governments to discriminate against and deny the rights of individuals to [purchase property, open a bank account, or receive government benefits](https://www.eff.org/issues/national-ids).

They also create massive liabilities for governments through data breaches. If there are other ways to achieve the core benefits of national ID systems, including fraud prevention and credit creation, then we support their thorough exploration. At the time of press, there are few such contenders on the horizon, and none currently feasible.

We think alternate forms of authentication and identification that do not rely on centralized national ID systems are a promising and practical way forward. In their gradual adoption, we can incrementally reduce reliance on centralized systems through system architectures that do the same job and put the user in charge without growing the purview of the structures in place, and without significantly increasing costs, liabilities, dependencies, or complexity for governments.

### Contact us

*If you would like to discuss how we would deploy the architecture described above for a specific use case, please take 30 seconds to* [*leave us a message*](https://www.spruceid.com/contact)*, and we will respond within 24 hours.* 

Or just Follow us on [*Twitter*](https://twitter.com/sprucesystems) & [*LinkedIn*](https://www.linkedin.com/company/sprucesystemsinc).