document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    const generateBtn = document.getElementById("generateBtn");
    const copyBtn = document.getElementById("copyBtn");
    const emailContent = document.getElementById("emailContent");
    const tone = document.getElementById("tone");
    const generatedReply = document.getElementById("generatedReply");
    const loading = document.getElementById("loading");
    const error = document.getElementById("error");
    const replyContainer = document.getElementById("replyContainer"); // ✅ Corrected ID

    // Check if all elements exist
    if (!generateBtn || !copyBtn || !emailContent || !tone || !generatedReply || !loading || !error || !replyContainer) {
        console.error("One or more elements are missing in the DOM.");
        return;
    }

    generateBtn.addEventListener("click", async function () {
        if (!emailContent.value.trim()) {
            alert("Please enter email content.");
            return;
        }

        loading.classList.remove("hidden");
        error.classList.add("hidden");
        replyContainer.classList.add("hidden");

        try {
            const response = await axios.post("http://localhost:8080/api/email/generate", {
                emailContent: emailContent.value,
                tone: tone.value
            });

            generatedReply.value = typeof response.data === "string" ? response.data : JSON.stringify(response.data);
            replyContainer.classList.remove("hidden");
        } catch (err) {
            error.textContent = "Failed to generate email reply. Please try again.";
            error.classList.remove("hidden");
            console.error(err);
        } finally {
            loading.classList.add("hidden");
        }
    });

    copyBtn.addEventListener("click", function () {
        navigator.clipboard.writeText(generatedReply.value);
        alert("Copied to clipboard!");
    });
});
