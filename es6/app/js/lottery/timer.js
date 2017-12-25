class Timer {
  countdown(end,update,handle){
    const now = new Date().getTime();
    const self = this;
    if (now-end) {
      handle.call(self);
    }else {
      let last_time = end-now;
      const px_d = 1000*60*60*24;
      const px_h = 1000*60*60;
      const px_m = 1000*60
      const px_s = 1000;
      let d = Math.floor(last_time/px_d);
      let h = Math.floor((last_time-d*px_d)/px_h);
      let m = Math.floor((last_time-d*px_d-h*px_h)/px_m);
      let s = Math.floor((last_time-d*px_d-h*px_h-m*px_m)/px_s);
      let r = [];
      if (d>0) {
        r.push(`<em>${d}</em>天`)
      }
    }
  }
}
