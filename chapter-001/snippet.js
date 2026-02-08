function snupper(text, length) {
    var ellipsis = '...';
    if (text.length <= length) {
        return text;
    }
    var result = text.slice(0, length - ellipsis.length);
    var lastSpaceIndex = result.lastIndexOf(' ');
    if (lastSpaceIndex > 0) {
        result = "".concat(result.slice(0, lastSpaceIndex)).concat(ellipsis);
    }
    return result;
}
var result = snupper('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 20);
console.log(result); // Output: "Lorem ipsum dolor..."
