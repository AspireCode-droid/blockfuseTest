
async function fetchRes() {
    try {
        let controller = new AbortController()
        let res = await fetch("https://jsonplaceholder.typicode.com/posts")
        setTimeout(() => {
            if (!res) {
                controller.abort('Request was cacnelled')
            }
        }, 2000);
        let data = await res.json()
        let postsTotal = 0
        data.forEach(data => {
            postsTotal ++
        });
        console.log(postsTotal)
    } catch (error) {
        console.log(error)
    }

}
fetchRes()