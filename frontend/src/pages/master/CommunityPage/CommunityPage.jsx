import { useState } from "react";
import styles from "./styles.module.css";

export const CommunityPage = () => {
  const [selectedCommunity, setSelectedCommunity] = useState(null);

  const communities = [
    {
      id: 1,
      name: "Woodworking Masters",
      description:
        "Community for professional woodworkers to share techniques, projects, and collaborate on woodworking masterpieces.",
      members: 1250,
      posts: 342,
      avatar: "🪵",
    },
    {
      id: 2,
      name: "Ceramic Artists",
      description:
        "Space for ceramic artists to showcase their work, share glazing techniques, and find inspiration.",
      members: 890,
      posts: 156,
      avatar: "🏺",
    },
    {
      id: 3,
      name: "Metal Crafts",
      description:
        "Community for metalworkers, blacksmiths, and welders to share their craft and knowledge.",
      members: 670,
      posts: 98,
      avatar: "⚒️",
    },
    {
      id: 4,
      name: "Leather Workers",
      description:
        "Connect with leather artisans, share tooling techniques, and showcase leather creations.",
      members: 450,
      posts: 67,
      avatar: "🧵",
    },
    {
      id: 5,
      name: "Glass Artisans",
      description:
        "For glass blowers and stained glass artists to share their transparent masterpieces.",
      members: 320,
      posts: 45,
      avatar: "🔮",
    },
  ];

  const communityPosts = {
    1: [
      {
        id: 1,
        title: "New Woodworking Technique Discovered",
        author: "John Carpenter",
        content:
          "Just discovered an amazing new technique for finishing wooden surfaces. It creates a beautiful matte finish that really brings out the natural grain of the wood. The process involves using a special oil mixture that penetrates deep into the wood fibers.",
        image: "/api/placeholder/600/300",
        tags: ["technique", "finishing", "oak"],
        status: "regular",
        date: "2024-01-15",
      },
      {
        id: 2,
        title: "Need Help with Complex Joinery",
        author: "Sarah Johnson",
        content:
          "I'm working on a complex dovetail joint for a custom cabinet and could use some advice from experienced woodworkers. The angles are particularly challenging.",
        image: null,
        tags: ["help", "joinery", "dovetail"],
        status: "need_master",
        date: "2024-01-14",
      },
      {
        id: 3,
        title: "Workshop Announcement",
        author: "Mike Peterson",
        content:
          "Organizing a woodturning workshop next month. We'll cover basic spindle turning and bowl making. All skill levels welcome!",
        image: "/api/placeholder/600/300",
        tags: ["workshop", "woodturning", "event"],
        status: "regular",
        date: "2024-01-13",
      },
    ],
    2: [
      {
        id: 4,
        title: "Crystalline Glazing Results",
        author: "Emma Rodriguez",
        content:
          "After months of experimentation, finally achieved perfect crystalline glazes! The crystals formed beautifully during the firing process.",
        image: "/api/placeholder/600/300",
        tags: ["glazing", "crystals", "success"],
        status: "regular",
        date: "2024-01-15",
      },
      {
        id: 5,
        title: "Kiln Temperature Question",
        author: "David Kim",
        content:
          "What's the optimal temperature range for porcelain firing? Getting some cracking issues with my recent pieces.",
        image: null,
        tags: ["help", "kiln", "porcelain"],
        status: "need_master",
        date: "2024-01-14",
      },
    ],
    3: [
      {
        id: 6,
        title: "Custom Sword Project",
        author: "Robert Black",
        content:
          "Working on a custom Damascus steel sword. The pattern welding is coming along nicely. Will share progress photos soon.",
        image: "/api/placeholder/600/300",
        tags: ["damascus", "sword", "forging"],
        status: "regular",
        date: "2024-01-15",
      },
    ],
    4: [
      {
        id: 7,
        title: "Leather Tooling Patterns",
        author: "Lisa Chen",
        content:
          "Created a new series of floral tooling patterns for leather wallets. The depth and detail came out perfectly.",
        image: "/api/placeholder/600/300",
        tags: ["tooling", "patterns", "wallet"],
        status: "regular",
        date: "2024-01-15",
      },
    ],
    5: [
      {
        id: 8,
        title: "Stained Glass Restoration",
        author: "Thomas Wright",
        content:
          "Restoring a 19th century stained glass window. The lead came replacement is quite challenging but rewarding.",
        image: "/api/placeholder/600/300",
        tags: ["stained-glass", "restoration", "historic"],
        status: "regular",
        date: "2024-01-15",
      },
    ],
  };

  const handleCommunitySelect = (community) => {
    setSelectedCommunity(community);
  };

  const getPostsForCommunity = (communityId) => {
    return communityPosts[communityId] || [];
  };

  return (
    <div className={styles.communityPage}>
      <div className={styles.sidebar}>
        <h3 className={styles.sidebarTitle}>My Communities</h3>
        <div className={styles.communitiesList}>
          {communities.map((community) => (
            <div
              key={community.id}
              className={`${styles.communityItem} ${
                selectedCommunity?.id === community.id
                  ? styles.communityItemActive
                  : ""
              }`}
              onClick={() => handleCommunitySelect(community)}
            >
              <div className={styles.communityAvatar}>{community.avatar}</div>
              <div className={styles.communityInfo}>
                <h4 className={styles.communityName}>{community.name}</h4>
                <p className={styles.communityMembers}>
                  {community.members.toLocaleString()} members
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        {!selectedCommunity ? (
          <div className={styles.selectCommunity}>
            <p>Select a community to view posts</p>
          </div>
        ) : (
          <>
            <div className={styles.communityHeader}>
              <div className={styles.communityHeaderAvatar}>
                {selectedCommunity.avatar}
              </div>
              <div className={styles.communityHeaderInfo}>
                <h2 className={styles.communityHeaderName}>
                  {selectedCommunity.name}
                </h2>
                <p className={styles.communityHeaderDescription}>
                  {selectedCommunity.description}
                </p>
                <div className={styles.communityStats}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>
                      {selectedCommunity.members.toLocaleString()}
                    </span>
                    <span className={styles.statLabel}>Members</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>
                      {selectedCommunity.posts}
                    </span>
                    <span className={styles.statLabel}>Posts</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.postsContainer}>
              <h3 className={styles.postsTitle}>Community Posts</h3>

              {getPostsForCommunity(selectedCommunity.id).length === 0 ? (
                <div className={styles.emptyState}>
                  <p>No posts in this community yet</p>
                  <p>Be the first to share something!</p>
                </div>
              ) : (
                <div className={styles.postsList}>
                  {getPostsForCommunity(selectedCommunity.id).map((post) => (
                    <div
                      key={post.id}
                      className={`${styles.postCard} ${
                        post.status === "need_master"
                          ? styles.postCardNeedMaster
                          : styles.postCardRegular
                      }`}
                    >
                      <div className={styles.postHeader}>
                        <h4 className={styles.postTitle}>{post.title}</h4>
                        <p className={styles.postAuthor}>by {post.author}</p>
                      </div>

                      <p className={styles.postContent}>{post.content}</p>

                      {post.image && (
                        <img
                          src={post.image}
                          alt={post.title}
                          className={styles.postImage}
                        />
                      )}

                      {post.tags.length > 0 && (
                        <div className={styles.postTags}>
                          {post.tags.map((tag) => (
                            <span key={tag} className={styles.postTag}>
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className={styles.postFooter}>
                        <span
                          className={`${styles.postStatus} ${
                            post.status === "need_master"
                              ? styles.statusNeedMaster
                              : styles.statusRegular
                          }`}
                        >
                          {post.status === "need_master"
                            ? "Need Master"
                            : "Regular Post"}
                        </span>
                        <span className={styles.postDate}>{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CommunityPage;
