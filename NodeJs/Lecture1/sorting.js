//named export 
export function bubbleSort( arr ){

    if(arr.length <= 0){
        return arr;
    }
    for(let i = 1; i < arr.length; i++){
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp; 
            }
        }
    }
    return arr;
}

// default export
export default function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex = i;
        let min = arr[i];
        let j
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<=min){
                minIndex = j;
                min = arr[j];
            }
        }
        if(minIndex!=i){
            let temp = arr[i];
            arr[i] = min;
            arr[minIndex] = temp
        }
    }
    return arr;
}  

/*for commonjs moduling
module.exports = {bubbleSort}
another way
module.exports.bubbleSort = bubbleSort;
*/


