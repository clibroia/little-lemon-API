var TimeSlotsAPI = {
    fetchData: function(date) {
        let availableTimes = ['19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
        let returnedTimes = [];

        if(typeof(date) !== 'string') {
            throw Error('Wrong data type: date provided must be a string');
        }
        availableSlots = Math.floor(Math.random() * 7);
        for(let i=0; i<availableSlots; i++) {
            index = Math.floor(Math.random() * availableTimes.length);
            returnedTimes.push(availableTimes[index]);
            availableTimes.splice(index, 1);
        }
        returnedTimes.sort();
        return returnedTimes;
    }
}