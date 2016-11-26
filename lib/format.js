exports.compose = (communityCards, holeCards) => communityCards.concat(holeCards);

exports.uniq = arr => {
   var u = {}, a = [];
   for(var i = 0, l = arr.length; i < l; ++i){
      if(u.hasOwnProperty(arr[i])) {
         continue;
      }
      a.push(arr[i]);
      u[arr[i]] = 1;
   }
   return a;
};
