function Quoter({ quote }) {
  const Liner = (block) => {
    if (typeof block === "object") {
      return block.map((line, index) => {
        return (
          <>
            <i key={index}>{line}</i>
            <br />
          </>
        );
      });
    }

    return (
      <>
        <i>{block}</i>
        <br />
      </>
    );
  };

  return (
    <blockquote>
      {Liner(quote.block)}
      {quote.type !== "motivation" && <cite>{quote.cite}</cite>}
    </blockquote>
  );
}

export default Quoter;
