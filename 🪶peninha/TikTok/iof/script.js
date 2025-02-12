document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById("loading-screen");
    const resultScreen = document.getElementById("result-screen");
    const progressFill = document.querySelector(".progress-fill");
    const loadingText = document.getElementById("loading-text");
    const agreementCheckbox = document.getElementById("agreement");
    const payButton = document.getElementById("pay-button");

    const loadingMessages = ["Validando pesquisa..", "Processando saque..", "Pronto!"];
    let currentMessageIndex = 0;
    let progress = 0;

    // Handle progress bar and transition to result screen
    const interval = setInterval(() => {
        progress += 10;
        progressFill.style.width = `${progress}%`;

        if (progress % 30 === 0 && currentMessageIndex < loadingMessages.length - 1) {
            currentMessageIndex++;
            loadingText.textContent = loadingMessages[currentMessageIndex];
        }

        if (progress >= 100) {
            clearInterval(interval);
            loadingScreen.classList.add("hidden");
            resultScreen.classList.remove("hidden");
        }
    }, 500);

    // Enable or disable the pay button based on checkbox state
    agreementCheckbox.addEventListener("change", function() {
        payButton.disabled = !agreementCheckbox.checked;
    });

    // Redirect to a link when the button is clicked
    payButton.addEventListener("click", function() {
        window.location.href = "https://pay.pagamentoaqui.com/checkout/1db351b8-277c-4c90-8c27-d406eb07bb59"; // Substitua pelo seu link
    });
});
