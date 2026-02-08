function notReturningAnything(): void {
    console.log("This function does not return anything");
}

function notReturningAnythingEither(): never {
    throw new Error("This function never returns");
}

notReturningAnything();
notReturningAnythingEither();