// have prefix   bites:restaurants:something here
//

export function getKeyName(...args: string[]) {
    return `bites:${args.join(":")}`;
}

//how you call it getKeyName ("restaurant", id)
//
//helper function to make key with the right grouping:id format
export const restaurantKeyById = (id: string) => getKeyName("restaurants", id);
