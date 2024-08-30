module.exports.filterRepeated = function (arr) {

    let selectedItems = arr.filter(item => item.selected)
    return selectedItems.filter((item, index) => selectedItems.findIndex(w => w.name == item.name ) === index);

}
