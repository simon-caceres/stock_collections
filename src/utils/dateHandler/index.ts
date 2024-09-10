export class DateHandler {

    startDate: Date;
    endDate: Date;

    constructor (startDate: string, endDate: string) {
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
    }

    calculateDiffInTime () {
        return this.endDate.getTime() - this.startDate.getTime()
    };

    calculateDiffInYears () {
        const diffInTime = this.calculateDiffInTime();
        return diffInTime / (1000 * 3600 * 24 * 365.25);
    };
};
