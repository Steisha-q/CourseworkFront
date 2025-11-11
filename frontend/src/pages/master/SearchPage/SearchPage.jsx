import { useState, useEffect, useMemo } from "react";
import styles from "./styles.module.css";

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("users");
  const [followedUsers, setFollowedUsers] = useState(new Set());
  const [joinedCommunities, setJoinedCommunities] = useState(new Set());

  const users = [
    {
      id: 1,
      name: "John Carpenter",
      nickname: "@john_wood",
      bio: "Professional woodworker with 15 years of experience. Specializing in custom furniture and restoration.",
      avatar: "JC",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      nickname: "@sarah_ceramics",
      bio: "Ceramic artist passionate about experimental glazes and sculptural forms.",
      avatar: "SJ",
    },
    {
      id: 3,
      name: "Mike Peterson",
      nickname: "@mike_metalworks",
      bio: "Metal sculptor and blacksmith creating contemporary art pieces from reclaimed materials.",
      avatar: "MP",
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      nickname: "@emma_glassart",
      bio: "Stained glass artist focusing on traditional techniques with modern designs.",
      avatar: "ER",
    },
    {
      id: 5,
      name: "David Kim",
      nickname: "@david_leathercraft",
      bio: "Leather artisan creating bespoke bags, wallets, and accessories with traditional tooling.",
      avatar: "DK",
    },
  ];

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
      name: "Ceramic Artists United",
      description:
        "Space for ceramic artists to showcase their work, share glazing techniques, and find inspiration.",
      members: 890,
      posts: 156,
      avatar: "🏺",
    },
    {
      id: 3,
      name: "Metal Crafts Guild",
      description:
        "Community for metalworkers, blacksmiths, and welders to share their craft and knowledge.",
      members: 670,
      posts: 98,
      avatar: "⚒️",
    },
    {
      id: 4,
      name: "Leather Workers Collective",
      description:
        "Connect with leather artisans, share tooling techniques, and showcase leather creations.",
      members: 450,
      posts: 67,
      avatar: "🧵",
    },
    {
      id: 5,
      name: "Glass Artisans Network",
      description:
        "For glass blowers and stained glass artists to share their transparent masterpieces.",
      members: 320,
      posts: 45,
      avatar: "🔮",
    },
    {
      id: 6,
      name: "Traditional Crafts",
      description:
        "Preserving and promoting traditional crafting techniques from around the world.",
      members: 2100,
      posts: 543,
      avatar: "🎨",
    },
  ];

  const filteredUsers = useMemo(() => {
    if (!searchTerm.trim()) return users;

    const term = searchTerm.toLowerCase();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.nickname.toLowerCase().includes(term) ||
        user.bio.toLowerCase().includes(term)
    );
  }, [searchTerm, users]);

  const filteredCommunities = useMemo(() => {
    if (!searchTerm.trim()) return communities;

    const term = searchTerm.toLowerCase();
    return communities.filter(
      (community) =>
        community.name.toLowerCase().includes(term) ||
        community.description.toLowerCase().includes(term)
    );
  }, [searchTerm, communities]);

  const handleFollowUser = (userId) => {
    setFollowedUsers((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(userId)) {
        newSet.delete(userId);
      } else {
        newSet.add(userId);
      }
      return newSet;
    });
  };

  const handleJoinCommunity = (communityId) => {
    setJoinedCommunities((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(communityId)) {
        newSet.delete(communityId);
      } else {
        newSet.add(communityId);
      }
      return newSet;
    });
  };

  return (
    <div className={styles.searchPage}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search users or communities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />

        <div className={styles.searchTabs}>
          <button
            className={`${styles.searchTab} ${
              activeTab === "users" ? styles.searchTabActive : ""
            }`}
            onClick={() => setActiveTab("users")}
          >
            Users
          </button>
          <button
            className={`${styles.searchTab} ${
              activeTab === "communities" ? styles.searchTabActive : ""
            }`}
            onClick={() => setActiveTab("communities")}
          >
            Communities
          </button>
        </div>
      </div>

      <div className={styles.resultsSection}>
        {activeTab === "users" ? (
          <>
            <h3 className={styles.resultsTitle}>
              {searchTerm ? "Search Results" : "All Users"}
            </h3>

            {filteredUsers.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No users found</p>
                <p>Try adjusting your search terms</p>
              </div>
            ) : (
              <div className={styles.resultsGrid}>
                {filteredUsers.map((user) => (
                  <div key={user.id} className={styles.userCard}>
                    <div className={styles.userAvatar}>{user.avatar}</div>
                    <div className={styles.userInfo}>
                      <h4 className={styles.userName}>{user.name}</h4>
                      <p className={styles.userNickname}>{user.nickname}</p>
                      <p className={styles.userBio}>{user.bio}</p>
                    </div>
                    <button
                      className={
                        followedUsers.has(user.id)
                          ? styles.followingBtn
                          : styles.followBtn
                      }
                      onClick={() => handleFollowUser(user.id)}
                    >
                      {followedUsers.has(user.id) ? "Following" : "Follow"}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <h3 className={styles.resultsTitle}>
              {searchTerm ? "Search Results" : "All Communities"}
            </h3>

            {filteredCommunities.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No communities found</p>
                <p>Try adjusting your search terms</p>
              </div>
            ) : (
              <div className={styles.resultsGrid}>
                {filteredCommunities.map((community) => (
                  <div key={community.id} className={styles.communityCard}>
                    <div className={styles.communityAvatar}>
                      {community.avatar}
                    </div>
                    <div className={styles.communityInfo}>
                      <h4 className={styles.communityName}>{community.name}</h4>
                      <p className={styles.communityDescription}>
                        {community.description}
                      </p>
                      <div className={styles.communityStats}>
                        <span className={styles.communityStat}>
                          {community.members.toLocaleString()} members
                        </span>
                        <span className={styles.communityStat}>
                          {community.posts} posts
                        </span>
                      </div>
                    </div>
                    <button
                      className={
                        joinedCommunities.has(community.id)
                          ? styles.joinedBtn
                          : styles.joinBtn
                      }
                      onClick={() => handleJoinCommunity(community.id)}
                    >
                      {joinedCommunities.has(community.id) ? "Joined" : "Join"}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
