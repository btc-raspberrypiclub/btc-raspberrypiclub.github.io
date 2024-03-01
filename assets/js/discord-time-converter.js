/**
 * Escapes strings so that they are safe to be inside an HTML page
 * @param {string} str String to be escaped
 * @returns {string}
 */
function escapeHTML(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

/**
 * Unescapes escaped HTML strings.
 * @param {string} str 
 * @returns {string}
 */
function unescapeHTML(str) {
    return str
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "'");
}

/**
 * @returns {void}
 */
function convertTimestamp() {
    // Get the time string from the input
    let timeString = document.getElementById("time-input").value;

    // Return early if the string is empty
    if (timeString == "") { return }

    // Parse the string into a date,
    // convert it to the Unix timestamp with `getTime()` and dividing by 1000,
    // truncate to an integer
    let timeNum = Math.trunc(new Date(timeString).getTime() / 1000);
    
    // Output Discord timestamp
    document.getElementById("output").innerHTML = escapeHTML("<t:" + timeNum.toString() + ":f>");
}

/**
 * Copy the innerHTML of the given element into the user's clipboard
 * @param {Element} element The element that contains the text to be copied
 */
async function copyTimestamp(element) {
    let unescapedText = unescapeHTML(element.innerHTML);
    console.log("Text: " + unescapedText);
    
    // This function might only work if the website has SSL
    try {
        await navigator.clipboard.writeText(unescapedText);
    } catch (e) {
        alert("Error copying to clipboard");
    }
}
