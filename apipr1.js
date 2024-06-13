const funcAsync = async function () {
    try {
      const query = window.location.search;
      console.log(query);
      const params = new URLSearchParams(window.location.search);
      const id = params.get("/films/{id}");
      console.log(id);
      let movieAll = await fetch(
        `https://ghibliapi.vercel.app/films/${id}`
      );
      const movieAllJson = await movieAll.json();
      console.log(movieAllJson);
    } catch (error) {
      console.log(error);
    }
  };
  funcAsync();