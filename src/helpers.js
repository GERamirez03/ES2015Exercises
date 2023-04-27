/** Array helper functions for fruits array app */

/** Returns a randomly selected item from an array of items */

function choice(items) {
    const length = items.length;
    const randomFloat = Math.random();
    const randomIndex = Math.floor( length * randomFloat );
    return items[randomIndex];
}

/** Removes the first matching item from items, if it exists.
 *  
 *  Returns the removed item, if it exists.
 * 
 *  Otherwise, returns undefined.
 */

function remove(items, item) {
    const index = items.indexOf(item);
    if ( index === -1 ) return undefined;
    const removedItem = items.splice(index, 1);
    return removedItem;
}

export { choice, remove };