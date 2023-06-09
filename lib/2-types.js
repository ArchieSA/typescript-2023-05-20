"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTrue = void 0;
// Boolean
var isTrue = true;

// Number
exports.isTrue = isTrue;
var num = 123;
var float = 12.3;
var binary = 5;

// BigInt
var bigNum = 100n;

// String
var str = "Hello";
str = "123";

// Null
var nullLet = null;

// Undefined
var undefinedLet = undefined;

// Any
var anyLet = 123;

// Unknown
var unknownLet = {
  a: 123
};

// Object
var objectLet = {
  a: 123,
  b: "Hello"
};

// Array
var arrayLet = ["123", "123", "Hello"];

// Tuple
var tupleLet = ["", 123, true];

// Function
var functionLet;
function useState(initialState) {
  var state = initialState;
  var setState = function setState() {};
  // ...
  return [state, setState];
}
function testFunction(a) {
  console.log("123");
}
var functionConst = function functionConst() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Hello";
};

// Literal
var fontWeight = 600;
var position = "absolute";
var size = "m";
var intersectionLet;
function test(a) {
  return a.c;
}
function functionWithIntersection(a) {
  return a;
}
test({
  a: "",
  c: true
});
functionWithIntersection({
  a: "",
  b: 123
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc1RydWUiLCJleHBvcnRzIiwibnVtIiwiZmxvYXQiLCJiaW5hcnkiLCJiaWdOdW0iLCJzdHIiLCJudWxsTGV0IiwidW5kZWZpbmVkTGV0IiwidW5kZWZpbmVkIiwiYW55TGV0IiwidW5rbm93bkxldCIsImEiLCJvYmplY3RMZXQiLCJiIiwiYXJyYXlMZXQiLCJ0dXBsZUxldCIsImZ1bmN0aW9uTGV0IiwidXNlU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwidGVzdEZ1bmN0aW9uIiwiY29uc29sZSIsImxvZyIsImZ1bmN0aW9uQ29uc3QiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmb250V2VpZ2h0IiwicG9zaXRpb24iLCJzaXplIiwiaW50ZXJzZWN0aW9uTGV0IiwidGVzdCIsImMiLCJmdW5jdGlvbldpdGhJbnRlcnNlY3Rpb24iXSwic291cmNlcyI6WyIuLi9zcmMvMi10eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCb29sZWFuXG5leHBvcnQgbGV0IGlzVHJ1ZTogYm9vbGVhbiA9IHRydWU7XG5cbi8vIE51bWJlclxubGV0IG51bTogbnVtYmVyID0gMTIzO1xubGV0IGZsb2F0OiBudW1iZXIgPSAxMi4zO1xubGV0IGJpbmFyeTogbnVtYmVyID0gMGIxMDE7XG5cbi8vIEJpZ0ludFxubGV0IGJpZ051bTogYmlnaW50ID0gMTAwbjtcblxuLy8gU3RyaW5nXG5sZXQgc3RyOiBzdHJpbmcgPSBcIkhlbGxvXCI7XG5zdHIgPSBcIjEyM1wiO1xuXG4vLyBOdWxsXG5sZXQgbnVsbExldDogbnVsbCA9IG51bGw7XG5cbi8vIFVuZGVmaW5lZFxubGV0IHVuZGVmaW5lZExldDogdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4vLyBBbnlcbmxldCBhbnlMZXQ6IGFueSA9IDEyMztcblxuLy8gVW5rbm93blxubGV0IHVua25vd25MZXQ6IHVua25vd24gPSB7IGE6IDEyMyB9O1xuXG4vLyBPYmplY3RcbmxldCBvYmplY3RMZXQ6IHsgYTogbnVtYmVyOyBiOiBzdHJpbmcgfSA9IHsgYTogMTIzLCBiOiBcIkhlbGxvXCIgfTtcblxuLy8gQXJyYXlcbmxldCBhcnJheUxldDogc3RyaW5nW10gPSBbXCIxMjNcIiwgXCIxMjNcIiwgXCJIZWxsb1wiXTtcblxuLy8gVHVwbGVcbmxldCB0dXBsZUxldDogW3N0cmluZywgbnVtYmVyLCBib29sZWFuXSA9IFtcIlwiLCAxMjMsIHRydWVdO1xuXG4vLyBGdW5jdGlvblxubGV0IGZ1bmN0aW9uTGV0OiAoYTogbnVtYmVyKSA9PiBzdHJpbmc7XG5cbmZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZTogc3RyaW5nKTogW3N0cmluZywgKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRdIHtcbiAgbGV0IHN0YXRlOiBzdHJpbmcgPSBpbml0aWFsU3RhdGU7XG4gIGNvbnN0IHNldFN0YXRlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCA9ICgpID0+IHt9O1xuICAvLyAuLi5cbiAgcmV0dXJuIFtzdGF0ZSwgc2V0U3RhdGVdO1xufVxuXG5mdW5jdGlvbiB0ZXN0RnVuY3Rpb24oYTogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnNvbGUubG9nKFwiMTIzXCIpO1xufVxuXG5jb25zdCBmdW5jdGlvbkNvbnN0ID0gKGluaXRpYWxTdGF0ZTogc3RyaW5nID0gXCJIZWxsb1wiKTogdm9pZCA9PiB7fTtcblxuLy8gTGl0ZXJhbFxubGV0IGZvbnRXZWlnaHQ6IDUwMCB8IDYwMCB8IDcwMCB8IFwiYm9sZFwiID0gNjAwO1xubGV0IHBvc2l0aW9uOiBcImFic29sdXRlXCIgPSBcImFic29sdXRlXCI7XG5sZXQgc2l6ZTogXCJzXCIgfCBcIm1cIiB8IFwibFwiID0gXCJtXCI7XG5cbmxldCBpbnRlcnNlY3Rpb25MZXQ6IHN0cmluZyAmIG51bWJlcjtcblxuZnVuY3Rpb24gdGVzdChhOiB7IGE6IHN0cmluZzsgYzogYm9vbGVhbiB9IHwgeyBiOiBudW1iZXI7IGM6IHN0cmluZyB9KSB7XG4gIHJldHVybiBhLmM7XG59XG5cbmZ1bmN0aW9uIGZ1bmN0aW9uV2l0aEludGVyc2VjdGlvbihhOiB7IGE6IHN0cmluZyB9ICYgeyBiOiBudW1iZXIgfSkge1xuICByZXR1cm4gYTtcbn1cblxudGVzdCh7IGE6IFwiXCIsIGM6IHRydWUgfSk7XG5mdW5jdGlvbldpdGhJbnRlcnNlY3Rpb24oeyBhOiBcIlwiLCBiOiAxMjMgfSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ08sSUFBSUEsTUFBZSxHQUFHLElBQUk7O0FBRWpDO0FBQUFDLE9BQUEsQ0FBQUQsTUFBQSxHQUFBQSxNQUFBO0FBQ0EsSUFBSUUsR0FBVyxHQUFHLEdBQUc7QUFDckIsSUFBSUMsS0FBYSxHQUFHLElBQUk7QUFDeEIsSUFBSUMsTUFBYyxHQUFHLENBQUs7O0FBRTFCO0FBQ0EsSUFBSUMsTUFBYyxHQUFHLElBQUk7O0FBRXpCO0FBQ0EsSUFBSUMsR0FBVyxHQUFHLE9BQU87QUFDekJBLEdBQUcsR0FBRyxLQUFLOztBQUVYO0FBQ0EsSUFBSUMsT0FBYSxHQUFHLElBQUk7O0FBRXhCO0FBQ0EsSUFBSUMsWUFBdUIsR0FBR0MsU0FBUzs7QUFFdkM7QUFDQSxJQUFJQyxNQUFXLEdBQUcsR0FBRzs7QUFFckI7QUFDQSxJQUFJQyxVQUFtQixHQUFHO0VBQUVDLENBQUMsRUFBRTtBQUFJLENBQUM7O0FBRXBDO0FBQ0EsSUFBSUMsU0FBbUMsR0FBRztFQUFFRCxDQUFDLEVBQUUsR0FBRztFQUFFRSxDQUFDLEVBQUU7QUFBUSxDQUFDOztBQUVoRTtBQUNBLElBQUlDLFFBQWtCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQzs7QUFFaEQ7QUFDQSxJQUFJQyxRQUFtQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7O0FBRXpEO0FBQ0EsSUFBSUMsV0FBa0M7QUFFdEMsU0FBU0MsUUFBUUEsQ0FBQ0MsWUFBb0IsRUFBcUM7RUFDekUsSUFBSUMsS0FBYSxHQUFHRCxZQUFZO0VBQ2hDLElBQU1FLFFBQWlDLEdBQUcsU0FBcENBLFFBQWlDQSxDQUFBLEVBQVMsQ0FBQyxDQUFDO0VBQ2xEO0VBQ0EsT0FBTyxDQUFDRCxLQUFLLEVBQUVDLFFBQVEsQ0FBQztBQUMxQjtBQUVBLFNBQVNDLFlBQVlBLENBQUNWLENBQVMsRUFBUTtFQUNyQ1csT0FBTyxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO0FBQ3BCO0FBRUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQTZDO0VBQUEsSUFBekNOLFlBQW9CLEdBQUFPLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFqQixTQUFBLEdBQUFpQixTQUFBLE1BQUcsT0FBTztBQUFZLENBQUM7O0FBRWxFO0FBQ0EsSUFBSUUsVUFBb0MsR0FBRyxHQUFHO0FBQzlDLElBQUlDLFFBQW9CLEdBQUcsVUFBVTtBQUNyQyxJQUFJQyxJQUFxQixHQUFHLEdBQUc7QUFFL0IsSUFBSUMsZUFBZ0M7QUFFcEMsU0FBU0MsSUFBSUEsQ0FBQ3BCLENBQXVELEVBQUU7RUFDckUsT0FBT0EsQ0FBQyxDQUFDcUIsQ0FBQztBQUNaO0FBRUEsU0FBU0Msd0JBQXdCQSxDQUFDdEIsQ0FBZ0MsRUFBRTtFQUNsRSxPQUFPQSxDQUFDO0FBQ1Y7QUFFQW9CLElBQUksQ0FBQztFQUFFcEIsQ0FBQyxFQUFFLEVBQUU7RUFBRXFCLENBQUMsRUFBRTtBQUFLLENBQUMsQ0FBQztBQUN4QkMsd0JBQXdCLENBQUM7RUFBRXRCLENBQUMsRUFBRSxFQUFFO0VBQUVFLENBQUMsRUFBRTtBQUFJLENBQUMsQ0FBQyJ9