const repositoryName = "unform2";

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>
      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>

          <a href="">Acessar Repositorio</a>
        </li>
        <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href="">Acessar Repositorio</a>
        </li>
        <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href="">Acessar Repositorio</a>
        </li>
      </ul>
    </section>
  );
}
