const button = document.getElementById("start");

button.addEventListener("click", () => {

    document.body.innerHTML = `

    <div class="loading">

        <h1>Loading Memories...</h1>

        <div class="bar">

            <div class="progress"></div>

        </div>

        <p id="percent">0%</p>

    </div>

    `;

    let value = 0;

    let interval = setInterval(() => {

        value++;

        document.querySelector(".progress").style.width = value + "%";

        document.getElementById("percent").innerHTML = value + "%";

        if(value >=100){

            clearInterval(interval);

            document.body.innerHTML=`

            <div class="welcome">

            <h1>Happy Birthday ❤️</h1>

            <h2>Welcome, Raina</h2>

            <p>Let's begin our journey...</p>

            </div>

            `;

        }

    },40);

});
