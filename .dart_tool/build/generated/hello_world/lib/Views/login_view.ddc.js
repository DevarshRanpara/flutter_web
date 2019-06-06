define(['dart_sdk', 'packages/flutter_web/animation', 'packages/hello_world/CustomWidgets/responsive_widget', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/hello_world/Views/home_view'], function(dart_sdk, animation, responsive_widget, material, animation$, ui, home_view) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__painting__stadium_border = animation.src__painting__stadium_border;
  const src__widgets__navigator = animation.src__widgets__navigator;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__icon = animation.src__widgets__icon;
  const CustomWidgets__responsive_widget = responsive_widget.CustomWidgets__responsive_widget;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__flutter_logo = material.src__material__flutter_logo;
  const src__material__text_field = material.src__material__text_field;
  const src__material__input_decorator = material.src__material__input_decorator;
  const src__material__button = material.src__material__button;
  const src__material__colors = material.src__material__colors;
  const src__material__page = material.src__material__page;
  const src__material__icons = material.src__material__icons;
  const src__painting__gradient = animation$.src__painting__gradient;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__painting__text_style = animation$.src__painting__text_style;
  const ui$ = ui.ui;
  const Views__home_view = home_view.Views__home_view;
  const Views__login_view = Object.create(dart.library);
  let JSArrayOfColor = () => (JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui$.Color)))();
  let BuildContextToHomeView = () => (BuildContextToHomeView = dart.constFn(dart.fnType(Views__home_view.HomeView, [src__widgets__framework.BuildContext])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  Views__login_view.LoginView = class LoginView extends src__widgets__framework.StatefulWidget {
    createState() {
      return new Views__login_view._LoginViewState.new();
    }
  };
  (Views__login_view.LoginView.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    Views__login_view.LoginView.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = Views__login_view.LoginView.prototype;
  dart.addTypeTests(Views__login_view.LoginView);
  dart.setMethodSignature(Views__login_view.LoginView, () => ({
    __proto__: dart.getMethods(Views__login_view.LoginView.__proto__),
    createState: dart.fnType(Views__login_view._LoginViewState, [])
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
  Views__login_view._LoginViewState = class _LoginViewState extends src__widgets__framework.State$(Views__login_view.LoginView) {
    build(context) {
      let pad = !dart.test(CustomWidgets__responsive_widget.ResponsiveWidget.isLargeScreen(context)) ? 5.0 : 3.0;
      return new CustomWidgets__responsive_widget.ResponsiveWidget.new({largeScreen: new src__material__scaffold.Scaffold.new({body: new src__widgets__container.Container.new({decoration: new src__painting__box_decoration.BoxDecoration.new({gradient: new src__painting__gradient.LinearGradient.new({begin: src__painting__alignment.Alignment.topRight, end: src__painting__alignment.Alignment.bottomLeft, colors: JSArrayOfColor().of([new ui$.Color.new(4293282329), new ui$.Color.new(4293467747), new ui$.Color.new(4283510184)])})}), padding: new src__painting__edge_insets.EdgeInsets.symmetric({horizontal: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.width) / pad}), child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new src__material__flutter_logo.FlutterLogo.new({size: 150.0, $creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 15, file: "org-dartlang-app:///packages/hello_world/Views/login_view.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 17, name: "size"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 30.0, $creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 15, file: "org-dartlang-app:///packages/hello_world/Views/login_view.dart", parameterLocations: const$3 || (const$3 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 17, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__material__text_field.TextField.new({decoration: new src__material__input_decorator.InputDecoration.new({labelText: "Email"}), $creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 15, file: "org-dartlang-app:///packages/hello_world/Views/login_view.dart", parameterLocations: const$6 || (const$6 = dart.constList([const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 17, name: "decoration"})))], src__widgets__widget_inspector._Location))})))}), new src__material__text_field.TextField.new({decoration: new src__material__input_decorator.InputDecoration.new({labelText: "Password"}), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 15, file: "org-dartlang-app:///packages/hello_world/Views/login_view.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 17, name: "decoration"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 30.0, $creationLocationd_0dea112b090073317d4: const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 15, file: "org-dartlang-app:///packages/hello_world/Views/login_view.dart", parameterLocations: const$12 || (const$12 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 17, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__material__button.RawMaterialButton.new({splashColor: src__material__colors.Colors.red, fillColor: src__material__colors.Colors.white, shape: new src__painting__stadium_border.StadiumBorder.new(), onPressed: dart.fn(() => {
                    let route = new src__material__page.MaterialPageRoute.new({builder: dart.fn(context => new Views__home_view.HomeView.new({$creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 65, file: "org-dartlang-app:///packages/hello_world/Views/login_view.dart", parameterLocations: const$14 || (const$14 = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToHomeView())});
                    src__widgets__navigator.Navigator.pushReplacement(dart.dynamic, core.Object, context, route);
                  }, VoidToNull()), child: new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 8.0, horizontal: 20.0}), child: new src__widgets__basic.Row.new({mainAxisSize: src__rendering__flex.MainAxisSize.min, children: JSArrayOfWidget().of([new src__widgets__text.Text.new("Login", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.black}), $creationLocationd_0dea112b090073317d4: const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 25, file: "org-dartlang-app:///packages/hello_world/Views/login_view.dart", parameterLocations: const$18 || (const$18 = dart.constList([const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 27, name: "data"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 27, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__icon.Icon.new(src__material__icons.Icons.arrow_forward_ios, {color: src__material__colors.Colors.black, size: 17.0, $creationLocationd_0dea112b090073317d4: const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 25, file: "org-dartlang-app:///packages/hello_world/Views/login_view.dart", parameterLocations: const$23 || (const$23 = dart.constList([const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 33, name: "icon"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 27, name: "color"}))), const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 27, name: "size"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 28, file: "org-dartlang-app:///packages/hello_world/Views/login_view.dart", parameterLocations: const$27 || (const$27 = dart.constList([const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 62, column: 23, name: "mainAxisSize"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 23, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 26, file: "org-dartlang-app:///packages/hello_world/Views/login_view.dart", parameterLocations: const$31 || (const$31 = dart.constList([const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 21, name: "padding"}))), const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 15, file: "org-dartlang-app:///packages/hello_world/Views/login_view.dart", parameterLocations: const$38 || (const$38 = dart.constList([const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 19, name: "splashColor"}))), const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 19, name: "fillColor"}))), const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 19, name: "shape"}))), const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 19, name: "onPressed"}))), const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 18, file: "org-dartlang-app:///packages/hello_world/Views/login_view.dart", parameterLocations: const$42 || (const$42 = dart.constList([const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 13, name: "mainAxisAlignment"}))), const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 15, file: "org-dartlang-app:///packages/hello_world/Views/login_view.dart", parameterLocations: const$47 || (const$47 = dart.constList([const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 11, name: "decoration"}))), const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 11, name: "padding"}))), const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), floatingActionButton: new src__material__button.RawMaterialButton.new({child: new src__widgets__basic.Padding.new({padding: const$49 || (const$49 = dart.const(new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 8.0, horizontal: 20.0}))), child: new src__widgets__basic.Row.new({mainAxisSize: src__rendering__flex.MainAxisSize.min, children: JSArrayOfWidget().of([new src__widgets__icon.Icon.new(src__material__icons.Icons.explore, {color: src__material__colors.Colors.amber, $creationLocationd_0dea112b090073317d4: const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 86, column: 17, file: "org-dartlang-app:///packages/hello_world/Views/login_view.dart", parameterLocations: const$52 || (const$52 = dart.constList([const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 25, name: "icon"}))), const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 88, column: 19, name: "color"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({width: 8.0, $creationLocationd_0dea112b090073317d4: const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 17, file: "org-dartlang-app:///packages/hello_world/Views/login_view.dart", parameterLocations: const$55 || (const$55 = dart.constList([const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 91, column: 19, name: "width"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("Sign Up", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white}), $creationLocationd_0dea112b090073317d4: const$60 || (const$60 = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 17, file: "org-dartlang-app:///packages/hello_world/Views/login_view.dart", parameterLocations: const$59 || (const$59 = dart.constList([const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 19, name: "data"}))), const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 95, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$64 || (const$64 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 20, file: "org-dartlang-app:///packages/hello_world/Views/login_view.dart", parameterLocations: const$63 || (const$63 = dart.constList([const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 84, column: 15, name: "mainAxisSize"}))), const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 85, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$68 || (const$68 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 18, file: "org-dartlang-app:///packages/hello_world/Views/login_view.dart", parameterLocations: const$67 || (const$67 = dart.constList([const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 13, name: "padding"}))), const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), fillColor: src__material__colors.Colors.deepOrange, splashColor: src__material__colors.Colors.orange, onPressed: dart.fn(() => {
            }, VoidToNull()), shape: const$69 || (const$69 = dart.const(new src__painting__stadium_border.StadiumBorder.new())), $creationLocationd_0dea112b090073317d4: const$76 || (const$76 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 31, file: "org-dartlang-app:///packages/hello_world/Views/login_view.dart", parameterLocations: const$75 || (const$75 = dart.constList([const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 11, name: "child"}))), const$71 || (const$71 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 11, name: "fillColor"}))), const$72 || (const$72 = dart.const(new src__widgets__widget_inspector._Location.new({line: 101, column: 11, name: "splashColor"}))), const$73 || (const$73 = dart.const(new src__widgets__widget_inspector._Location.new({line: 102, column: 11, name: "onPressed"}))), const$74 || (const$74 = dart.const(new src__widgets__widget_inspector._Location.new({line: 103, column: 11, name: "shape"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$80 || (const$80 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 20, file: "org-dartlang-app:///packages/hello_world/Views/login_view.dart", parameterLocations: const$79 || (const$79 = dart.constList([const$77 || (const$77 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 9, name: "body"}))), const$78 || (const$78 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 9, name: "floatingActionButton"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$83 || (const$83 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 12, file: "org-dartlang-app:///packages/hello_world/Views/login_view.dart", parameterLocations: const$82 || (const$82 = dart.constList([const$81 || (const$81 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 7, name: "largeScreen"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (Views__login_view._LoginViewState.new = function() {
    Views__login_view._LoginViewState.__proto__.new.call(this);
    ;
  }).prototype = Views__login_view._LoginViewState.prototype;
  dart.addTypeTests(Views__login_view._LoginViewState);
  dart.setMethodSignature(Views__login_view._LoginViewState, () => ({
    __proto__: dart.getMethods(Views__login_view._LoginViewState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.trackLibraries("packages/hello_world/Views/login_view", {
    "package:hello_world/Views/login_view.dart": Views__login_view
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/hello_world/Views/login_view.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAMmC;IAAiB;;;;;;EACpD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AAEjB,gBAAO,WAAkB,gEAAc,OAAO,KAAK,MAAI;AAC9D,YAAO,yEACQ,gDACL,uDACQ,+DACA,uDACS,kDACF,uDACP,qBACN,kBAAM,aACN,kBAAM,aACN,kBAAM,4BAIQ,iEAC8B,aAAvB,AAAY,AAAK,wCAAd,OAAO,gBAAe,GAAG,WAChD,uDACgC,yDACnB,sBAChB,uDACQ,scAER,8CACU,ycAEV,yDACc,mEAA2B,kdAEzC,yDACc,mEAA2B,udAEzC,8CACU,+cAEV,8DACwB,6CACF,2CACX,kEACI;AACH,gCACF,wDAA2B,QAAC,WAAY;oBAClC,6EAAgB,OAAO,EAAE,KAAK;2CAEnC,oDAEU,+DAAoB,iBAAiB,eAC7C,+CACsB,iDACT,sBAChB,gCACE,iBACO,oDAAwB,2mBAEjC,gCACQ,sDACQ,0CACR,wmIAQF,wDACb,8CAEK,kGAA+B,iBAAiB,iBACnD,+CACsB,iDACT,sBAChB,gCACQ,4CACQ,ymBAEhB,6CACS,6cAET,gCACE,mBACO,oDAAwB,gxDAKrB,sDACE,gDACT;qCACE;IAIrB;;;;;EACF","file":"login_view.ddc.js"}');
  // Exports:
  return {
    Views__login_view: Views__login_view
  };
});

//# sourceMappingURL=login_view.ddc.js.map
