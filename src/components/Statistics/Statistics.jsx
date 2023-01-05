import css from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => (
    <section className={css.statistics}>
        {title.length > 0 && (<h2 className={css.title}>{title}</h2>)
        }
         <ul className={css.statList}>
            {stats.map(stat => (
                <li className={css.item} key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
                    <span className="label">{stat.label}</span>
                    <span className={css.percentage}>{stat.percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
); 


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}