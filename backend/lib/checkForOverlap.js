'use strict';

const Service = {
  overlapChecker: (date, dateTime, duration, list) => {
    let approvedToPost = true;
    let arr = [];
    for(let i = 0; i < list.length;  i++) {
      if(list[i].data.date === date) {
        arr.push(list[i]);
      }
    }
    console.log(arr);
  }
};

module.exports = Service;
