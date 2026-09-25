/**
 * @biza-ai/saudi-iban
 * Zero-dependency universal TypeScript utility for Saudi Arabian IBAN validation,
 * formatting, and bank identification under SAMA (Saudi Central Bank) standards.
 */
/**
 * Official registry of Saudi and international commercial banks licensed by SAMA.
 * Bank code occupies digits 4 and 5 of a Saudi IBAN (e.g. SAkkBB...).
 */
export const SAUDI_BANKS = {
    '80': {
        code: '80',
        nameEn: 'Al Rajhi Bank',
        nameAr: 'مصرف الراجحي',
        shortName: 'Rajhi',
        bic: 'RJHISARI',
    },
    '10': {
        code: '10',
        nameEn: 'Saudi National Bank (SNB)',
        nameAr: 'البنك الأهلي السعودي',
        shortName: 'SNB',
        bic: 'NCBKSARI',
    },
    '45': {
        code: '45',
        nameEn: 'Saudi Awwal Bank (SAB)',
        nameAr: 'البنك السعودي الأول',
        shortName: 'SAB',
        bic: 'SABBRI',
    },
    '20': {
        code: '20',
        nameEn: 'Riyad Bank',
        nameAr: 'بنك الرياض',
        shortName: 'Riyad',
        bic: 'RIBLSARI',
    },
    '05': {
        code: '05',
        nameEn: 'Alinma Bank',
        nameAr: 'مصرف الإنماء',
        shortName: 'Alinma',
        bic: 'INMASARI',
    },
    '50': {
        code: '50',
        nameEn: 'Banque Saudi Fransi (BSF)',
        nameAr: 'البنك السعودي الفرنسي',
        shortName: 'BSF',
        bic: 'BSFRSARI',
    },
    '40': {
        code: '40',
        nameEn: 'Arab National Bank (ANB)',
        nameAr: 'البنك العربي الوطني',
        shortName: 'ANB',
        bic: 'ARNBSARI',
    },
    '30': {
        code: '30',
        nameEn: 'Arab National Bank (TeleMoney)',
        nameAr: 'البنك العربي الوطني (تيلي موني)',
        shortName: 'ANB-TeleMoney',
        bic: 'ARNBSARI',
    },
    '15': {
        code: '15',
        nameEn: 'Bank AlJazira',
        nameAr: 'بنك الجزيرة',
        shortName: 'AlJazira',
        bic: 'BJAZSARI',
    },
    '60': {
        code: '60',
        nameEn: 'Bank AlBilad',
        nameAr: 'بنك البلاد',
        shortName: 'AlBilad',
        bic: 'ALBISARI',
    },
    '65': {
        code: '65',
        nameEn: 'The Saudi Investment Bank (SAIB)',
        nameAr: 'البنك السعودي للاستثمار',
        shortName: 'SAIB',
        bic: 'SIBCSARI',
    },
    '76': {
        code: '76',
        nameEn: 'D360 Bank',
        nameAr: 'بنك د360 الرقمي',
        shortName: 'D360',
        bic: 'DTHRSARI',
    },
    '78': {
        code: '78',
        nameEn: 'Vision Bank',
        nameAr: 'بنك فيجن الرقمي',
        shortName: 'Vision',
        bic: 'VISNSARI',
    },
    '75': {
        code: '75',
        nameEn: 'STC Bank',
        nameAr: 'بنك إس تي سي',
        shortName: 'STC Bank',
        bic: 'STCBSARI',
    },
    '55': {
        code: '55',
        nameEn: 'Emirates NBD - Saudi Arabia',
        nameAr: 'بنك الإمارات دبي الوطني',
        shortName: 'Emirates NBD',
        bic: 'EBILSARI',
    },
    '66': {
        code: '66',
        nameEn: 'Gulf International Bank (GIB / meem)',
        nameAr: 'بنك الخليج الدولي (ميم)',
        shortName: 'GIB',
        bic: 'GULFSARI',
    },
    '58': {
        code: '58',
        nameEn: 'First Abu Dhabi Bank (FAB)',
        nameAr: 'بنك أبوظبي الأول',
        shortName: 'FAB',
        bic: 'FABISARI',
    },
    '71': {
        code: '71',
        nameEn: 'National Bank of Bahrain (NBB)',
        nameAr: 'بنك البحرين الوطني',
        shortName: 'NBB',
        bic: 'NBOKSARI',
    },
    '72': {
        code: '72',
        nameEn: 'National Bank of Kuwait (NBK)',
        nameAr: 'بنك الكويت الوطني',
        shortName: 'NBK',
        bic: 'NBOKSARI',
    },
    '81': {
        code: '81',
        nameEn: 'Bank Muscat',
        nameAr: 'بنك مسقط',
        shortName: 'Muscat',
        bic: 'BMUSSARI',
    },
    '82': {
        code: '82',
        nameEn: 'Deutsche Bank - Saudi Arabia',
        nameAr: 'دويتشه بنك',
        shortName: 'Deutsche',
        bic: 'DEUTSARI',
    },
    '83': {
        code: '83',
        nameEn: 'BNP Paribas - Saudi Arabia',
        nameAr: 'بي إن بي باريبا',
        shortName: 'BNP Paribas',
        bic: 'BNPASARI',
    },
    '84': {
        code: '84',
        nameEn: 'J.P. Morgan Chase Bank - Saudi Arabia',
        nameAr: 'جي بي مورغان تشيس بنك',
        shortName: 'JPMorgan',
        bic: 'CHASSARI',
    },
    '86': {
        code: '86',
        nameEn: 'Industrial and Commercial Bank of China (ICBC)',
        nameAr: 'البنك الصناعي والتجاري الصيني',
        shortName: 'ICBC',
        bic: 'ICBKSARI',
    },
};
/**
 * Strips whitespace and non-alphanumeric characters, converts to uppercase.
 */
