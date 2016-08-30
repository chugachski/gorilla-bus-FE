const eta = function(routeDist, toEndShuttle, toEndUser, shuttlePos, userPos){

  // same dir case
  if (toEndShuttle === toEndUser){
      console.log('same dir')
      // going toward end
      if (toEndShuttle && shuttlePos < userPos){
          console.log('shuttle behind, see you shortly')
          console.log('up:', userPos)

        // going toward start
      } else{
          console.log('shuttle ahead, I have to turn around twice')
      }
      // opp dir case
    } else{
        console.log('opp dir')
        console.log('catch you after I turn around once')
    }

}

eta(5, true, true, 2, 4);
