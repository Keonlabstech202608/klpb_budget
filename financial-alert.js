// ==========================================
// KEONLABS FINANCIAL ALERT SYSTEM
// ==========================================

// ---------- CREATE ALERT UI ----------

function createFinancialAlertUI() {

    const card = document.createElement("div");

    card.className = "financial-alert-card";

    card.innerHTML = `

        <style>

            .financial-alert-card{
                background:#130d20;
                border:1px solid rgba(160,100,240,0.3);
                border-radius:18px;
                padding:20px;
                margin-top:20px;
                color:white;
            }

            .financial-alert-card h3{
                color:#c084fc;
                margin-bottom:20px;
            }

            .financial-alert-card label{
                display:block;
                margin-top:14px;
                margin-bottom:6px;
                font-size:14px;
                color:#b8b2c8;
            }

            .financial-alert-card input{
                width:100%;
                padding:12px;
                border:none;
                border-radius:10px;
                background:#1c1530;
                color:white;
            }

            .financial-alert-card button{
                width:100%;
                margin-top:15px;
                padding:12px;
                border:none;
                border-radius:10px;
                background:#9333ea;
                color:white;
                font-weight:bold;
                cursor:pointer;
            }

            .financial-alert-status{
                margin-top:15px;
                padding:15px;
                border-radius:10px;
                background:#1c1530;
                color:#aaa;
                font-size:13px;
            }

        </style>

        <h3>
            Financial Alert System
        </h3>

        <label>
            Minimum Net Profit Alert (K)
        </label>

        <input
            type="number"
            id="profitThreshold"
            value="50"
        >

        <label>
            Minimum Income Alert (K)
        </label>

        <input
            type="number"
            id="incomeThreshold"
            value="50"
        >

        <label>
            Alert Time
        </label>

        <input
            type="time"
            id="alertTime"
            value="08:00"
        >

        <label style="margin-top:18px;">
            Enable Alert
        </label>

        <input
            type="checkbox"
            id="enableFinancialAlert"
            checked
        >

        <button onclick="saveFinancialAlertSettings()">
            Save Alert Settings
        </button>

        <button onclick="manualFinancialCheck()">
            Test Alert
        </button>

        <div
            id="financialAlertStatus"
            class="financial-alert-status"
        >
            Financial monitoring ready.
        </div>
    `;

    document
    .getElementById("financialAlertContainer")
    .appendChild(card);
}

// ---------- SAVE SETTINGS ----------

function saveFinancialAlertSettings() {

    const settings = {

        profitThreshold:
            Number(
                document.getElementById("profitThreshold").value
            ),

        incomeThreshold:
            Number(
                document.getElementById("incomeThreshold").value
            ),

        alertTime:
            document.getElementById("alertTime").value,

        enabled:
            document.getElementById("enableFinancialAlert").checked
    };

    localStorage.setItem(
        "financialAlertSettings",
        JSON.stringify(settings)
    );

    showFinancialAlertStatus(
        "Financial alert settings saved.",
        true
    );
}

// ---------- LOAD SETTINGS ----------

function loadFinancialAlertSettings() {

    const saved = JSON.parse(
        localStorage.getItem(
            "financialAlertSettings"
        )
    );

    if(!saved) return;

    document.getElementById("profitThreshold").value =
        saved.profitThreshold;

    document.getElementById("incomeThreshold").value =
        saved.incomeThreshold;

    document.getElementById("alertTime").value =
        saved.alertTime;

    document.getElementById("enableFinancialAlert").checked =
        saved.enabled;
}

// ---------- STATUS ----------

function showFinancialAlertStatus(
    message,
    success = true
){

    const box =
        document.getElementById(
            "financialAlertStatus"
        );

    if(!box) return;

    box.innerHTML = message;

    box.style.color =
        success
        ? "#4ecb8d"
        : "#f87171";
}

// ---------- SOUND ----------

function playFinancialAlertSound() {

    const audio = new Audio(
        "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
    );

    audio.volume = 1;

    audio.play();
}

// ---------- GET VALUES ----------

function getTotalIncome() {

    return Number(
        localStorage.getItem("totalIncome")
    ) || 0;
}

function getNetProfit() {

    return Number(
        localStorage.getItem("netProfit")
    ) || 0;
}

// ---------- CHECK ALERT ----------

function checkFinancialAlert() {

    const settings = JSON.parse(
        localStorage.getItem(
            "financialAlertSettings"
        )
    );

    if(!settings) return;

    if(!settings.enabled) return;

    const income = getTotalIncome();

    const profit = getNetProfit();

    const lowIncome =
        income < settings.incomeThreshold;

    const lowProfit =
        profit < settings.profitThreshold;

    if(lowIncome || lowProfit){

        playFinancialAlertSound();

        showFinancialAlertStatus(

            `
            ALERT ACTIVATED<br><br>

            Income: K${income}<br>
            Net Profit: K${profit}<br><br>

            Financial performance below target.
            `,

            false
        );

        if(typeof showNotification === "function"){

            showNotification(
                "Financial performance below target."
            );
        }

    }else{

        showFinancialAlertStatus(

            `
            Financial status healthy.<br><br>

            Income: K${income}<br>
            Net Profit: K${profit}
            `,

            true
        );
    }
}

// ---------- MANUAL TEST ----------

function manualFinancialCheck() {

    checkFinancialAlert();
}

// ---------- DAILY TIMER ----------

setInterval(() => {

    const settings = JSON.parse(
        localStorage.getItem(
            "financialAlertSettings"
        )
    );

    if(!settings) return;

    if(!settings.enabled) return;

    const now = new Date();

    const currentTime =

        now.getHours()
        .toString()
        .padStart(2,'0')

        + ":"

        +

        now.getMinutes()
        .toString()
        .padStart(2,'0');

    if(currentTime === settings.alertTime){

        checkFinancialAlert();
    }

}, 60000);

// ---------- START SYSTEM ----------

function initializeFinancialAlertSystem() {

    const existingCard =
        document.querySelector(".financial-alert-card");

    if(existingCard) return;

    const container =
        document.getElementById(
            "financialAlertContainer"
        );

    if(!container){

        console.log(
            "financialAlertContainer not found"
        );

        return;
    }

    createFinancialAlertUI();

    loadFinancialAlertSettings();
}

// WAIT FOR FULL PAGE

setTimeout(() => {

    initializeFinancialAlertSystem();

}, 2000);
});
