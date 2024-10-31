export default function Article({ article }) {
  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p className="date">
            {`${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(article.date["seconds"] * 1000))}`}
            </p>
          <p className="body">{article.body}</p>
        </section>
      )}
    </article>
  )
}
