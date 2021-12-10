import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"

function Detail() {
    const [runtime, setRuntime] = useState("")
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("");
    const [coverImg, setImg] = useState("");
    const [summary, setSummary] = useState("");
    const { id } = useParams();
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setTitle(json.data.movie.title);
        setImg(json.data.movie.medium_cover_image);
        setSummary(json.data.movie.description_full);
        setRuntime(json.data.movie.runtime)
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    })
    return <h1>
        {loading ? ("Loading...")
         : (
            <div>
                <h2>{title}</h2>
                <img src={coverImg} alt={title} />
                <p style={{
                fontSize: 16
            }}>{summary}</p>
                <p style={{
                fontSize: 16
            }}>Runtime: {runtime} minutes</p>
            </div>
        )}
    </h1>
};

export default Detail;