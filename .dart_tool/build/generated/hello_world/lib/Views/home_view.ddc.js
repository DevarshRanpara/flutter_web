define(['dart_sdk', 'packages/hello_world/CustomWidgets/dashboard', 'packages/flutter_web/animation'], function(dart_sdk, dashboard, animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const CustomWidgets__dashboard = dashboard.CustomWidgets__dashboard;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const Views__home_view = Object.create(dart.library);
  let const$;
  let const$0;
  Views__home_view.HomeView = class HomeView extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new CustomWidgets__dashboard.MenuDashboard.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 7, column: 12, file: "org-dartlang-app:///packages/hello_world/Views/home_view.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))});
    }
  };
  (Views__home_view.HomeView.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    Views__home_view.HomeView.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = Views__home_view.HomeView.prototype;
  dart.addTypeTests(Views__home_view.HomeView);
  dart.setMethodSignature(Views__home_view.HomeView, () => ({
    __proto__: dart.getMethods(Views__home_view.HomeView.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.trackLibraries("packages/hello_world/Views/home_view", {
    "package:hello_world/Views/home_view.dart": Views__home_view
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/hello_world/Views/home_view.dart"],"names":[],"mappings":";;;;;;;;;;;;UAK4B;AACxB,YAAO;IACT;;;;;;EACF","file":"home_view.ddc.js"}');
  // Exports:
  return {
    Views__home_view: Views__home_view
  };
});

//# sourceMappingURL=home_view.ddc.js.map
