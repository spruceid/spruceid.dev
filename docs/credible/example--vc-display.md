---
id: example--vc-display
title: VC Display
---

## Introduction

Credible is an SDK that we have optimized for white-labelling, i.e., bundling
into apps that have their own design goals and non-Verifiable Credential
capabilities. One example of how we have optimized the design of Credible for
modularity and adaptation to various contexts is that the display of VCs is
highly adaptable-- and the first thing you would need to adapt in most
use-cases, before getting into finer points of user experience.

The component that renders the credential is implemented by the `DocumentWidget`
class located at
[`lib/app/pages/credentials/widget/document.dart`](https://github.com/spruceid/credible/blob/main/lib/app/pages/credentials/widget/document.dart#L9)
and the model rendered by the component is implemented by the
[`DocumentWidgetModel`](https://github.com/spruceid/credible/blob/main/lib/app/pages/credentials/widget/document.dart#L13)
class located in the same file. Changing and adding traits to these two classes
will change how Credible renders VCs to its user after [building credible from
source](https://spruceid.dev/docs/credible/install#building-didkit-for-different-targets).

## Extend the "Model" to allow additional fields

By default, the `DocumentWidgetModel` provided by Credible displays only the [unresolved, un-aliased] contents of the top-level `issuer` property of each VC and its "status" (currently defined by whether the expiration date is in the future or the past; more involved status mechanisms are forthcoming). 

To add display of other kinds of information stored in the VC, just add it to the `DocumentWidgetModel` class and set the values from the `CredentialModel` inside the factory method `factory DocumentWidgetModel.fromCredentialModel(CredentialModel model)`.  

Here is an example, written in Dart:

```dart
class DocumentWidgetModel {
  // Current class fields.  
  
  // Add your custom fields that will be extracted from the credential model 
  // if present (null otherwise)
  final String? myCustomField;

  // Add your new fields to the constructor.
  const DocumentWidgetModel(..., this.myCustomField);

  factory DocumentWidgetModel.fromCredentialModel(CredentialModel model) {
    // Extraction logic for other fields.
  
    // Extract your field contents from withing the `CredentialModel` type
    // The `data` field contains the raw data of the Verifiable Credential
    // so any value can be extracted.
    final myCustomField = model.data["myCustomField"];

    return DocumentWidgetModel(..., myCustomField);
  }
}
```

### Rendering the newly-added fields in the final end-user interface

The `DocumentWidget` component receives an instance of `DocumentWidgetModel` and renders its content as a tree of widgets. Any fields you've pulled out of the data object into a named property are available in each individual document object.

To render these new properties, simply update the widget's `build` method by adding your own custom components. Note that when a property is not found in the `.data` object, the value for the property will be set to NULL; for this reason, it is best to check for a non-null value at display runtime and build in some logic accordingly.

Here is an example in Dart:

```dart
@override
Widget build(BuildContext context) => Container(
    // ...
    child: Padding(
      // ...
      child: Column(
        // ...
        children: [
          // Other fields widget
          // ...
          if (model.myCustomField != null) {
            const SizedBox(height: 24.0), // Add a spacing between fields.
            DocumentItemWidget(
              label: 'My Custom Field:',
              value: model.myCustomField,
            )
            ;
          }
          else {
            const SizedBox(height: 48.0); // Add a spacing between fields.
          }
        ],
      ),
    ),
  );
```

