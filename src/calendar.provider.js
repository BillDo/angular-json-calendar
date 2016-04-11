export class bcCalendarConfig {

    // Define defaults
    constructor() {

        // The calendar will begin with today
        // TODO: Remove 'add'
        this.startDate = moment(new Date().toISOString()).startOf('day').add(1, 'days');

        // The default interval type [day|week|month]
        this.nestingDepth = 'month';

        // How many of the interval type should be generated
        this.count = 1;

        // Define the different possible representations of the weekday
        this.weekdayStyle = {
            letter: [
                'S',
                'M',
                'T',
                'W',
                'T',
                'F',
                'S',
            ],
            abbreviation: [
                'Sun',
                'Mon',
                'Tue',
                'Wed',
                'Thur',
                'Fri',
                'Sat',
            ],
            word: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Satday',
            ],
        };

        // Set the default word type (M vs Mon vs Monday)
        this.weekTitleFormat = 'abbreviation';

        // Should days be organized by week?
        this.organizeWeeks = true;

    }




    $get() {
        return this;
    }


}

