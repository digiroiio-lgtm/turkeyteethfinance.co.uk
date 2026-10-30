import { financeRoutes, financeRoutesIntro } from "@/lib/dental-finance-planning";
export function PaymentRouteComparison({ embedded = false }: { embedded?: boolean }) {
  const content = <>        <h2 id="payment-route-comparison">How do the payment routes compare?</h2>
        <p>{financeRoutesIntro}</p>
        <div className="table-scroll">
          <table className="cost-table">
            <caption>Payment routes for dental treatment in Antalya</caption>
            <thead>
              <tr><th scope="col">Route</th><th scope="col">Who provides it</th><th scope="col">Who decides</th><th scope="col">When payment happens</th><th scope="col">What to check</th></tr>
            </thead>
            <tbody>
              {financeRoutes.map((row) => (
                <tr key={row.route}><th scope="row">{row.route}</th><td>{row.provider}</td><td>{row.decision}</td><td>{row.timing}</td><td>{row.check}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
</>;
  return embedded ? content : <section className="section"><div className="container narrow">{content}</div></section>;
}
