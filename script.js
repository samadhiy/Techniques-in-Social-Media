// Load posts from JSON file
fetch("posts.json")
    .then(res => res.json())
    .then(posts => {
        const feed = document.getElementById("posts");

        posts.forEach(post => {
            const card = document.createElement("div");
            card.className = "post";

            card.innerHTML = `
                <div class="post-header">
                    <img src="profile.png" alt="Profile">
                    <div class="username">samadhi_j</div>
                </div>

                <img src="${post.image}" class="post-image" alt="Post Image">

                <div class="post-actions">

                    <!-- LIKE -->
                    <button class="action-btn like-btn">
                        <svg aria-label="Like" fill="none" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122
                                     c0 3.072-2.889 5.931-9.5 10.378
                                     C5.389 15.053 2.5 12.194 2.5 9.122
                                     a4.989 4.989 0 0 1 8.318-3.218
                                     A4.989 4.989 0 0 1 16.792 3.904Z"
                                  stroke="currentColor" stroke-width="2"></path>
                        </svg>
                    </button>

                    <!-- COMMENT -->
                    <button class="action-btn comment-btn">
                        <svg aria-label="Comment" fill="none" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8
                                     8.5 8.5 0 0 1-7.6 4.7
                                     8.38 8.38 0 0 1-3.8-.9L3 21
                                     l1.9-5.7a8.38 8.38 0 0 1-.9-3.8
                                     8.5 8.5 0 0 1 4.7-7.6
                                     8.38 8.38 0 0 1 3.8-.9h.5
                                     a8.48 8.48 0 0 1 8 8Z"
                                  stroke="currentColor" stroke-width="2"></path>
                        </svg>
                    </button>

                    <!-- SHARE -->
                    <button class="action-btn share-btn">
                        <svg aria-label="Share" fill="none" height="24" viewBox="0 0 24 24" width="24">
                            <line x1="22" y1="2" x2="11" y2="13"
                                  stroke="currentColor" stroke-width="2"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"
                                     stroke="currentColor" stroke-width="2"></polygon>
                        </svg>
                    </button>

                </div>

                <div class="caption">
                    <span>samadhi_j</span> ${post.caption}
                </div>
            `;

            // LIKE ACTION
            const likeBtn = card.querySelector(".like-btn");
            likeBtn.addEventListener("click", () => {
                alert("You liked this post");
                likeBtn.innerHTML = "❤️";
            });

            // COMMENT ACTION
            card.querySelector(".comment-btn").addEventListener("click", () => {
                alert("Comment feature coming soon");
            });

            // SHARE ACTION
            card.querySelector(".share-btn").addEventListener("click", () => {
                alert("Post shared");
            });

            feed.appendChild(card);
        });
    })
    .catch(err => console.error("Error:", err));
