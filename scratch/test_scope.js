function foo() {
    console.log("this is global?", this === global);
    console.log("this.a is:", this.a);
}
var a = "module local";
global.a = "actually global";

foo();
