async function get() {
    const data = await axios.get('/api/getAllposts');
    const result = data.data.map((item) => new Post(item)).reverse();
    setPosts(result);
