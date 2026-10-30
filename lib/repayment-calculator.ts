/** Generic fixed-rate mathematics, not APR pricing or a lender offer. No fees. */
export function estimateRepayments(cost: number, deposit: number, months: number, annualRate: number) {
  if (![cost, deposit, months, annualRate].every(Number.isFinite) || cost <= 0 || cost > 100000 || deposit < 0 || deposit > cost || !Number.isInteger(months) || months < 1 || months > 120 || annualRate < 0 || annualRate > 100) return null;
  const principal = cost - deposit;
  const rate = annualRate / 1200;
  const monthly = principal === 0 ? 0 : rate === 0 ? principal / months : principal * rate / -Math.expm1(-months * Math.log1p(rate));
  const total = monthly * months;
  return { principal, monthly, total, interest: Math.max(0, total - principal), includingDeposit: total + deposit };
}
