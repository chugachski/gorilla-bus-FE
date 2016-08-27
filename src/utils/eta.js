const dist = 5;
let toEndShuttle = true;
let toEndUser = true;
let shuttlePos = 0;
let userPos = 3;

// same dir case
if (toEndShuttle === toEndUser){
    console.log('same dir')
    if (toEndShuttle && shuttlePos < userPos){
        console.log('shuttle behind, see you shortly')
    } else{
        console.log('shuttle ahead, I have to turn around twice')
    }
    // opp dir case
  } else{
      console.log('opp dir')
      console.log('catch you after I turn around once')
  }
