"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateHandler = void 0;
class DateHandler {
    constructor(startDate, endDate) {
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
    }
    calculateDiffInTime() {
        return this.endDate.getTime() - this.startDate.getTime();
    }
    ;
    calculateDiffInYears() {
        const diffInTime = this.calculateDiffInTime();
        return diffInTime / (1000 * 3600 * 24 * 365.25);
    }
    ;
}
exports.DateHandler = DateHandler;
;