export function cleanIban(iban) {
    return (iban || '').replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
}
/**
 * Formats a clean IBAN into readable 4-character chunks: 'SA03 8000 0000 6080 1016 7519'
 */
export function formatIban(iban) {
    const clean = cleanIban(iban);
    return clean.replace(/(.{4})/g, '$1 ').trim();
}
/**
 * Computes ISO 7064 Mod-97 checksum.
 */
function mod97(str) {
    let checksum = 0;
    for (let i = 0; i < str.length; i++) {
        checksum = (checksum * 10 + parseInt(str[i], 10)) % 97;
    }
    return checksum;
}
/**
 * Validates a Saudi Arabian IBAN against SAMA rules & MOD-97 algorithm.
 * Saudi IBAN format:
 * - 24 alphanumeric characters
 * - Starts with 'SA'
 * - Followed by 2 check digits
 * - Followed by 2 bank code digits
 * - Followed by 18 alphanumeric account number characters
 */
export function validateSaudiIban(rawIban) {
    const iban = cleanIban(rawIban);
    if (!iban) {
        return { isValid: false, iban: '', formatted: '', error: 'IBAN is empty.' };
    }
    if (!iban.startsWith('SA')) {
        return {
            isValid: false,
            iban,
            formatted: formatIban(iban),
            error: 'Invalid country code: Saudi IBAN must start with "SA".',
        };
    }
    if (iban.length !== 24) {
        return {
            isValid: false,
            iban,
            formatted: formatIban(iban),
            error: `Invalid length: Saudi IBAN must be exactly 24 characters (received ${iban.length}).`,
        };
    }
    // Bank code is characters at index 4 and 5 (0-indexed: 4, 5)
    const bankCode = iban.substring(4, 6);
    const bank = SAUDI_BANKS[bankCode];
    // Validate MOD-97 checksum
    // Rearrange: move the first 4 characters (SA + 2 check digits) to the end
    const rearranged = iban.substring(4) + iban.substring(0, 4);
    // Replace letters with their numeric equivalents (A = 10, B = 11, ... Z = 35)
    let numericString = '';
    for (let i = 0; i < rearranged.length; i++) {
        const code = rearranged.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            // Uppercase letter A-Z
            numericString += (code - 55).toString();
        }
        else if (code >= 48 && code <= 57) {
            // Digit 0-9
            numericString += rearranged[i];
        }
        else {
            return {
                isValid: false,
                iban,
                formatted: formatIban(iban),
                error: `Invalid character '${rearranged[i]}' in IBAN.`,
            };
        }
    }
    const remainder = mod97(numericString);
    if (remainder !== 1) {
        return {
            isValid: false,
            iban,
            formatted: formatIban(iban),
            bankCode,
            bank,
            error: 'Invalid checksum: IBAN failed MOD-97 mathematical validation.',
        };
    }
    const accountNumber = iban.substring(6);
    return {
        isValid: true,
        iban,
        formatted: formatIban(iban),
        bankCode,
        bank,
        accountNumber,
    };
}
/**
 * Returns bank details from a Saudi IBAN without strict checksum enforcement,
 * or undefined if the bank code is unrecognized.
 */
export function getBankFromIban(iban) {
    const clean = cleanIban(iban);
    if (clean.length >= 6 && clean.startsWith('SA')) {
        const code = clean.substring(4, 6);
        return SAUDI_BANKS[code];
    }
    return undefined;
}
