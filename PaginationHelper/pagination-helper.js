export class PaginationHelper {

	constructor(collection, itemsPerPage) {
		// The constructor takes in an array of items and a integer indicating how many
		// items fit within a single page
		this.collection = collection;
		this.itemsPerPage = itemsPerPage;
	}
	itemCount() {
		// returns the number of items within the entire collection
		return this.collection.length;
	}
	pageCount() {
		// returns the number of pages
		return Math.ceil(this.collection.length / this.itemsPerPage);
	}
	pageItemCount(pageIndex) {
		// returns the number of items on the current page. page_index is zero based.
		// this method should return -1 for pageIndex values that are out of range
		if(pageIndex<0) return -1;
		let start = pageIndex * this.itemsPerPage;
		let end = start + this.itemsPerPage;
		let length = this.collection.slice(start, end).length
		return length == 0 ? -1 : length;

		//return pageIndex < 0 || pageIndex >= this.pageCount() ? -1 : pageIndex < this.pageCount() - 1 ? this.itemsPerPage : this.itemCount() % this.itemsPerPage;
	}
	pageIndex(itemIndex) {
		// determines what page an item is on. Zero based indexes
		// this method should return -1 for itemIndex values that are out of range
		if (itemIndex < 0 || itemIndex > this.collection.length - 1) {
			return -1;
		} else {
			return Math.floor(itemIndex / this.itemsPerPage);
		}

		//return itemIndex < 0 || itemIndex >= this.itemCount() ? -1 : itemIndex / this.itemsPerPage ^ 0;

	}
}

