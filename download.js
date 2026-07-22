

async function download() {
    try {
        let [res1, res2, res3] = await Promise.all(
            fetch(movie.json), fetch(actors.json), fetch(cinemas.json)
        )
    } catch (error) {
        
    }
}