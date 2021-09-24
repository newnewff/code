main.dart
``` dart
@override
Wedget build(BuildContent content){
  var mainControl=MyMainControl();
  var control=MyCotrolController();
  return ConstrainedBox(
    constraints:BoxConstraints.expand(),
    child:Stack(
      alignment:Alignment.center,
      children:[
        Container(
          height: MediaQuery.of(context).size.height,
          width: MediaQuery.of(context).size.width,
          child: mainControl,
        ),
        MyControlView(
          MyOnClick:control.ShowData
        ),
        control
      ]
    )
  )
}
```

my_control_view.dart
``` dart
class MyControlView extends StatelessWidget{
  final VoidCallback? myOnClick;
  const MyControlView({
    Key? key,
    this.MyOnClick
  }):super(key:key);
  
  @override
  Widget build(BuildContent context){
    return Positioined(
      child: Listener(
        child: Container(),
        onPointerDown:(event)=>MyOnClick!(),
      )
    );
  }
}
```

my_control_controller.dart
``` dart
DataNotifier _toggleChange=DataNotifier();

class MyCotrolController extends StatefulWidget{
  MyCotrolController({
    key,
  }): super(key: key);
  
  @override
  _MyCotrolState createState() => new _MyCotrolState();
  
  void ShowData(){
    _toggleChange.change();
  }
}

class _MyCotrolState extends State<MapIconDeviceController>
{
  @override
  void initState() {
    super.initState();
    _toggleChange.addListener((){
      setState(() {
        _toggleChange.toggle=!_toggleChange.toggle;
      });
    });
  }
  @override
  void dispose() {
    super.dispose();
    _toggleChange.dispose();
  }
  
  @override
  Widget build(BuildContext context) {}
}
```

data_notifier.dart
``` dart
class DataNotifier extends ChangeNotifier{
  bool toggle=false;
  change(){
    notifyListeners();
  }
}
```
