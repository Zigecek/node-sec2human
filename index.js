/**
 * Converts seconds to 00:00:00 format.
 * @param {(Number|String)} seconds Seconds to convert.
 * @returns {String} String in 00:00:00 format.
 */
function sec2human(seconds) {
    if (Number(seconds) != 0 && !isNaN(Number(seconds)) && seconds != undefined && seconds != null && (typeof seconds == "string" || typeof seconds == "number")) {
        seconds = Number(seconds);
        const pad = n => n.toString().padStart(2, '0');
        const h = pad(Math.floor(+seconds / 3600));
        const m = pad(Math.floor(+seconds % 3600 / 60));
        const s = pad(Math.floor(+seconds % 3600 % 60));
        var resp = (h == 00 && m == 00) ? ('00:' + s) : (h == 00) ? (m + ':' + s) : (h + ':' + m + ':' + s);
        return resp;
    } else {
        return undefined;
    }
};
module.exports = sec2human;