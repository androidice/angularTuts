export class Vendor {
    constructor() {
        this.isPublished = false;
        this.isPrimaryVendor = false;
        this.actionButtons = [{ label: '', url: '' }];
        this.background = [{ color: '' }];
        this.logo = {
            name: '',
            type: '',
            size: '',
            url: ''
        };
        this.createdBy = {
            id: '',
            username: ''
        };
        this.updatedBy = {
            id: '',
            username: ''
        };
    }
}
//# sourceMappingURL=vendor.js.map