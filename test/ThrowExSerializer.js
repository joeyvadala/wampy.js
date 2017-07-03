export class ThrowExSerializer {

    constructor () {
        this.protocol = 'json';
        this.binaryType = 'blob';
    }

    encode (data) {
        throw new Error('Encoding error!');
    }

    decode (data) {
        throw new Error('Decoding error!');
    }
}
