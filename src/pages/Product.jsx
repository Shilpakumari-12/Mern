import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav/>
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
          This is a saying that truly blames with brightness, as the architect of wisdom is not free, suffering nothing in the room, placing debts, laboriously fleeing perspiration?
          </p>
          <p>
          Body aches are free and swiftly reasonable, great, with wisdom to follow duties and.
          </p>
        </div>
      </section>
    </main>
  );
}
