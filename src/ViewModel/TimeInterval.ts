export default class TimeInterval {
    private readonly milisecondsPerSecond = 1000;
    private readonly milisecondsPerMinute = this.milisecondsPerSecond * 60;
    private readonly milisecondsPerHour = this.milisecondsPerMinute * 60;
    private readonly milisecondsPerDay = this.milisecondsPerHour * 24;

    private _days: number;
    private _hours: number;
    private _minutes: number;
    private _seconds: number;

    private _startDate: Date;
    private _endDate: Date;

    constructor(start: Date, end: Date) {
        this._startDate = start;
        this._endDate = end;

        this.calculateTimeInterval();
    }

    set startDate(date: Date) {
        this._startDate = date;
        this.calculateTimeInterval();
    }

    set endDate(date: Date) {
        this._endDate = date;
        this.calculateTimeInterval();
    }

    get days(): number {
        return this._days;
    }

    get hours(): number {
        return this._hours;
    }

    get minutes(): number {
        return this._minutes;
    }

    get seconds(): number {
        return this._seconds;
    }

    private calculateTimeInterval() {
        const startTimeInMiliseconds = this._startDate.getTime();
        this._endDate.setHours(0, 0, 0, 0);

        if (startTimeInMiliseconds >= this._endDate.getTime()) {
            this._endDate = new Date(startTimeInMiliseconds);
        }

        let diffMiliseconds = this._endDate.getTime() - startTimeInMiliseconds;
        this._days = Math.floor(diffMiliseconds / this.milisecondsPerDay);
        diffMiliseconds -= this._days * this.milisecondsPerDay;

        this._hours = Math.floor(diffMiliseconds / this.milisecondsPerHour) % 24;
        diffMiliseconds -= this._hours * this.milisecondsPerHour;

        this._minutes = Math.floor(diffMiliseconds / this.milisecondsPerMinute) % 60;
        diffMiliseconds -= this._minutes * this.milisecondsPerMinute;

        this._seconds = Math.floor(diffMiliseconds / this.milisecondsPerSecond);
        diffMiliseconds -= this._seconds * this.milisecondsPerSecond;
    }
}
