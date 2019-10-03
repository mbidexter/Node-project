var EventEmitter = require("events");
var myEmitter= new EventEmitter();

myEmitter.on("ButtonClick",function(ButtonName)
{console.log("A button has been pressed" + ButtonName);
});

myEmitter.on("ButtonClick",function()
{
    console.log("called after first listener" );
});

myEmitter.on("AnotherEvent",function()
{
    console.log("I am another event");
    console.log("----------------");
    myEmitter.emit("ButtonClick","RedButton");
});
myEmitter.on("ButtonClick",function()
{
    console.log("called after second listener" );
});

myEmitter.emit("AnotherEvent");

