/* Given a valid IP address, defang it.
Note: To defang an IP address, replace every ”.”, with ”[.]” */

function defang(ip) {
  const ipList = ip.split(".");
  let defanged = [];

  for (let i = 0; i < ipList.length; i++) {
    if (i != ipList.length - 1) {
      defanged.push(ipList[i]);
      defanged.push("[.]");
    } else {
      defanged.push(ipList[i]);
    }
  }

  return defanged.join("");
}

console.log(defang("127.0.0.1")); // -> "127[.]0[.]0[.]1"
console.log(defang("172.16.254.1")); // -> "172[.]16[.]254[.]1"
console.log(defang("239.255.255.255")); // -> "239[.]255[.]255[.]255" 

