export const ArticleBox = (props: { title: string; Phrase: string }) => {
  const { title, Phrase } = props;
  return (
    <div className="px-8">
      <h1 className="font-bold text-[40px] ">{title}</h1>
      <p className="font-light">{Phrase}</p>
    </div>
  );
};
