/**
 * @param {string} queryIP
 * @return {string}
 */
const validIPAddress = function (queryIP) {
    let ip4 = [];
    let ip6 = [];
    ip4 = queryIP.split(".");
    ip6 = queryIP.split(':');

    if (ip4.length === 4) {
        if (ip4.every(item => !item.startsWith('0') && ((parseInt(item) > 0) && (parseInt(item) < 256) && (parseInt(item).toString() === item)))) {
            return "IPv4"
        }
    } else if (ip6.length === 8) {
        if (ip6.every(item => item.split("").every(char => char.match(/[0-9a-fA-F]{1,4}/g).includes(item) && (0 < item.length && item.length < 5).match(/[0-9a-fA-F]{1,4}/g).includes(item) && (0 < item.length && item.length < 5)))) {
            return 'IPv6'
        }
    }
    return "Neither";
};

/*const validIPAddress = function (queryIP) {
    if (/(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])/.test(queryIP)) return "IPv4";
    if (/(([0-9a-fA-F]{1,4}):){7}([0-9a-fA-F]{1,4})/.test("(([0-9a-fA-F]{1,4}):){7}([0-9a-fA-F]{1,4})")) return "IPv6";
    return "Neither";
}*/

const validIPAddress = function(IP) {
    const ipv4 = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/;
    const ipv6 = /^([\da-f]{1,4}:){8}$/i;
    return ipv4.test(IP + '.') ? 'IPv4' : ipv6.test(IP + ':') ? 'IPv6' : 'Neither';
};

console.log(validIPAddress("20EE:FGb8:85a3:0:0:8A2E:0370:7334"));
// console.log(/[^g-zG-Z]{1,4}/.test('g'))
console.log("2001:0db8:85a3:0:0:8A2E:0370:7334".split(':').every(item => item.match(/[0-9a-fA-F]{1,4}/g).includes(item) && (0 < item.length && item.length < 5)));