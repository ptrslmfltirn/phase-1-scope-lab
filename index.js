var customerName = "bob"
function upperCaseCustomerName() {
    var stageOne = `${customerName}`.toUpperCase()
    customerName = stageOne
}
function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}
const leastFavoriteCustomer = 'billy'
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'billy two'
}