function totalPhoneBill(str) {
  //  console.log(str);
    var totalSms = 0;
  var totalCalls = 0;
    var str2 = str.split(', ');
    console.log(str2);
    for (var i=0; i<str2.length; i++) {
      var str3 = str2[i];
      if (str3.startsWith('sms')) {
      totalSms++
      }
      else if (str3.startsWith('call')) {
      totalCalls++
      }
  }
    returns ('R' + (totalSms*0.65 + totalCalls*2.75).toFixed(2));
}

var rewards = totalPhoneBill('call, sms, call, sms, sms');
var totalBill = rewards;