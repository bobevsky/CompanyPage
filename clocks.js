function clockJavaScript(argument) {
      var date = new Date();

      var seconds = date.getSeconds();
      var secondsDegrees = (seconds/60)*360 + 90;
      var secondsHand = document.querySelector(".seconds-hand")
      secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
      var secondsHand1 = document.querySelector(".seconds-hand1")
      secondsHand1.style.transform = `rotate(${secondsDegrees}deg)`;
      var secondsHand2 = document.querySelector(".seconds-hand2")
      secondsHand2.style.transform = `rotate(${secondsDegrees}deg)`;
      var secondsHand3 = document.querySelector(".seconds-hand3")
      secondsHand3.style.transform = `rotate(${secondsDegrees}deg)`;
      var secondsHand4 = document.querySelector(".seconds-hand4")
      secondsHand4.style.transform = `rotate(${secondsDegrees}deg)`;
      var secondsHand5 = document.querySelector(".seconds-hand5")
      secondsHand5.style.transform = `rotate(${secondsDegrees}deg)`;


      var minutes = date.getMinutes();
      var minutesDegrees = (minutes/60)*360 + 90;
      var minutesHand = document.querySelector(".minutes-hand")
      minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;


      var minutesHand1 = document.querySelector(".minutes-hand1")
      minutesHand1.style.transform = `rotate(${minutesDegrees}deg)`;
      var minutesHand2 = document.querySelector(".minutes-hand2")
      minutesHand2.style.transform = `rotate(${minutesDegrees}deg)`;
      var minutesHand3 = document.querySelector(".minutes-hand3")
      minutesHand3.style.transform = `rotate(${minutesDegrees}deg)`;
      var minutesHand4 = document.querySelector(".minutes-hand4")
      minutesHand4.style.transform = `rotate(${minutesDegrees}deg)`;
      var minutesHand5 = document.querySelector(".minutes-hand5")
      minutesHand5.style.transform = `rotate(${minutesDegrees}deg)`;


      var hours = date.getHours();      

      var hoursNewYork = hours - 6;
      var hoursDegreesNewYork = (hoursNewYork/12)*360 + 90;
      var hoursHand = document.querySelector(".hours-hand")
      hoursHand.style.transform = `rotate(${hoursDegreesNewYork}deg)`;

      var hoursLondon = hours -1;
      var hoursDegreesLondon = (hoursLondon/12)*360 + 90;
      var hoursHand1 = document.querySelector(".hours-hand1")
      hoursHand1.style.transform = `rotate(${hoursDegreesLondon}deg)`;

      
      var hoursHand2 = document.querySelector(".hours-hand2")
      hoursHand2.style.transform = `rotate(${hoursDegreesNewYork}deg)`;

      var hoursHand3 = document.querySelector(".hours-hand3")
      hoursHand3.style.transform = `rotate(${hoursDegreesNewYork}deg)`;

      var hoursBucharest = hours + 1;
      var hoursDegreesBucharest = (hoursBucharest/12)*360 + 90;
      var hoursHand4 = document.querySelector(".hours-hand4")
      hoursHand4.style.transform = `rotate(${hoursDegreesBucharest}deg)`;

      var hoursWarsaw = hours;
      var hoursDegreesWarsaw = (hoursWarsaw/12)*360 + 90;
      var hoursHand5 = document.querySelector(".hours-hand5")
      hoursHand5.style.transform = `rotate(${hoursDegreesWarsaw}deg)`;
    }
setInterval(clockJavaScript, 1000);