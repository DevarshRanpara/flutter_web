import 'package:flutter_web/material.dart';

class DashboardTile extends StatelessWidget {
  final Icon icon;
  final String msg;

  DashboardTile({this.icon, this.msg});

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {},
      child: Row(
        children: <Widget>[
          icon,
          SizedBox(
            width: 5,
          ),
          Text(
            msg,
            style: TextStyle(color: Colors.white, fontSize: 22),
          ),
        ],
      ),
    );
  }
}
