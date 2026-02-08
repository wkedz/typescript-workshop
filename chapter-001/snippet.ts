function snupper (text: string, length: number): string {
    const ellipsis = '...';
    if (text.length <= length) {
        return text;
    }
    let result = text.slice(0, length - ellipsis.length);
    const lastSpaceIndex = result.lastIndexOf(' ');
    if(lastSpaceIndex > 0) {
        result = `${result.slice(0, lastSpaceIndex)}${ellipsis}`
    }
    return result;
}

const result = snupper('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 20);
console.log(result); // Output: "Lorem ipsum dolor..."