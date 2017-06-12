var tape = require("tape"),
    axis = require("../");

tape("foo() returns the answer to the ultimate question of life, the universe, and everything.", function(test) {
   test.equal(axis.xaxisLinear().labelWidth(), 0);
  test.end();
});
