function thousand(num) {
  num = String(num).split(".");
  var arr = num[0].split("").reverse();
  var result = "";
  for (var i = 0; i < arr.length; i++) {
    if (i % 3 === 0 && i != 0) {
      arr[i-1] = "," + arr[i-1];
    }
  }
  arr = arr.reverse().join("");
  if (num[1]) {
    result = arr + "." + num[1];
  } else {
    result = arr;
  }
  return result;
}
thousand(1234567.89);


var urlA = "A",
    urlB = "B",
    urlC = "C";
$.get(urlA, function (data) {
  if (data.success) {
    $.get(urlB, function (data) {
      if (data.success) {
        $.get(urlC, function (data) {
          console.log("ok");
        })
      }
    })
  } 
});

function promise(url) {
  return new Promise(function (resolve, reject) {
    $.get(url, function (data) {
      if (!data.success) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}
promise(urlA)
.then(function () {
  return promise(urlB);
})
.then(function () {
  return promise(urlC);
})
.then(function () {
  console.log("ok");
})