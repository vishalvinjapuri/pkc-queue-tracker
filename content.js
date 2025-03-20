// content.js - Chrome Extension Content Script

(async function trackQueue() {
    console.log("Queue Tracker Started");

    // Create and inject overlay
    const overlay = document.createElement('div');
    overlay.id = 'queue-position-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 9999;
        font-family: Arial, sans-serif;
        pointer-events: none;
    `;
    document.body.appendChild(overlay);

    let intervalId;

    async function checkQueuePosition() {
        try {
            const response = await fetch("https://www.pokemoncenter.com/_Incapsula_Resource?SWWRGTS=868", {
                credentials: "include" // Use cookies from the current session
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Queue Response:", data);
            
            // Check if queue is passed
            if (data.pos === -1) {
                overlay.textContent = "Passed";
                if (intervalId) {
                    clearInterval(intervalId);
                }
                return;
            }
            
            // Update overlay with queue position
            overlay.textContent = `Queue Position: ${data.pos}`;
        } catch (error) {
            console.error("Error fetching queue position:", error);
            overlay.textContent = "Queue Position: Error";
        }
    }

    // Initial check
    await checkQueuePosition();
    
    // Update every 10 seconds
    intervalId = setInterval(checkQueuePosition, 10000);
})();
