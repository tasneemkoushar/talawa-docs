


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
\<p\>If a widget's \<a href="../../widgets_event_date_time_tile/DateTimeTile/build.md"\>build\</a\> method is to depend on anything else, use a
\<a href="https:api.flutter.dev/flutter/widgets/StatefulWidget-class.html"\>StatefulWidget\</a\> instead.\</p\>
\<p\>See also:\</p\>
\<ul\>
\<li\>\<a href="https:api.flutter.dev/flutter/widgets/StatelessWidget-class.html"\>StatelessWidget\</a\>, which contains the discussion on performance considerations.\</li\>
\</ul\>



## Implementation

```dart
@override
Widget build(BuildContext context) \{
  return Container(
    color: Theme.of(context).colorScheme.primaryContainer,
    height: SizeConfig.screenHeight! * 0.068,
    width: double.infinity,
    child: Padding(
      padding:
          EdgeInsets.symmetric(horizontal: SizeConfig.screenWidth! * 0.083),
      child: Row(
        children: [
          const Icon(
            Icons.calendar_today,
            color: Color(0xff524F4F),
            size: 19,
          ),
          SizedBox(
            width: SizeConfig.screenWidth! * 0.045,
          ),
          InkWell(
            key: const Key('EventDateTimeTileDate'),
            onTap: () async \{
              setDate();
            \},
            child: Text(
              date,
              style: const TextStyle(fontSize: 16),
            ),
          ),
          const Spacer(),
          const Icon(
            Icons.schedule,
            color: Color(0xff524F4F),
            size: 19,
          ),
          SizedBox(
            width: SizeConfig.screenWidth! * 0.045,
          ),
          InkWell(
            key: const Key('EventDateTimeTileTime'),
            onTap: () async \{
              setTime();
            \},
            child: Text(
              time,
              style: const TextStyle(fontSize: 16),
            ),
          ),
        ],
      ),
    ),
  );
\}
```







