// app.js

document.addEventListener("DOMContentLoaded", function () {
  const [isPlaying, setPlaying] = [false, function (value) {}];
  const audioControls = document.getElementById("audioControls");
  const exSet = function (value) {};

  // Define play and stop functions using useSound
  const [play, { stop }] = useSound(audio1, { volume: 1 });

  function playSound() {
    if (!isPlaying) {
      play();
      setPlaying(true);
    }
  }

  function pauseSound() {
    stop();
    setPlaying(false);
  }

  // Cleanup when the component unmounts
  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  function handleValue() {
    var nameuser = document.getElementById("text1");
    var value1 = document.getElementById("text2");
    var value2 = value1.value;
    var nameuser2 = nameuser.value;

    if (value2 === "" || value2 === "00-00-000" || nameuser2 === "") {
      // Display an alert or take any other action (e.g., prevent form submission)
      alert("User name and date ai olungaga kudukavum - ippadiku Manoj");
    } else {
      const birthDateObject = new Date(value2);
      const currentDate = new Date();
      const timeDifference = currentDate - birthDateObject;
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      if (days > 1830) {
        var show = document.getElementById("innr");
        show.innerText = `Dear ${nameuser2}, you've successfully lived ${days} days. Play the Audio Button Above to See your Future`;
        var show1 = document.getElementById("innr");

        if (show1 !== "Enter Your Name and Birthday Date Above") {
          exSet(true);
        }
      } else {
        show = document.getElementById("innr");
        show.innerText = `Piranthu ${days} Days Thaan Ahuthu Sinna podiyan bro Nee poi Sutti tv paru poo bro`;
        show1 = document.getElementById("innr");
        exSet(false);
      }
    }
  }

  // Attach the event listener to the button click event
  const button = document.querySelector(".btn");
  button.addEventListener("click", handleValue);

  // Example event listener for sound icon
  audioControls.addEventListener("click", function () {
    isPlaying ? pauseSound() : playSound();
  });
});
