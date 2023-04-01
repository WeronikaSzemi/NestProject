import * as crypto from 'crypto';

export const hashPwd = (p: string): string => {
	const hmac = crypto.createHmac('sha512', '456789oiuyhgfdcvfgbhnjmko987654rewsdcfvgbhnjmvcdrt6789765trdfghjmnbvfrt6789okjhgvcbnjmki8765trfghjk,kmnbg6789tr5t6789o976y5yuRE$%^&*(*&^$%^&*(*&^YTRDFGHNJ*&^TRFGHJN');
	hmac.update(p);
	return hmac.digest('hex');
}