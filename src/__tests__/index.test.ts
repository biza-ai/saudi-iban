import { describe, it, expect } from 'vitest'
import {
  validateSaudiIban,
  formatIban,
  cleanIban,
  getBankFromIban,
  SAUDI_BANKS,
} from '../index'

describe('Saudi IBAN Validator & Bank Lookup', () => {
  it('validates a real SAMA-compliant Al Rajhi IBAN', () => {
    // Al Rajhi Bank IBAN (Bank code: 80)
    const validIban = 'SA0380000000608010167519'
    const result = validateSaudiIban(validIban)

    expect(result.isValid).toBe(true)
    expect(result.bankCode).toBe('80')
    expect(result.bank?.nameEn).toBe('Al Rajhi Bank')
    expect(result.bank?.nameAr).toBe('مصرف الراجحي')
    expect(result.bank?.bic).toBe('RJHISARI')
    expect(result.accountNumber).toBe('000000608010167519')
    expect(result.formatted).toBe('SA03 8000 0000 6080 1016 7519')
  })

  it('handles spaces and lowercase characters correctly', () => {
    const rawIban = '  sa03 8000 0000 6080 1016 7519  '
    const result = validateSaudiIban(rawIban)

    expect(result.isValid).toBe(true)
    expect(result.iban).toBe('SA0380000000608010167519')
  })

  it('rejects an IBAN with an invalid checksum (transposed digit)', () => {
    // Modified check digit from 03 to 04
    const tamperedIban = 'SA0480000000608010167519'
    const result = validateSaudiIban(tamperedIban)

    expect(result.isValid).toBe(false)
    expect(result.error).toContain('MOD-97')
  })

  it('rejects an IBAN with invalid length', () => {
    const shortIban = 'SA038000000060801016751'
    const result = validateSaudiIban(shortIban)

    expect(result.isValid).toBe(false)
    expect(result.error).toContain('must be exactly 24 characters')
  })

  it('rejects non-Saudi country codes', () => {
    const uaeIban = 'AE070331234567890123456'
    const result = validateSaudiIban(uaeIban)

    expect(result.isValid).toBe(false)
    expect(result.error).toContain('must start with "SA"')
  })

  it('identifies Saudi National Bank (SNB - Bank code 10)', () => {
    const bank = getBankFromIban('SA9210000000000000000000')
    expect(bank).toBeDefined()
    expect(bank?.shortName).toBe('SNB')
    expect(bank?.nameAr).toBe('البنك الأهلي السعودي')
  })

  it('identifies Riyad Bank (Bank code 20)', () => {
    const bank = getBankFromIban('SA9220000000000000000000')
    expect(bank).toBeDefined()
    expect(bank?.shortName).toBe('Riyad')
    expect(bank?.nameAr).toBe('بنك الرياض')
  })

  it('has entries for all major commercial and digital banks in SAMA registry', () => {
    expect(Object.keys(SAUDI_BANKS).length).toBeGreaterThanOrEqual(20)
    expect(SAUDI_BANKS['05'].shortName).toBe('Alinma')
    expect(SAUDI_BANKS['75'].shortName).toBe('STC Bank')
    expect(SAUDI_BANKS['76'].shortName).toBe('D360')
  })
})
