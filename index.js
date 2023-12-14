// Function to handle screen capture and recording
const handleScreenCapture = async () => {
    try {
        // Start the stream and record it
        const stream = await navigator.mediaDevices.getDisplayMedia();
        const recorder = new MediaRecorder(stream);
        recorder.start();

        // Stop the recording when the user stops sharing
        const [video] = stream.getVideoTracks();
        video.addEventListener("ended", () => {
            recorder.stop();
        });

        // Download the recorded file
        recorder.addEventListener("dataavailable", (event) => {
            downloadRecordedFile(event.data);
        });
    } catch (error) {
        console.error("Error during screen capture:", error);
    }
};

// Function to download the recorded file
const downloadRecordedFile = (data) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(data);
    downloadLink.download = "ScreenCapture.webm";
    downloadLink.click();
};

// Get the capture button and add a click event listener
const captureButton = document.getElementById('capture-button');
captureButton.addEventListener("click", handleScreenCapture);
