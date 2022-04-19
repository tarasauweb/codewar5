function getCount(str) {
    var vowelsCount = 0;
    
    // enter your majic here

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let arrStr = []
    for(let i = 0 ;i<str.length;i++) {
        arrStr.push(str[i])
    }

    arrStr.forEach(function(item){
        console.log(vowels.includes(item) )
        if(vowels.includes(item) ){
            vowelsCount++
        }
    })
   
    return vowelsCount;
  }


  getCount('abre')