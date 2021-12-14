import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";
// import { useState, useEffect } from "react";
// import HoverInfo from "./HoverInfo";

function Movie({id, coverImg, title, summary, genres, mouseHover}) {
    return (
        <div>
            <div className={styles.movie} onMouseEnter={
                mouseHover
            }>
                <div className={styles.wrapper}>
                    <Link to={`/${id}`}>
                        <img src={coverImg} alt={title} className={styles.coverImg}/>
                    </Link>
                    <div className={styles.infoText}>
                        <h2 className={styles.link}>
                            <Link to={`/${id}`}>
                                {title}
                            </Link>
                        </h2>
                        <p className={styles.summary}>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                        <ul className={styles.genreList}>
                            {genres.map(g => (
                                <li className={genres} key={g}>{g}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;