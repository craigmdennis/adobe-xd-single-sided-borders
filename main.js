const { prompt } = require("./lib/dialogs.js");

// Calculate width/height for borders using stroke gap/offset
// Determine if selection has a stroke
// Map existing stroke to reusable object for modification
    // stroke = { top: 0, right: 0, bottom: 0, left: 0 };

// Detect if shape resizes

// Apply border top
function borderTop(selection) {
    console.log("Top")
    // https://adobexdplatform.com/plugin-docs/reference/scenegraph.html#graphicnodestrokedasharray--arraynumber
    selection.items.forEach(function (obj) {
        obj.strokeDashOffset = 0;
        obj.strokeDashArray = [obj.width, obj.height + obj.width + obj.width];
    });
}

// Apply border right
function borderRight(selection) {
    console.log("Right")
    selection.items.forEach(function (obj) {
        obj.strokeDashOffset = -obj.width;
        obj.strokeDashArray = [obj.height, obj.width + obj.width + obj.height];
    });
}

// Apply border bottom
function borderBottom(selection) {
    console.log("Bottom")
    selection.items.forEach(function (obj) {
        obj.strokeDashOffset = -obj.width - obj.height;
        obj.strokeDashArray = [obj.width, obj.height + obj.width + obj.height];
    });
}

// Apply border left
function borderLeft(selection) {
    console.log("Left")
    selection.items.forEach(function (obj) {
        obj.strokeDashOffset = - obj.width - obj.height - obj.width;
        obj.strokeDashArray = [obj.height, obj.width + obj.height + obj.width];
    });
}

function borderReset(selection) {
    console.log("Reset")
    selection.items.forEach(function (obj) {
        obj.strokeDashOffset = 0;
        obj.strokeDashArray = [];
    });
}
    

module.exports = {
    commands: {
        "BorderTop": borderTop,
        "BorderRight": borderRight,
        "BorderBottom": borderBottom,
        "BorderLeft": borderLeft,
        "BorderReset": borderReset,
    }
}