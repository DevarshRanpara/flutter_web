define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/hello_world/CustomWidgets/dashboard_tile'], function(dart_sdk, animation, material, ui, animation$, dashboard_tile) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__painting__box_border = animation.src__painting__box_border;
  const src__painting__decoration_image = animation.src__painting__decoration_image;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__icon = animation.src__widgets__icon;
  const src__widgets__implicit_animations = animation.src__widgets__implicit_animations;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__colors = material.src__material__colors;
  const src__material__icons = material.src__material__icons;
  const src__material__material = material.src__material__material;
  const src__material__ink_well = material.src__material__ink_well;
  const ui$ = ui.ui;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__painting__box_fit = animation$.src__painting__box_fit;
  const src__painting__image_provider = animation$.src__painting__image_provider;
  const src__painting__text_style = animation$.src__painting__text_style;
  const src__painting__border_radius = animation$.src__painting__border_radius;
  const CustomWidgets__dashboard_tile = dashboard_tile.CustomWidgets__dashboard_tile;
  const CustomWidgets__dashboard = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  CustomWidgets__dashboard.MenuDashboard = class MenuDashboard extends src__widgets__framework.StatefulWidget {
    createState() {
      return new CustomWidgets__dashboard._MenuDashboardState.new();
    }
  };
  (CustomWidgets__dashboard.MenuDashboard.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    CustomWidgets__dashboard.MenuDashboard.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = CustomWidgets__dashboard.MenuDashboard.prototype;
  dart.addTypeTests(CustomWidgets__dashboard.MenuDashboard);
  dart.setMethodSignature(CustomWidgets__dashboard.MenuDashboard, () => ({
    __proto__: dart.getMethods(CustomWidgets__dashboard.MenuDashboard.__proto__),
    createState: dart.fnType(CustomWidgets__dashboard._MenuDashboardState, [])
  }));
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
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  let const$52;
  let const$53;
  let const$54;
  let const$55;
  let const$56;
  let const$57;
  let const$58;
  let const$59;
  let const$60;
  let const$61;
  let const$62;
  let const$63;
  let const$64;
  let const$65;
  let const$66;
  let const$67;
  let const$68;
  let const$69;
  let const$70;
  let const$71;
  let const$72;
  let const$73;
  let const$74;
  let const$75;
  let const$76;
  let const$77;
  let const$78;
  let const$79;
  let const$80;
  let const$81;
  let const$82;
  let const$83;
  let const$84;
  let const$85;
  let const$86;
  let const$87;
  let const$88;
  let const$89;
  let const$90;
  let const$91;
  let const$92;
  let const$93;
  let const$94;
  let const$95;
  let const$96;
  let const$97;
  let const$98;
  let const$99;
  let const$100;
  let const$101;
  let const$102;
  let const$103;
  let const$104;
  let const$105;
  let const$106;
  let const$107;
  let const$108;
  let const$109;
  let const$110;
  let const$111;
  let const$112;
  let const$113;
  let const$114;
  let const$115;
  let const$116;
  let const$117;
  let const$118;
  let const$119;
  let const$120;
  let const$121;
  let const$122;
  let const$123;
  let const$124;
  let const$125;
  let const$126;
  let const$127;
  let const$128;
  let const$129;
  let const$130;
  let const$131;
  let const$132;
  let const$133;
  let const$134;
  let const$135;
  CustomWidgets__dashboard._MenuDashboardState = class _MenuDashboardState extends src__widgets__framework.State$(CustomWidgets__dashboard.MenuDashboard) {
    build(context) {
      let size = src__widgets__media_query.MediaQuery.of(context).size;
      this.screenHeight = size.height;
      this.screenWidth = size.width;
      return new src__material__scaffold.Scaffold.new({backgroundColor: new ui$.Color.new(4287505578), body: new src__widgets__basic.Stack.new({children: JSArrayOfWidget().of([this.menu(context), this.dashboard(context)]), $creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 13, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 12, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 7, name: "backgroundColor"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
    menu(context) {
      return new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.centerLeft, child: new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.only({left: 16.0}), child: new src__widgets__basic.Column.new({mainAxisSize: src__rendering__flex.MainAxisSize.max, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, mainAxisAlignment: src__rendering__flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new src__widgets__basic.Expanded.new({flex: 2, child: new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.all(16.0), child: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__container.Container.new({width: 190.0, height: 190.0, decoration: new src__painting__box_decoration.BoxDecoration.new({shape: src__painting__box_border.BoxShape.circle, image: new src__painting__decoration_image.DecorationImage.new({fit: src__painting__box_fit.BoxFit.fill, image: new src__painting__image_provider.NetworkImage.new("https://devicemanagament.000webhostapp.com/userimages/1.jpeg")})}), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 25, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 27, name: "width"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 27, name: "height"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 27, name: "decoration"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 16.0, $creationLocationd_0dea112b090073317d4: const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 25, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$12 || (const$12 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 27, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("Devarsh", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontSize: 22.0}), $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 25, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 62, column: 27, name: "data"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 27, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 28, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$19 || (const$19 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 23, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 26, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$23 || (const$23 = dart.constList([const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 21, name: "padding"}))), const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 15, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$27 || (const$27 = dart.constList([const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 19, name: "flex"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({flex: 2, child: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new CustomWidgets__dashboard_tile.DashboardTile.new({icon: new src__widgets__icon.Icon.new(src__material__icons.Icons.developer_mode, {$creationLocationd_0dea112b090073317d4: const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 29, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$30 || (const$30 = dart.constList([const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 40, name: "icon"})))], src__widgets__widget_inspector._Location))})))}), msg: "Dashboard", $creationLocationd_0dea112b090073317d4: const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 21, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$34 || (const$34 = dart.constList([const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 23, name: "icon"}))), const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 23, name: "msg"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 15.0, $creationLocationd_0dea112b090073317d4: const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 21, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$37 || (const$37 = dart.constList([const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 23, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new CustomWidgets__dashboard_tile.DashboardTile.new({icon: new src__widgets__icon.Icon.new(src__material__icons.Icons.verified_user, {$creationLocationd_0dea112b090073317d4: const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 29, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$40 || (const$40 = dart.constList([const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 40, name: "icon"})))], src__widgets__widget_inspector._Location))})))}), msg: "Manage Users", $creationLocationd_0dea112b090073317d4: const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 21, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$44 || (const$44 = dart.constList([const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 23, name: "icon"}))), const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 23, name: "msg"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 15.0, $creationLocationd_0dea112b090073317d4: const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 21, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$47 || (const$47 = dart.constList([const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 84, column: 23, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new CustomWidgets__dashboard_tile.DashboardTile.new({icon: new src__widgets__icon.Icon.new(src__material__icons.Icons.settings, {$creationLocationd_0dea112b090073317d4: const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 29, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$50 || (const$50 = dart.constList([const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 40, name: "icon"})))], src__widgets__widget_inspector._Location))})))}), msg: "Settings", $creationLocationd_0dea112b090073317d4: const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 86, column: 21, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$54 || (const$54 = dart.constList([const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 23, name: "icon"}))), const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 88, column: 23, name: "msg"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 15.0, $creationLocationd_0dea112b090073317d4: const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 21, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$57 || (const$57 = dart.constList([const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 91, column: 23, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new CustomWidgets__dashboard_tile.DashboardTile.new({icon: new src__widgets__icon.Icon.new(src__material__icons.Icons.data_usage, {$creationLocationd_0dea112b090073317d4: const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 29, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$60 || (const$60 = dart.constList([const$59 || (const$59 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 40, name: "icon"})))], src__widgets__widget_inspector._Location))})))}), msg: "View Usage", $creationLocationd_0dea112b090073317d4: const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 21, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$64 || (const$64 = dart.constList([const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 23, name: "icon"}))), const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 95, column: 23, name: "msg"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$68 || (const$68 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 24, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$67 || (const$67 = dart.constList([const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 19, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$72 || (const$72 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 15, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$71 || (const$71 = dart.constList([const$69 || (const$69 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 17, name: "flex"}))), const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({flex: 1, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__icon.Icon.new(src__material__icons.Icons.exit_to_app, {$creationLocationd_0dea112b090073317d4: const$75 || (const$75 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 21, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$74 || (const$74 = dart.constList([const$73 || (const$73 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 32, name: "icon"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({width: 5.0, $creationLocationd_0dea112b090073317d4: const$78 || (const$78 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 21, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$77 || (const$77 = dart.constList([const$76 || (const$76 = dart.const(new src__widgets__widget_inspector._Location.new({line: 106, column: 23, name: "width"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("Log out", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontSize: 22.0}), $creationLocationd_0dea112b090073317d4: const$82 || (const$82 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 21, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$81 || (const$81 = dart.constList([const$79 || (const$79 = dart.const(new src__widgets__widget_inspector._Location.new({line: 109, column: 23, name: "data"}))), const$80 || (const$80 = dart.const(new src__widgets__widget_inspector._Location.new({line: 110, column: 23, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$85 || (const$85 = dart.const(new src__widgets__widget_inspector._Location.new({line: 102, column: 24, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$84 || (const$84 = dart.constList([const$83 || (const$83 = dart.const(new src__widgets__widget_inspector._Location.new({line: 103, column: 19, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$89 || (const$89 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 15, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$88 || (const$88 = dart.constList([const$86 || (const$86 = dart.const(new src__widgets__widget_inspector._Location.new({line: 101, column: 17, name: "flex"}))), const$87 || (const$87 = dart.const(new src__widgets__widget_inspector._Location.new({line: 102, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$95 || (const$95 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 16, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$94 || (const$94 = dart.constList([const$90 || (const$90 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 13, name: "mainAxisSize"}))), const$91 || (const$91 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 13, name: "crossAxisAlignment"}))), const$92 || (const$92 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 13, name: "mainAxisAlignment"}))), const$93 || (const$93 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$99 || (const$99 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 14, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$98 || (const$98 = dart.constList([const$96 || (const$96 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 9, name: "padding"}))), const$97 || (const$97 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$103 || (const$103 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 12, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$102 || (const$102 = dart.constList([const$100 || (const$100 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 7, name: "alignment"}))), const$101 || (const$101 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    dashboard(context) {
      return new src__widgets__implicit_animations.AnimatedPositioned.new({top: dart.test(this.isColapsed) ? 0.0 : dart.notNull(this.screenHeight) * 0.1, bottom: dart.test(this.isColapsed) ? 0.0 : dart.notNull(this.screenHeight) * 0.1, left: dart.test(this.isColapsed) ? 0.0 : dart.notNull(this.screenHeight) * 0.3, right: dart.test(this.isColapsed) ? 0.0 : dart.notNull(this.screenHeight) * -0.7, duration: new core.Duration.new({milliseconds: 300}), child: new src__material__material.Material.new({borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(8.0)), elevation: 1.0, color: new ui$.Color.new(4285143962), child: new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.all(16.0), child: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__material__ink_well.InkWell.new({onTap: dart.fn(() => {
                        this.setState(dart.fn(() => {
                          this.isColapsed = !dart.test(this.isColapsed);
                        }, VoidToNull()));
                      }, VoidToNull()), child: new src__widgets__icon.Icon.new(src__material__icons.Icons.menu, {color: src__material__colors.Colors.white, $creationLocationd_0dea112b090073317d4: const$107 || (const$107 = dart.const(new src__widgets__widget_inspector._Location.new({line: 143, column: 30, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$106 || (const$106 = dart.constList([const$104 || (const$104 = dart.const(new src__widgets__widget_inspector._Location.new({line: 144, column: 31, name: "icon"}))), const$105 || (const$105 = dart.const(new src__widgets__widget_inspector._Location.new({line: 145, column: 25, name: "color"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$111 || (const$111 = dart.const(new src__widgets__widget_inspector._Location.new({line: 137, column: 19, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$110 || (const$110 = dart.constList([const$108 || (const$108 = dart.const(new src__widgets__widget_inspector._Location.new({line: 138, column: 23, name: "onTap"}))), const$109 || (const$109 = dart.const(new src__widgets__widget_inspector._Location.new({line: 143, column: 23, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$114 || (const$114 = dart.const(new src__widgets__widget_inspector._Location.new({line: 135, column: 15, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$113 || (const$113 = dart.constList([const$112 || (const$112 = dart.const(new src__widgets__widget_inspector._Location.new({line: 136, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$117 || (const$117 = dart.const(new src__widgets__widget_inspector._Location.new({line: 133, column: 18, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$116 || (const$116 = dart.constList([const$115 || (const$115 = dart.const(new src__widgets__widget_inspector._Location.new({line: 134, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$121 || (const$121 = dart.const(new src__widgets__widget_inspector._Location.new({line: 131, column: 16, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$120 || (const$120 = dart.constList([const$118 || (const$118 = dart.const(new src__widgets__widget_inspector._Location.new({line: 132, column: 11, name: "padding"}))), const$119 || (const$119 = dart.const(new src__widgets__widget_inspector._Location.new({line: 133, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$127 || (const$127 = dart.const(new src__widgets__widget_inspector._Location.new({line: 127, column: 14, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$126 || (const$126 = dart.constList([const$122 || (const$122 = dart.const(new src__widgets__widget_inspector._Location.new({line: 128, column: 9, name: "borderRadius"}))), const$123 || (const$123 = dart.const(new src__widgets__widget_inspector._Location.new({line: 129, column: 9, name: "elevation"}))), const$124 || (const$124 = dart.const(new src__widgets__widget_inspector._Location.new({line: 130, column: 9, name: "color"}))), const$125 || (const$125 = dart.const(new src__widgets__widget_inspector._Location.new({line: 131, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$135 || (const$135 = dart.const(new src__widgets__widget_inspector._Location.new({line: 121, column: 12, file: "org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart", parameterLocations: const$134 || (const$134 = dart.constList([const$128 || (const$128 = dart.const(new src__widgets__widget_inspector._Location.new({line: 122, column: 7, name: "top"}))), const$129 || (const$129 = dart.const(new src__widgets__widget_inspector._Location.new({line: 123, column: 7, name: "bottom"}))), const$130 || (const$130 = dart.const(new src__widgets__widget_inspector._Location.new({line: 124, column: 7, name: "left"}))), const$131 || (const$131 = dart.const(new src__widgets__widget_inspector._Location.new({line: 125, column: 7, name: "right"}))), const$132 || (const$132 = dart.const(new src__widgets__widget_inspector._Location.new({line: 126, column: 7, name: "duration"}))), const$133 || (const$133 = dart.const(new src__widgets__widget_inspector._Location.new({line: 127, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (CustomWidgets__dashboard._MenuDashboardState.new = function() {
    this.isColapsed = true;
    this.screenHeight = null;
    this.screenWidth = null;
    CustomWidgets__dashboard._MenuDashboardState.__proto__.new.call(this);
    ;
  }).prototype = CustomWidgets__dashboard._MenuDashboardState.prototype;
  dart.addTypeTests(CustomWidgets__dashboard._MenuDashboardState);
  dart.setMethodSignature(CustomWidgets__dashboard._MenuDashboardState, () => ({
    __proto__: dart.getMethods(CustomWidgets__dashboard._MenuDashboardState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    menu: dart.fnType(src__widgets__framework.Widget, [dart.dynamic]),
    dashboard: dart.fnType(src__widgets__framework.Widget, [dart.dynamic])
  }));
  dart.setFieldSignature(CustomWidgets__dashboard._MenuDashboardState, () => ({
    __proto__: dart.getFields(CustomWidgets__dashboard._MenuDashboardState.__proto__),
    isColapsed: dart.fieldType(core.bool),
    screenHeight: dart.fieldType(core.double),
    screenWidth: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/hello_world/CustomWidgets/dashboard", {
    "package:hello_world/CustomWidgets/dashboard.dart": CustomWidgets__dashboard
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/hello_world/CustomWidgets/dashboard.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAKuC;IAAqB;;;;;;EAC5D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAO4B;AACnB,iBAAkB,AAAY,wCAAT,OAAO;MAEjC,oBAAe,AAAK,IAAD;MACnB,mBAAc,AAAK,IAAD;AAClB,YAAO,4DACY,kBAAM,mBACjB,6CACc,sBAChB,UAAK,OAAO,GACZ,eAAU,OAAO;IAIzB;SAEY;AACV,YAAO,+CACgB,sDACd,oDACe,sDAAW,eACxB,kDACwB,2DACY,kEACF,yDACnB,sBAChB,4CACU,UACC,oDACe,8CAAI,cACjB,8CACa,sBAChB,kDACS,eACC,mBACQ,4DACE,kDACL,8DACG,2CACD,mDACP,8wBAIV,8CACU,sdAEV,gCACE,mBACO,oDAAwB,8CAAiB,msEAK5D,4CACQ,UACC,8CACa,sBAChB,2DACQ,gCAAW,+fACZ,ulBAEP,8CACU,sdAEV,2DACQ,gCAAW,8fACZ,0lBAEP,8CACU,sdAEV,2DACQ,gCAAW,yfACZ,slBAEP,8CACU,sdAEV,2DACQ,gCAAW,2fACZ,wnDAKb,4CACQ,UACC,2CACa,sBAChB,gCAAW,yfACX,6CACS,sdAET,gCACE,mBACO,oDAAwB,8CAAiB;IAQpE;cAEiB;AACf,YAAO,8EACA,mBAAa,MAAiB,aAAb,qBAAe,uBAC7B,mBAAa,MAAiB,aAAb,qBAAe,qBAClC,mBAAa,MAAiB,aAAb,qBAAe,sBAC/B,mBAAa,MAAiB,aAAb,qBAAe,CAAC,eAC9B,qCAAuB,cAC1B,wDACsB,kDAAW,wBAAS,kBACpC,YACJ,kBAAM,oBACN,oDACe,8CAAI,cACjB,8CACa,sBAChB,2CACoB,sBAChB,gDACW;wBACL,cAAS;0BACP,kBAAa,WAAC;;+CAGX,gCACC,yCACQ;IASpC;;;IAhJK,kBAAa;IACX;IACA;;;EA+IT","file":"dashboard.ddc.js"}');
  // Exports:
  return {
    CustomWidgets__dashboard: CustomWidgets__dashboard
  };
});

//# sourceMappingURL=dashboard.ddc.js.map
