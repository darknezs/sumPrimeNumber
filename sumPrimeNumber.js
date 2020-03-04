var sum = 0;
  for(var i=1;i<=100;i++){
    var count =0;
    for(var j=1;j<=100;j++){
      if(i%j==0)
      {
        count++;
      }
    }
    if(count==2){
      console.log(i)
      sum = sum + i;
    }
  }
  console.log(sum);
