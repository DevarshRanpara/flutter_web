import 'package:flutter_web/material.dart';
import 'package:hello_world/CustomWidgets/dashboard_tile.dart';

class MenuDashboard extends StatefulWidget {
  @override
  _MenuDashboardState createState() => _MenuDashboardState();
}

class _MenuDashboardState extends State<MenuDashboard> {
  bool isColapsed = true;
  double screenHeight;
  double screenWidth;
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    screenHeight = size.height;
    screenWidth = size.width;
    return Scaffold(
      backgroundColor: Color(0xFF8e24aa),
      body: Stack(
        children: <Widget>[
          menu(context),
          dashboard(context),
        ],
      ),
    );
  }

  Widget menu(context) {
    return Align(
      alignment: Alignment.centerLeft,
      child: Container(
        padding: EdgeInsets.only(left: 16),
        child: Column(
            mainAxisSize: MainAxisSize.max,
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Expanded(
                  flex: 2,
                  child: Container(
                    padding: EdgeInsets.all(16.0),
                    child: Column(
                      children: <Widget>[
                        Container(
                          width: 190.0,
                          height: 190.0,
                          decoration: new BoxDecoration(
                            shape: BoxShape.circle,
                            image: new DecorationImage(
                              fit: BoxFit.fill,
                              image: new NetworkImage(
                                  "https://devicemanagament.000webhostapp.com/userimages/1.jpeg"),
                            ),
                          ),
                        ),
                        SizedBox(
                          height: 16,
                        ),
                        Text(
                          'Devarsh',
                          style: TextStyle(color: Colors.white, fontSize: 22),
                        ),
                      ],
                    ),
                  )),
              Expanded(
                flex: 2,
                child: Column(
                  children: <Widget>[
                    DashboardTile(
                      icon: Icon(Icons.developer_mode),
                      msg: 'Dashboard',
                    ),
                    SizedBox(
                      height: 15.0,
                    ),
                    DashboardTile(
                      icon: Icon(Icons.verified_user),
                      msg: 'Manage Users',
                    ),
                    SizedBox(
                      height: 15.0,
                    ),
                    DashboardTile(
                      icon: Icon(Icons.settings),
                      msg: 'Settings',
                    ),
                    SizedBox(
                      height: 15.0,
                    ),
                    DashboardTile(
                      icon: Icon(Icons.data_usage),
                      msg: 'View Usage',
                    ),
                  ],
                ),
              ),
              Expanded(
                flex: 1,
                child: Row(
                  children: <Widget>[
                    Icon(Icons.exit_to_app),
                    SizedBox(
                      width: 5,
                    ),
                    Text(
                      'Log out',
                      style: TextStyle(color: Colors.white, fontSize: 22),
                    ),
                  ],
                ),
              )
            ]),
      ),
    );
  }

  Widget dashboard(context) {
    return AnimatedPositioned(
      top: isColapsed ? 0 : screenHeight * 0.1,
      bottom: isColapsed ? 0 : screenHeight * 0.1,
      left: isColapsed ? 0 : screenHeight * 0.3,
      right: isColapsed ? 0 : screenHeight * -0.7,
      duration: Duration(milliseconds: 300),
      child: Material(
        borderRadius: BorderRadius.all(Radius.circular(8.0)),
        elevation: 1,
        color: Color(0xFF6a1b9a),
        child: Container(
          padding: EdgeInsets.all(16.0),
          child: Column(
            children: <Widget>[
              Row(
                children: <Widget>[
                  InkWell(
                      onTap: () {
                        setState(() {
                          isColapsed = !isColapsed;
                        });
                      },
                      child: Icon(
                        Icons.menu,
                        color: Colors.white,
                      ))
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
