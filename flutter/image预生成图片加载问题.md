``` dark
 child: Image.network(
          Api.baseUrlImg+item.pathFile,
          errorBuilder: (BuildContext context, Object exception, StackTrace? stackTrace) {
            Timer(const Duration(seconds: 2), () { //callback function
              getData();
            });
            return const Image(
                image: AssetImage("assets/images/load.gif")
            );
          },
        )
        /*child:item.state==0? Image(
          image: NetworkImage(Api.baseUrlImg+item.pathFile),
        ):RotationTransition(
          turns: _controller,
          child: const Icon(Icons.rotate_right,color: Colors.white60),
        ),*/
```
