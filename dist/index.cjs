"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var index_exports = {};
__export(index_exports, {
  SAUDI_BANKS: () => SAUDI_BANKS,
  cleanIban: () => cleanIban,
  formatIban: () => formatIban,
  getBankFromIban: () => getBankFromIban,
  validateSaudiIban: () => validateSaudiIban
});
module.exports = __toCommonJS(index_exports);
const SAUDI_BANKS = {
  "80": {
    code: "80",
    nameEn: "Al Rajhi Bank",
    nameAr: "\u0645\u0635\u0631\u0641 \u0627\u0644\u0631\u0627\u062C\u062D\u064A",
    shortName: "Rajhi",
    bic: "RJHISARI"
  },
  "10": {
    code: "10",
    nameEn: "Saudi National Bank (SNB)",
    nameAr: "\u0627\u0644\u0628\u0646\u0643 \u0627\u0644\u0623\u0647\u0644\u064A \u0627\u0644\u0633\u0639\u0648\u062F\u064A",
    shortName: "SNB",
    bic: "NCBKSARI"
  },
  "45": {
    code: "45",
    nameEn: "Saudi Awwal Bank (SAB)",
    nameAr: "\u0627\u0644\u0628\u0646\u0643 \u0627\u0644\u0633\u0639\u0648\u062F\u064A \u0627\u0644\u0623\u0648\u0644",
    shortName: "SAB",
    bic: "SABBRI"
  },
  "20": {
    code: "20",
    nameEn: "Riyad Bank",
    nameAr: "\u0628\u0646\u0643 \u0627\u0644\u0631\u064A\u0627\u0636",
    shortName: "Riyad",
    bic: "RIBLSARI"
  },
  "05": {
    code: "05",
    nameEn: "Alinma Bank",
    nameAr: "\u0645\u0635\u0631\u0641 \u0627\u0644\u0625\u0646\u0645\u0627\u0621",
    shortName: "Alinma",
    bic: "INMASARI"
  },
  "50": {
    code: "50",
    nameEn: "Banque Saudi Fransi (BSF)",
    nameAr: "\u0627\u0644\u0628\u0646\u0643 \u0627\u0644\u0633\u0639\u0648\u062F\u064A \u0627\u0644\u0641\u0631\u0646\u0633\u064A",
    shortName: "BSF",
    bic: "BSFRSARI"
  },
  "40": {
    code: "40",
    nameEn: "Arab National Bank (ANB)",
    nameAr: "\u0627\u0644\u0628\u0646\u0643 \u0627\u0644\u0639\u0631\u0628\u064A \u0627\u0644\u0648\u0637\u0646\u064A",
    shortName: "ANB",
    bic: "ARNBSARI"
  },
  "30": {
    code: "30",
    nameEn: "Arab National Bank (TeleMoney)",
    nameAr: "\u0627\u0644\u0628\u0646\u0643 \u0627\u0644\u0639\u0631\u0628\u064A \u0627\u0644\u0648\u0637\u0646\u064A (\u062A\u064A\u0644\u064A \u0645\u0648\u0646\u064A)",
    shortName: "ANB-TeleMoney",
    bic: "ARNBSARI"
  },
  "15": {
    code: "15",
    nameEn: "Bank AlJazira",
    nameAr: "\u0628\u0646\u0643 \u0627\u0644\u062C\u0632\u064A\u0631\u0629",
    shortName: "AlJazira",
    bic: "BJAZSARI"
  },
  "60": {
    code: "60",
    nameEn: "Bank AlBilad",
    nameAr: "\u0628\u0646\u0643 \u0627\u0644\u0628\u0644\u0627\u062F",
    shortName: "AlBilad",
    bic: "ALBISARI"
  },
  "65": {
    code: "65",
    nameEn: "The Saudi Investment Bank (SAIB)",
    nameAr: "\u0627\u0644\u0628\u0646\u0643 \u0627\u0644\u0633\u0639\u0648\u062F\u064A \u0644\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631",
    shortName: "SAIB",
    bic: "SIBCSARI"
  },
  "76": {
    code: "76",
    nameEn: "D360 Bank",
    nameAr: "\u0628\u0646\u0643 \u062F360 \u0627\u0644\u0631\u0642\u0645\u064A",
    shortName: "D360",
    bic: "DTHRSARI"
  },
  "78": {
    code: "78",
    nameEn: "Vision Bank",
    nameAr: "\u0628\u0646\u0643 \u0641\u064A\u062C\u0646 \u0627\u0644\u0631\u0642\u0645\u064A",
    shortName: "Vision",
    bic: "VISNSARI"
  },
  "75": {
    code: "75",
    nameEn: "STC Bank",
    nameAr: "\u0628\u0646\u0643 \u0625\u0633 \u062A\u064A \u0633\u064A",
    shortName: "STC Bank",
    bic: "STCBSARI"
  },
  "55": {
    code: "55",
    nameEn: "Emirates NBD - Saudi Arabia",
    nameAr: "\u0628\u0646\u0643 \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u062F\u0628\u064A \u0627\u0644\u0648\u0637\u0646\u064A",
    shortName: "Emirates NBD",
    bic: "EBILSARI"
  },
  "66": {
    code: "66",
    nameEn: "Gulf International Bank (GIB / meem)",
    nameAr: "\u0628\u0646\u0643 \u0627\u0644\u062E\u0644\u064A\u062C \u0627\u0644\u062F\u0648\u0644\u064A (\u0645\u064A\u0645)",
    shortName: "GIB",
    bic: "GULFSARI"
  },
  "58": {
    code: "58",
    nameEn: "First Abu Dhabi Bank (FAB)",
    nameAr: "\u0628\u0646\u0643 \u0623\u0628\u0648\u0638\u0628\u064A \u0627\u0644\u0623\u0648\u0644",
    shortName: "FAB",
    bic: "FABISARI"
  },
  "71": {
    code: "71",
    nameEn: "National Bank of Bahrain (NBB)",
    nameAr: "\u0628\u0646\u0643 \u0627\u0644\u0628\u062D\u0631\u064A\u0646 \u0627\u0644\u0648\u0637\u0646\u064A",
    shortName: "NBB",
    bic: "NBOKSARI"
  },
  "72": {
    code: "72",
    nameEn: "National Bank of Kuwait (NBK)",
    nameAr: "\u0628\u0646\u0643 \u0627\u0644\u0643\u0648\u064A\u062A \u0627\u0644\u0648\u0637\u0646\u064A",
    shortName: "NBK",
    bic: "NBOKSARI"
  },
  "81": {
    code: "81",
    nameEn: "Bank Muscat",
    nameAr: "\u0628\u0646\u0643 \u0645\u0633\u0642\u0637",
    shortName: "Muscat",
    bic: "BMUSSARI"
  },
  "82": {
    code: "82",
    nameEn: "Deutsche Bank - Saudi Arabia",
    nameAr: "\u062F\u0648\u064A\u062A\u0634\u0647 \u0628\u0646\u0643",
    shortName: "Deutsche",
    bic: "DEUTSARI"
  },
  "83": {
    code: "83",
    nameEn: "BNP Paribas - Saudi Arabia",
    nameAr: "\u0628\u064A \u0625\u0646 \u0628\u064A \u0628\u0627\u0631\u064A\u0628\u0627",
    shortName: "BNP Paribas",
    bic: "BNPASARI"
  },
  "84": {
    code: "84",
    nameEn: "J.P. Morgan Chase Bank - Saudi Arabia",
    nameAr: "\u062C\u064A \u0628\u064A \u0645\u0648\u0631\u063A\u0627\u0646 \u062A\u0634\u064A\u0633 \u0628\u0646\u0643",
    shortName: "JPMorgan",
    bic: "CHASSARI"
  },
  "86": {
    code: "86",
    nameEn: "Industrial and Commercial Bank of China (ICBC)",
    nameAr: "\u0627\u0644\u0628\u0646\u0643 \u0627\u0644\u0635\u0646\u0627\u0639\u064A \u0648\u0627\u0644\u062A\u062C\u0627\u0631\u064A \u0627\u0644\u0635\u064A\u0646\u064A",
    shortName: "ICBC",
    bic: "ICBKSARI"
  }
};
function cleanIban(iban) {
  return (iban || "").replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
}
function formatIban(iban) {
  const clean = cleanIban(iban);
  return clean.replace(/(.{4})/g, "$1 ").trim();
}
function mod97(str) {
  let checksum = 0;
  for (let i = 0; i < str.length; i++) {
    checksum = (checksum * 10 + parseInt(str[i], 10)) % 97;
  }
  return checksum;
}
function validateSaudiIban(rawIban) {
  const iban = cleanIban(rawIban);
  if (!iban) {
    return { isValid: false, iban: "", formatted: "", error: "IBAN is empty." };
  }
  if (!iban.startsWith("SA")) {
    return {
      isValid: false,
      iban,
      formatted: formatIban(iban),
      error: 'Invalid country code: Saudi IBAN must start with "SA".'
    };
  }
  if (iban.length !== 24) {
    return {
      isValid: false,
      iban,
      formatted: formatIban(iban),
      error: `Invalid length: Saudi IBAN must be exactly 24 characters (received ${iban.length}).`
    };
  }
  const bankCode = iban.substring(4, 6);
  const bank = SAUDI_BANKS[bankCode];
  const rearranged = iban.substring(4) + iban.substring(0, 4);
  let numericString = "";
  for (let i = 0; i < rearranged.length; i++) {
    const code = rearranged.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      numericString += (code - 55).toString();
    } else if (code >= 48 && code <= 57) {
      numericString += rearranged[i];
    } else {
      return {
        isValid: false,
        iban,
        formatted: formatIban(iban),
        error: `Invalid character '${rearranged[i]}' in IBAN.`
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
      error: "Invalid checksum: IBAN failed MOD-97 mathematical validation."
    };
  }
  const accountNumber = iban.substring(6);
  return {
    isValid: true,
    iban,
    formatted: formatIban(iban),
    bankCode,
    bank,
    accountNumber
  };
}
function getBankFromIban(iban) {
  const clean = cleanIban(iban);
  if (clean.length >= 6 && clean.startsWith("SA")) {
    const code = clean.substring(4, 6);
    return SAUDI_BANKS[code];
  }
  return void 0;
}
