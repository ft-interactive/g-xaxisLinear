# xaxisLinear

Pre styled and positioned linear x-axis for use with the FT's g-chartframe architecture as part of the Visual Vocabulary. As the name suggests it creates a linear x-axis that can be appended to the .plot obejct in the g-chartframe hopefully eliminating the need to code another standard x-axis.

Will also work with other builds where the axis is called into an svg.



### Prerequisites
The FT axis styles---add the folowwing link in your index file header

The [d3 library](https://d3js.org/) is already installed in the build

## Before starting

<b>Note</b> The <b>.range()</b> of the x-axis should be determind in part by the <b>.labelWidth()</b> of the y-axis, so it is advisable to ad your y-axis first. See the secton on positioning at [yaxisLinear](https://github.com/ft-interactive/g-yaxislinear).


## Installing
### Manually install

Add the following line to the header of you index.html file.

``` html
<script src="To come"> </script>

```

### NPM install
Not yet deployed

## Getting started
<b>Note</b> All examples shown are from the web frame style

Add the following code to your index.js to append a default x-axis to the .plot object (grey here but is not normally visible)

```
let myXAxis = gAxis.xaxisLinear;
currentFrame.plot()
	.call(myXAxis);
```

![alt tag](https://github.com/ft-interactive/g-xaxisLinear/blob/master/images/default.png)

Set the <b>.range()</b> and the <b>.ticksize()</b> to the dimensions of the current frame so that the axis fits correctly

```
let myXAxis = gAxis.xaxisLinear;

myXAxis
    .range([0,currentFrame.dimension().width])
    .tickSize(currentFrame.dimension().height);

currentFrame.plot()
	.call(myXAxis);
```
![alt tag](https://github.com/ft-interactive/g-xaxisLinear/blob/master/images/position.png)

## API reference

#myAxis<b>.domain([Array])</b> defines the axis domain in the same way as you would when creating a normal d3.scaleLinear(). If no <b>.domain()</b> is defined the default is [0,100]

#myAxis<b>.range([Array])</b> defines the axis  range in the same way as you would when creating a normal d3.scaleLinear(). If no <b>.range()</b> is defined the default is [0,220]). This is usually set to the width of the current frame and donme after the y-axis has been called. See the secton on positioning at [yaxisLinear](https://github.com/ft-interactive/g-yaxislinear).

#myAxis<b>.offset([Number])</b> Defines the distance the x-axis is positioned from the top of its container but is nearly always set to zero on a linear type axis as the <b>.tickSize() </b> is used to determine the correct positioning of the axis within the current. It is used when short ticks are required

#myAxis<b>.numTicks([Number])</b> Dtermines how many ticks and therefore the label interval of the axis

## Examples

### Nember of ticks

```
let myXAxis = gAxis.xaxisLinear;

myXAxis
    .range([0,currentFrame.dimension().width])
    .tickSize(currentFrame.dimension().height)
    .numTicks(10);

currentFrame.plot()
	.call(myXAxis);
```

![alt tag](https://github.com/ft-interactive/g-xaxisLinear/blob/master/images/numTicks.png)







