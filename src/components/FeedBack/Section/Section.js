import style from './Section.module.css';
export default function Section({ title, flagTitle, children }) {
  const TitleFlag = () =>
  flagTitle ? (
      <h1 className={style.title__h1}>{title}</h1>
    ) : (
      <h3 className={style.title__h3}>{title}</h3>
    );
  return (
    <>
      <TitleFlag />
      {children}
    </>
  );
}
