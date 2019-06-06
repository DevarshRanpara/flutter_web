define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, material, animation, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__ink_well = material.src__material__ink_well;
  const src__material__colors = material.src__material__colors;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__icon = animation.src__widgets__icon;
  const src__painting__text_style = animation$.src__painting__text_style;
  const CustomWidgets__dashboard_tile = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  CustomWidgets__dashboard_tile.DashboardTile = class DashboardTile extends src__widgets__framework.StatelessWidget {
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get msg() {
      return this[msg$];
    }
    set msg(value) {
      super.msg = value;
    }
    build(context) {
      return new src__material__ink_well.InkWell.new({onTap: dart.fn(() => {
        }, VoidToNull()), child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([this.icon, new src__widgets__basic.SizedBox.new({width: 5.0, $creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 11, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard_tile.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 13, name: "width"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new(this.msg, {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontSize: 22.0}), $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 11, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard_tile.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 13, name: "data"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 13, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 14, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard_tile.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 12, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard_tile.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 7, name: "onTap"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (CustomWidgets__dashboard_tile.DashboardTile.new = function(opts) {
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let msg = opts && 'msg' in opts ? opts.msg : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[icon$] = icon;
    this[msg$] = msg;
    CustomWidgets__dashboard_tile.DashboardTile.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = CustomWidgets__dashboard_tile.DashboardTile.prototype;
  dart.addTypeTests(CustomWidgets__dashboard_tile.DashboardTile);
  const icon$ = Symbol("DashboardTile.icon");
  const msg$ = Symbol("DashboardTile.msg");
  dart.setMethodSignature(CustomWidgets__dashboard_tile.DashboardTile, () => ({
    __proto__: dart.getMethods(CustomWidgets__dashboard_tile.DashboardTile.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(CustomWidgets__dashboard_tile.DashboardTile, () => ({
    __proto__: dart.getFields(CustomWidgets__dashboard_tile.DashboardTile.__proto__),
    icon: dart.finalFieldType(src__widgets__icon.Icon),
    msg: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/hello_world/CustomWidgets/dashboard_tile", {
    "package:hello_world/CustomWidgets/dashboard_tile.dart": CustomWidgets__dashboard_tile
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard_tile.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGa;;;;;;IACE;;;;;;UAKa;AACxB,YAAO,iDACE;iCACA,2CACa,sBAChB,WACA,6CACS,idAET,gCACE,kBACO,oDAAwB,8CAAiB;IAK1D;;;QAnBoB;QAAW;;IAAX;IAAW;AAA/B;;EAAoC","file":"dashboard_tile.ddc.js"}');
  // Exports:
  return {
    CustomWidgets__dashboard_tile: CustomWidgets__dashboard_tile
  };
});

//# sourceMappingURL=dashboard_tile.ddc.js.map
