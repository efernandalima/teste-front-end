import { useState } from "react";
import styles from "./Newsletter.module.scss";

function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className={styles.section} aria-label="Inscreva-se na newsletter">
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>Inscreva-se na nossa newsletter</h2>
          <p className={styles.subtitle}>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        <form className={styles.formBlock} onSubmit={handleSubmit} noValidate>
          <div className={styles.inputRow}>
            <input
              type="text"
              className={styles.input}
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="Seu nome"
              autoComplete="given-name"
            />
            <input
              type="email"
              className={styles.input}
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Seu e-mail"
              autoComplete="email"
            />
            <button type="submit" className={styles.submitBtn}>
              INSCREVER
            </button>
          </div>

          <label className={styles.termsLabel}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            <span>Aceito os termos e condições</span>
          </label>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
