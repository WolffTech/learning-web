/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timeLeft) {
    if (timeLeft === undefined) {
        return 'You forgot to set the timer.';
    } else if (timeLeft === 0) {
        return 'Lasagna is done.';
    } else {
        return 'Not done, please wait.';
    }
}

export function preparationTime(layers, num) {
    return num === undefined ? layers.length * 2 : layers.length * num;

    // if (num === undefined) {
    //    return layers.length * 2;
    //    } else {
    //    return layers.length * num;
    // )
}

export function quantities(layers) {
    let noodles = 0;
    let sauce = 0;
    for (let i=0; i < layers.length; i++) {
        if (layers[i] === 'sauce') { sauce += 0.2; }
        if (layers[i] === 'noodles') { noodles += 50; }
    }
    return { noodles: noodles, sauce: sauce };
}

export function addSecretIngredient(array1, array2) {
    array2.push(array1[array1.length - 1]);
}

export function scaleRecipe(recipe, portions) {
    const newRecipe = { ...recipe };
    for (const ingredient in newRecipe) {
        newRecipe[ingredient] *= portions / 2;
    }
    return newRecipe;
}
