exports.min = function min(array) {
    if (typeof array !== "undefined" && array.length > 0) {
        let arrayElement, minElement, arrayElementPrevious;
        for (arrayElement of array) {
            minElement = minElement === undefined ? arrayElement : minElement;
            if (arrayElement <= arrayElementPrevious) {
                minElement =
                    arrayElement <= minElement ? arrayElement : minElement;
            }
            arrayElementPrevious = arrayElement;
        }
        return minElement;
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (typeof array !== "undefined" && array.length > 0) {
        let arrayElement, maxElement, arrayElementPrevious;
        for (arrayElement of array) {
            maxElement = maxElement === undefined ? arrayElement : maxElement;
            if (arrayElement >= arrayElementPrevious) {
                maxElement =
                    arrayElement >= maxElement ? arrayElement : maxElement;
            }
            arrayElementPrevious = arrayElement;
        }
        return maxElement;
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (typeof array !== "undefined" && array.length > 0) {
        let numberOfElements = array.length;
        let sum, arrayElement, averageValue;

        for (arrayElement of array) {
            if (isNaN(sum)) {
                sum = arrayElement;
            } else {
                sum += arrayElement;
                averageValue = sum / numberOfElements;
            }
        }
        return averageValue;
    } else {
        return 0;
    }
};