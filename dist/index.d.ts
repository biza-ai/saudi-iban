/**
 * @biza-ai/saudi-iban
 * Zero-dependency universal TypeScript utility for Saudi Arabian IBAN validation,
 * formatting, and bank identification under SAMA (Saudi Central Bank) standards.
 */
export interface SaudiBank {
    code: string;
    nameEn: string;
    nameAr: string;
    shortName: string;
    bic: string;
}
/**
 * Official registry of Saudi and international commercial banks licensed by SAMA.
 * Bank code occupies digits 4 and 5 of a Saudi IBAN (e.g. SAkkBB...).
 */
export declare const SAUDI_BANKS: Record<string, SaudiBank>;
export interface SaudiIbanInfo {
    isValid: boolean;
    iban: string;
    formatted: string;
    bankCode?: string;
    bank?: SaudiBank;
    accountNumber?: string;
    error?: string;
}
/**
 * Strips whitespace and non-alphanumeric characters, converts to uppercase.
 */
export declare function cleanIban(iban: string): string;
/**
 * Formats a clean IBAN into readable 4-character chunks: 'SA03 8000 0000 6080 1016 7519'
 */
export declare function formatIban(iban: string): string;
/**
 * Validates a Saudi Arabian IBAN against SAMA rules & MOD-97 algorithm.
 * Saudi IBAN format:
 * - 24 alphanumeric characters
 * - Starts with 'SA'
 * - Followed by 2 check digits
 * - Followed by 2 bank code digits
 * - Followed by 18 alphanumeric account number characters
 */
export declare function validateSaudiIban(rawIban: string): SaudiIbanInfo;
/**
 * Returns bank details from a Saudi IBAN without strict checksum enforcement,
 * or undefined if the bank code is unrecognized.
 */
export declare function getBankFromIban(iban: string): SaudiBank | undefined;
