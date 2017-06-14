# xaxisLinear

Pre styled and positioned linear x-axis for use with the FT's g-chartframe architecture as part of the Visual Vocabulary. As the name suggests it creates a linear x-axis that can be appended to the .plot obejct in the g-chartframe hopefully eliminating the need to code another standard x-axis.

Will also work with other builds where the axis is called into an svg.



### Prerequisites
The FT axis styles---add the folowwing link in your index file header

The [d3 library](https://d3js.org/) is already installed in the build

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

![alt tag](https://github.com/ft-interactive/g-xaxislinear/blob/master/images/default.png)