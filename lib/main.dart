import 'package:flutter_web/material.dart';
import 'package:hello_world/Views/login_view.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
          fontFamily: 'Montserrat',
          accentColor: Colors.black,
          primarySwatch: Colors.brown,
          brightness: Brightness.dark),
      home: LoginView(),
    );
  }
}
