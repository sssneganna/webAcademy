const API_URL = "http://boring-fe.herokuapp.com/posts";
export const createCommentsPost = (root) => {
  const container = document.createElement("div");
  container.classList.add("posts");

  fetch(API_URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        const postItem = document.createElement("div");
        let itemContent = `
        <h1 class="title">${data[i].title}</h1>
        <p class ="content">${data[i].content}</p>
        <img class="img" src="${data[i].avatarUrl}"/>
        <h2 class="author">${data[i].author}</h2>
        <div class="data">${new Date(data[i].createdAt)}</div>
        `;
        postItem.innerHTML = itemContent;
        container.append(postItem);
      }
    });
  root.append(container);
};
