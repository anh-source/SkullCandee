const model ={
    productInfo: null,
    currentProductDetail: null,
    azProductInfo: null,
    zaProductInfo: null
}

model.saveProductInfo = function (info) {
    model.productInfo = info
    
}

model.saveCurrentProductInfo = function (info) {
    model.currentProductInfo = info
    
}

model.saveAzProductInfo = function (info) {
    model.azProductInfo = info
    
}

model.saveZaProductInfo = function (info) {
    model.zaProductInfo = info
    
}


