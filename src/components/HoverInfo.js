import styles from "./HoverInfo.module.css";

// const image = document.querySelector(".container img");

// function checkIfNull() {
//     if (image.src = null) {
//         image.classList.add("hidden")
//     } else {
//         image.classList.remove("hidden")
//     }
// }

function HoverInfo({id, coverImg, title, summary, genres, ifHidden}) {
    return (
        <div className={styles.container}>
            {ifHidden ? null : <img src={coverImg} alt={id} />}
            <div className={styles.textBox}>
                <h3>{title}</h3>
                <p>{id}</p>
                <p>{summary}</p>
                <p>{genres}</p>
            </div>
        </div>
    )
}

export default HoverInfo;