```dark
 behaviors: [
    charts.SeriesLegend.customLayout(
      CustomLegendBuilder(),
      // Other legend properties here
    ),
  ],
```

```dark
class CustomLegendBuilder extends charts.LegendContentBuilder{
  @override
  Widget build(BuildContext context, LegendState legendState, Legend legend, {bool showMeasures}) {
    /*
      Implement your custom layout logic here. You should take into account how long
      your legend names are and how many legends you have. For starters you
      could put each legend on its own line.
    */

    return Container(
      color: Colors.red,
      height: 25.0,
      child: Text('MY CUSTOM LEGEND'),
    );
  }
}
```
