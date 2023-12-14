# Screen Capture and Recording

This JavaScript code allows users to capture and record their screen using the `navigator.mediaDevices` API. The functionality is triggered by a button with the ID "capture-button" in your HTML file.

## How it works


    When the "Capture Screen" button is clicked, the script will:
        - Retrieve and log the navigator.mediaDevices object.
        - Start capturing the screen and initiate recording.
        -  Stop recording when the user stops sharing the screen.
        - Download the recorded file once the recording is complete.

## Dependencies

    Ensure that the browser supports the MediaRecorder API, which is part of the navigator.mediaDevices interface.

    
