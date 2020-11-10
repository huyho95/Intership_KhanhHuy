import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})

export class CryptoJsService {

  constructor() { }
  set(keys, value){
    // var key = CryptoJS.enc.Utf8.parse(keys);
    // var iv = CryptoJS.enc.Utf8.parse(keys);
    // var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
    // {
    //     keySize: 128 / 8,
    //     iv: iv,
    //     mode: CryptoJS.mode.CBC,
    //     padding: CryptoJS.pad.Pkcs7
    // });

    // return encrypted.toString();

    const parsedSalt = CryptoJS.enc.Base64.parse( keys );
    const result = CryptoJS.PBKDF2( value , parsedSalt, {
      keySize: 64 / 4,
      iterations: 1000,
      hasher: CryptoJS.algo.SHA512
    } );

    return CryptoJS.enc.Base64.stringify( result );
  }
}
