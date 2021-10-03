import paytmChecksum from '../paytm/PaytmChecksum.js';
import {paytmParams, paytmMerchantKey} from '../index.js';

export const addPaymentGateway = (request, response) =>{ //PaytmParams, Marchand Key
    let paytmChecksum = paytmChecksum.generateSignature(paytmParams, paytmMerchantKey);

    try{
        let params = {
            ...paytmParams, 'CHECKSUMHASH': paytmChecksum
        }
        response.json(params);
    }catch(error){
        console.log(error);
    }
}