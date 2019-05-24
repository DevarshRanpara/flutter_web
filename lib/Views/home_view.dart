import 'package:flutter_web/material.dart';

class HomeView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      drawer: Drawer(
        child: ListView(
          children: <Widget>[],
        ),
      ),
      body: Container(
        child: Center(
          child: Text('Home'),
        ),
      ),
    );
  }
}
