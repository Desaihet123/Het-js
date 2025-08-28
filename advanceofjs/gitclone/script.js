const button = document.getElementById("btn");
const repositoriesbtn = document.getElementById("repobtn");
const carddiv = document.getElementById("card");
const repodiv = document.getElementById("repositoriesdata");

let cachedRepos = [];

button.addEventListener("click", function () {
  details();
});

repositoriesbtn.addEventListener("click", function () {
  if (cachedRepos.length === 0) {
    repodiv.innerHTML = `<p class="text-center">No public repositories</p>`;
    return;
  }

  repodiv.innerHTML = `
    <h3 class="text-lg font-semibold mb-2 text-gray-700">Public Repositories (${cachedRepos.length})</h3>
    ${cachedRepos
      .map(
        (repo) =>
          `<a href="${repo.html_url}" target="_blank" class="block text-blue-600 hover:underline my-1">${repo.name}</a>`
      )
      .join("")}
  `;
});

function details() {
  async function result() {
    const username = document.getElementById("name").value.trim();
    repodiv.innerHTML = "";
    carddiv.innerHTML = "";

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );
      const data = await response.json();

      if (data.message === "Not Found") {
        carddiv.innerHTML = `<p class="text-red-500">User not found</p>`;
        repositoriesbtn.classList.add("hidden");
        return;
      }

      const followersRes = await fetch(data.followers_url);
      const followers = await followersRes.json();

      const followingUrl = data.following_url.replace("{/other_user}", "");
      const followingRes = await fetch(followingUrl);
      const followings = await followingRes.json();

      const reposRes = await fetch(data.repos_url);
      cachedRepos = await reposRes.json();

      const createdAt = new Date(data.created_at).toLocaleDateString();

      carddiv.innerHTML = `
        <img src="${data.avatar_url}" alt="Avatar" class="rounded-full w-24 h-24 mx-auto mb-4" />
        <h2 class="text-2xl font-bold mb-2">${data.name || "No name available"} (${data.login})</h2>
        <p class="text-gray-600 mb-4"><strong>Account Created:</strong> ${createdAt}</p>

        <h3 class="text-lg font-semibold mt-6 mb-2 text-gray-700">Followers (${followers.length})</h3>
        <ul class="list-none p-0">
          ${followers
            .map((f) => `<li class="bg-gray-100 p-2 rounded-md my-1">${f.login}</li>`)
            .join("")}
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-2 text-gray-700">Following (${followings.length})</h3>
        <ul class="list-none p-0">
          ${followings
            .map((f) => `<li class="bg-gray-100 p-2 rounded-md my-1">${f.login}</li>`)
            .join("")}
        </ul>
      `;

      repositoriesbtn.classList.remove("hidden");
    } catch (error) {
      console.error("Error detected:", error);
      carddiv.innerHTML = `<p class="text-red-500">Error fetching user data</p>`;
    }
  }
  result();
}