import 'package:flutter_web/material.dart';
import 'package:hello_world/CustomWidgets/responsive_widget.dart';
import 'package:hello_world/Views/home_view.dart';

class LoginView extends StatefulWidget {
  @override
  _LoginViewState createState() => _LoginViewState();
}

class _LoginViewState extends State<LoginView> {
  @override
  Widget build(BuildContext context) {

    double pad = (!ResponsiveWidget.isLargeScreen(context)) ? 5 : 3;
    return ResponsiveWidget(
      largeScreen: Scaffold(
        body: Container(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topRight,
              end: Alignment.bottomLeft,
              colors: [
                Color(0xFFe64a19),
                Color(0xFFe91e63),
                Color(0xFF512da8),
              ],
            ),
          ),
          padding: EdgeInsets.symmetric(
              horizontal: MediaQuery.of(context).size.width / pad),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              FlutterLogo(
                size: 150,
              ),
              SizedBox(
                height: 30,
              ),
              TextField(
                decoration: InputDecoration(labelText: 'Email'),
              ),
              TextField(
                decoration: InputDecoration(labelText: 'Password'),
              ),
              SizedBox(
                height: 30,
              ),
              RawMaterialButton(
                  splashColor: Colors.red,
                  fillColor: Colors.white,
                  shape: StadiumBorder(),
                  onPressed: () {
                    Route route =
                        MaterialPageRoute(builder: (context) => HomeView());
                    Navigator.pushReplacement(context, route);
                  },
                  child: Container(
                    padding:
                        EdgeInsets.symmetric(vertical: 8.0, horizontal: 20.0),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: <Widget>[
                        Text(
                          'Login',
                          style: TextStyle(color: Colors.black),
                        ),
                        Icon(
                          Icons.arrow_forward_ios,
                          color: Colors.black,
                          size: 17,
                        ),
                      ],
                    ),
                  )),
            ],
          ),
        ),
        floatingActionButton: RawMaterialButton(
          child: Padding(
            padding:
                const EdgeInsets.symmetric(vertical: 8.0, horizontal: 20.0),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: <Widget>[
                Icon(
                  Icons.explore,
                  color: Colors.amber,
                ),
                SizedBox(
                  width: 8.0,
                ),
                Text(
                  'Sign Up',
                  style: TextStyle(color: Colors.white),
                ),
              ],
            ),
          ),
          fillColor: Colors.deepOrange,
          splashColor: Colors.orange,
          onPressed: () {},
          shape: const StadiumBorder(),
        ),
      ),
    );
  }
}
