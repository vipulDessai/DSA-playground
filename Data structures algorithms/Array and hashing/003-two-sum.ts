function twoSum(list: number[], target: number): number[] | false {
    const prevMap = new Map<number, number>();
    
    for (let index = 0; index < list.length; index++) {
        const diff = target - list[index];
        const diffExistInHashMap = prevMap.get(diff);
        if(diffExistInHashMap) {
            return [diffExistInHashMap, index]
        }
        else {
            prevMap.set(list[index], index);
        }
    }

    return false;
}

console.log(twoSum([2, 1, 5, 3], 4))