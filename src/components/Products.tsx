import { productImages, whatsappUrl } from '../config'
import { useLang } from '../language'
import { ProductPhoto } from './Graphics'

export function Products() {
  const { t } = useLang()
  const p = t.products
  const order = (name: string) => t.msg.order.replace('{name}', name)

  return (
    <section className="section wrap" id="products">
      <div className="kicker">{p.kicker}</div>
      <h2>{p.title}</h2>
      <p className="lead">{p.lead}</p>
      <div className="cards-2">
        <article className="card product">
          <div className="product-visual">
            <ProductPhoto src={productImages.standard} alt={p.standard.name} />
          </div>
          <div className="product-body">
            <span className="badge">{p.standard.badge}</span>
            <div className="tag">{p.standard.tag}</div>
            <h3>{p.standard.name}</h3>
            <p>{p.standard.desc}</p>
            <ul>
              {p.standard.points.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div className="product-foot">
              <span className="stock">● {p.inStock}</span>
              <a className="btn btn-cyan" href={whatsappUrl(order(p.standard.name))}>
                {p.priceAsk}
              </a>
            </div>
          </div>
        </article>
        <article className="card product mini">
          <div className="product-visual">
            <ProductPhoto src={productImages.mini} alt={p.mini.name} />
          </div>
          <div className="product-body">
            <span className="badge">{p.mini.badge}</span>
            <div className="tag">{p.mini.tag}</div>
            <h3>{p.mini.name}</h3>
            <p>{p.mini.desc}</p>
            <ul>
              {p.mini.points.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div className="product-foot">
              <span className="stock">● {p.inStock}</span>
              <a className="btn btn-gold" href={whatsappUrl(order(p.mini.name))}>
                {p.priceAsk}
              </a>
            </div>
          </div>
        </article>
      </div>
      <div className="card compare">
        <table>
          <thead>
            <tr>
              <th>{p.table.feature}</th>
              <th>Standard V4</th>
              <th>Mini</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{p.table.use}</td>
              <td>{p.table.stdUse}</td>
              <td>{p.table.miniUse}</td>
            </tr>
            <tr>
              <td>{p.table.size}</td>
              <td>{p.table.stdSize}</td>
              <td>{p.table.miniSize}</td>
            </tr>
            <tr>
              <td>{p.table.wifi}</td>
              <td>{p.table.stdWifi}</td>
              <td>{p.table.miniWifi}</td>
            </tr>
            <tr>
              <td>{p.table.power}</td>
              <td>{p.table.stdPower}</td>
              <td>{p.table.miniPower}</td>
            </tr>
            <tr>
              <td>{p.table.motion}</td>
              <td>{p.table.stdMotion}</td>
              <td>{p.table.miniMotion}</td>
            </tr>
            <tr>
              <td>{p.table.install}</td>
              <td>{p.table.stdInstall}</td>
              <td>{p.table.miniInstall}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
