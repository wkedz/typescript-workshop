enum Operator {
    ADD = "+",
    SUBTRACT = "-",
    MULTIPLY = "*",
    DIVIDE = "/"
};

const calculate = (a: number, b: number, operator: Operator): number => {
    switch (operator) {
        case Operator.ADD:
            return a + b;
        case Operator.SUBTRACT:
            return a - b;
        case Operator.MULTIPLY:
            return a * b;
        case Operator.DIVIDE:
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;
        default:
            throw new Error("Invalid operator");
    }
};