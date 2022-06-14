function print(available, delivery){
    let availableArr = [];
    let deliveryArr = [];
    let outputArr = [];
    for (let i = 0; i < available.length; i += 2){
        let quanity = Number(available[i+1]);
        availableArr[i] = {product: available[i], quanity: quanity}
    }
    for (let i = 0; i < delivery.length; i += 2){
        let quanity = Number(delivery[i+1]);
        let isExist = false;
        deliveryArr[i] = {product: delivery[i], quanity: quanity}
        for (let k = 0; k < availableArr.length; k += 2){
            if (availableArr[k].product == deliveryArr[i].product){
                availableArr[k].quanity += deliveryArr[i].quanity;
                isExist = true;
                break;
            }
        }
        if (isExist == false){
            availableArr[availableArr.length + 1] = deliveryArr[i];
        }
    }
    availableArr.forEach(element => {
        console.log(`${element.product} -> ${element.quanity}`);
    });
}
print([
    'Chips', '5',
    'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]);