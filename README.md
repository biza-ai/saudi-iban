# @biza-ai/saudi-iban

[![npm version](https://img.shields.io/npm/v/@biza-ai/saudi-iban.svg?color=emerald)](https://www.npmjs.com/package/@biza-ai/saudi-iban)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![SAMA Compliant](https://img.shields.io/badge/SAMA-MOD--97%20Compliant-green.svg)](https://biza.app)

**Zero-dependency universal TypeScript utility for Saudi Arabian IBAN validation, formatting, and bank identification under SAMA (Saudi Central Bank) standards.**

Works seamlessly across **Browser, Node.js, Deno, Bun, and Edge Workers (Cloudflare, Vercel, Supabase)**.

Maintained with ❤️ by [**BIZA App**](https://biza.app) — The AI ERP & Cloud Accounting platform for Saudi Arabia & GCC.

---

## Features

- ⚡ **Zero Dependencies:** Pure TypeScript implementation under 8 KB.
- 🛡️ **Mathematical MOD-97 Checksum:** Full ISO 7064 Mod 97-10 verification.
- 🏦 **Complete SAMA Bank Registry:** Identifies all 24+ Saudi commercial banks, digital banks (D360, Vision, STC Bank), and licensed foreign branches with Arabic & English names, short names, and SWIFT/BIC codes.
- 🧹 **Robust Sanitization:** Automatically cleans whitespace, hyphens, and standardizes letter casing.
- 📦 **Dual ESM & CommonJS:** Native tree-shakeable imports.

---

## Installation

```bash
npm install @biza-ai/saudi-iban
```

Or using pnpm / yarn / bun:
```bash
pnpm add @biza-ai/saudi-iban
bun add @biza-ai/saudi-iban
```

---

## Quick Usage

### 1. Validate a Saudi IBAN

```typescript
import { validateSaudiIban } from '@biza-ai/saudi-iban'

const result = validateSaudiIban('SA0380000000608010167519')

if (result.isValid) {
  console.log(result.bank?.nameEn)       // 'Al Rajhi Bank'
  console.log(result.bank?.nameAr)       // 'مصرف الراجحي'
  console.log(result.bank?.bic)          // 'RJHISARI'
  console.log(result.formatted)          // 'SA03 8000 0000 6080 1016 7519'
  console.log(result.accountNumber)      // '000000608010167519'
} else {
  console.error(result.error)            // E.g. 'Invalid checksum: IBAN failed MOD-97 mathematical validation.'
}
```

### 2. Identify Bank from IBAN

```typescript
import { getBankFromIban } from '@biza-ai/saudi-iban'

const bank = getBankFromIban('SA9210000000000000000000')

console.log(bank)
// {
//   code: '10',
//   nameEn: 'Saudi National Bank (SNB)',
//   nameAr: 'البنك الأهلي السعودي',
//   shortName: 'SNB',
//   bic: 'NCBKSARI'
// }
```

### 3. Format IBAN for Display

```typescript
import { formatIban } from '@biza-ai/saudi-iban'

formatIban('sa0380000000608010167519')
// Output: 'SA03 8000 0000 6080 1016 7519'
```

---

## Supported Banks in SAMA Registry

| Code | Bank Name (English) | اسم البنك (العربية) | BIC / SWIFT |
|---|---|---|---|
| `80` | Al Rajhi Bank | مصرف الراجحي | `RJHISARI` |
| `10` | Saudi National Bank (SNB) | البنك الأهلي السعودي | `NCBKSARI` |
| `45` | Saudi Awwal Bank (SAB) | البنك السعودي الأول | `SABBRI` |
| `20` | Riyad Bank | بنك الرياض | `RIBLSARI` |
| `05` | Alinma Bank | مصرف الإنماء | `INMASARI` |
| `50` | Banque Saudi Fransi (BSF) | البنك السعودي الفرنسي | `BSFRSARI` |
| `40` | Arab National Bank (ANB) | البنك العربي الوطني | `ARNBSARI` |
| `15` | Bank AlJazira | بنك الجزيرة | `BJAZSARI` |
| `60` | Bank AlBilad | بنك البلاد | `ALBISARI` |
| `65` | The Saudi Investment Bank (SAIB) | البنك السعودي للاستثمار | `SIBCSARI` |
| `75` | STC Bank | بنك إس تي سي | `STCBSARI` |
| `76` | D360 Bank | بنك د360 الرقمي | `DTHRSARI` |
| `78` | Vision Bank | بنك فيجن الرقمي | `VISNSARI` |
| `55` | Emirates NBD | بنك الإمارات دبي الوطني | `EBILSARI` |
| `66` | Gulf International Bank (GIB / meem) | بنك الخليج الدولي (ميم) | `GULFSARI` |
| `58` | First Abu Dhabi Bank (FAB) | بنك أبوظبي الأول | `FABISARI` |
| `82` | Deutsche Bank | دويتشه بنك | `DEUTSARI` |
| `83` | BNP Paribas | بي إن بي باريبا | `BNPASARI` |
| `84` | J.P. Morgan Chase Bank | جي بي مورغان تشيس بنك | `CHASSARI` |
| `86` | Industrial and Commercial Bank of China | البنك الصناعي والتجاري الصيني | `ICBKSARI` |

---

## Looking for Complete Payroll & ERP Automation in Saudi Arabia?

Stop worrying about bank transfer errors and SAMA compliance.

[**BIZA App (biza.app)**](https://biza.app) provides:
- **Instant Bank Reconciliation:** Match statements against invoices and payments automatically.
- **WPS Wages Protection System (مدد):** Generates compliant SIF payroll files for all Saudi commercial banks.
- **ZATCA Phase 2 E-Invoicing:** Full clearance and reporting with live cryptographic validation.
- **Multi-Currency & VAT 15% Accounting:** Fully bilingual enterprise ERP.

Visit [https://biza.app](https://biza.app) to get started.

---

## License

MIT © [BIZA App](https://biza.app)
