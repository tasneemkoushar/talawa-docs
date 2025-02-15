


# build method







- @[override](https:api.flutter.dev/flutter/dart-core/override-constant.html)

[Widget](https:api.flutter.dev/flutter/widgets/Widget-class.html) build
([BuildContext](https:api.flutter.dev/flutter/widgets/BuildContext-class.html) context)

_\<span class="feature"\>override\</span\>_



\<p\>Describes the part of the user interface represented by this widget.\</p\>
\<p\>The framework calls this method when this widget is inserted into the tree
in a given \<a href="https:api.flutter.dev/flutter/widgets/BuildContext-class.html"\>BuildContext\</a\> and when the dependencies of this widget change
(e.g., an \<a href="https:api.flutter.dev/flutter/widgets/InheritedWidget-class.html"\>InheritedWidget\</a\> referenced by this widget changes). This
method can potentially be called in every frame and should not have any side
effects beyond building a widget.\</p\>
\<p\>The framework replaces the subtree below this widget with the widget
returned by this method, either by updating the existing subtree or by
removing the subtree and inflating a new subtree, depending on whether the
widget returned by this method can update the root of the existing
subtree, as determined by calling \<a href="https:api.flutter.dev/flutter/widgets/Widget/canUpdate.html"\>Widget.canUpdate\</a\>.\</p\>
\<p\>Typically implementations return a newly created constellation of widgets
that are configured with information from this widget's constructor and
from the given \<a href="https:api.flutter.dev/flutter/widgets/BuildContext-class.html"\>BuildContext\</a\>.\</p\>
\<p\>The given \<a href="https:api.flutter.dev/flutter/widgets/BuildContext-class.html"\>BuildContext\</a\> contains information about the location in the
tree at which this widget is being built. For example, the context
provides the set of inherited widgets for this location in the tree. A
given widget might be built with multiple different \<a href="https:api.flutter.dev/flutter/widgets/BuildContext-class.html"\>BuildContext\</a\>
arguments over time if the widget is moved around the tree or if the
widget is inserted into the tree in multiple places at once.\</p\>
\<p\>The implementation of this method must only depend on:\</p\>
\<ul\>
\<li\>the fields of the widget, which themselves must not change over time,
and\</li\>
\<li\>any ambient state obtained from the \<code\>context\</code\> using
\<a href="https:api.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html"\>BuildContext.dependOnInheritedWidgetOfExactType\</a\>.\</li\>
\</ul\>
\<p\>If a widget's \<a href="../../views_after_auth_screens_events_create_event_form/CreateEventForm/build.md"\>build\</a\> method is to depend on anything else, use a
\<a href="https:api.flutter.dev/flutter/widgets/StatefulWidget-class.html"\>StatefulWidget\</a\> instead.\</p\>
\<p\>See also:\</p\>
\<ul\>
\<li\>\<a href="https:api.flutter.dev/flutter/widgets/StatelessWidget-class.html"\>StatelessWidget\</a\>, which contains the discussion on performance considerations.\</li\>
\</ul\>



## Implementation

```dart
@override
Widget build(BuildContext context) \{
  Form class is a container for grouping together multiple form field widgets.
  return Form(
    key: model.formKey,
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text field for event title.
        TextFormField(
          key: const Key('create_event_form_tff1'),
          textInputAction: TextInputAction.next,
          controller: model.eventTitleTextController,
          keyboardType: TextInputType.name,
          maxLength: 20,
          focusNode: model.titleFocus,
          validator: (value) =\> Validator.validateEventForm(value!, 'Title'),
          decoration: InputDecoration(
            placeholder of the text field
            labelText: 'Add Event Title',
            isDense: true,
            labelStyle: Theme.of(context).textTheme.titleMedium,
            focusedBorder: InputBorder.none,
            counterText: "",
            enabledBorder: InputBorder.none,
            prefixIcon: Container(
              transform: Matrix4.translationValues(
                -SizeConfig.screenWidth! * 0.027,
                0.0,
                0.0,
              ),
              child: const Icon(
                Icons.title,
                size: 25,
              ),
            ),
          ),
        ),
        SizedBox(
          height: SizeConfig.screenHeight! * 0.013,
        ),
        Text field for the location.
        TextFormField(
          key: const Key('create_event_form_tff2'),
          textInputAction: TextInputAction.next,
          keyboardType: TextInputType.streetAddress,
          controller: model.eventLocationTextController,
          focusNode: model.locationFocus,
          validator: (value) =\>
              Validator.validateEventForm(value!, 'Location'),
          decoration: InputDecoration(
            hintText: 'Where is the event?',
            labelText: 'Add Location',
            labelStyle: Theme.of(context).textTheme.titleMedium,
            border: InputBorder.none,
            focusedBorder: InputBorder.none,
            enabledBorder: InputBorder.none,
            suffix: GestureDetector(
              key: const Key('gesture_cef_test'),
              onTap: () =\> navigationService.pushScreen(
                Routes.mapScreen,
                arguments: \{
                  'model': model,
                  initalize the map screen with a marker at this location
                  'latitude': 37.42796133580664,
                  'longitude': -122.085749655962,
                \},
              ),
              child: Text(
                AppLocalizations.of(context)!
                    .strictTranslate('Choose on map'),
                style: Theme.of(context)
                    .textTheme
                    .bodySmall!
                    .copyWith(fontSize: 16),
              ),
            ),
            prefixIcon: Container(
              transform: Matrix4.translationValues(
                -SizeConfig.screenWidth! * 0.027,
                0.0,
                0.0,
              ),
              child: const Icon(
                Icons.place,
                size: 25,
              ),
            ),
          ),
        ),
        SizedBox(
          height: SizeConfig.screenHeight! * 0.013,
        ),
        Text field for event description.
        TextFormField(
          key: const Key('create_event_form_tff3'),
          keyboardType: TextInputType.multiline,
          controller: model.eventDescriptionTextController,
          focusNode: model.descriptionFocus,
          validator: (value) =\>
              Validator.validateEventForm(value!, 'Description'),
          maxLines: 10,
          minLines: 1,
          decoration: InputDecoration(
            hintText: 'Describe the event',
            labelText: 'Add Description',
            labelStyle: Theme.of(context).textTheme.titleMedium,
            border: InputBorder.none,
            focusedBorder: InputBorder.none,
            enabledBorder: InputBorder.none,
            prefixIcon: Container(
              transform: Matrix4.translationValues(
                -SizeConfig.screenWidth! * 0.027,
                0.0,
                0.0,
              ),
              child: const Icon(
                Icons.view_headline,
                size: 25,
              ),
            ),
          ),
        ),
      ],
    ),
  );
\}
```







