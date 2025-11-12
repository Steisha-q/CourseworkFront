import { useState, useEffect, useMemo } from "react";
import styles from "./styles.module.css";

export const SearchCommunityPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("users");
  const [followedUsers, setFollowedUsers] = useState(new Set());
  const [joinedCommunities, setJoinedCommunities] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Кількість елементів на сторінці
 
  const [users, setUsers] = useState([
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
  ]);

  const [communities, setCommunities] = useState([
    {
      id: 1,
      name: "Woodworking Masters",
      description: "Community for professional woodworkers to share techniques, projects, and collaborate on woodworking masterpieces.",
      members: 1250,
      posts: 342,
      avatar: "🪵",
    },
    {
      id: 2,
      name: "Ceramic Artists United",
      description: "Space for ceramic artists to showcase their work, share glazing techniques, and find inspiration.",
      members: 890,
      posts: 156,
      avatar: "🏺",
    },
    {
      id: 3,
      name: "Metal Crafts Guild",
      description: "Community for metalworkers, blacksmiths, and welders to share their craft and knowledge.",
      members: 670,
      posts: 98,
      avatar: "⚒️",
    },
    {
      id: 4,
      name: "Leather Workers Collective",
      description: "Connect with leather artisans, share tooling techniques, and showcase leather creations.",
      members: 450,
      posts: 67,
      avatar: "🧵",
    },
    {
      id: 5,
      name: "Glass Artisans Network",
      description: "For glass blowers and stained glass artists to share their transparent masterpieces.",
      members: 320,
      posts: 45,
      avatar: "🔮",
    },
    {
      id: 6,
      name: "Traditional Crafts",
      description: "Preserving and promoting traditional crafting techniques from around the world.",
      members: 2100,
      posts: 543,
      avatar: "🎨",
    },
 
  ]);
 
  const addNewUser = (newUser) => {
    setUsers(prev => [...prev, { ...newUser, id: Date.now() }]);
  };

  const addNewCommunity = (newCommunity) => {
    setCommunities(prev => [...prev, { ...newCommunity, id: Date.now() }]);
  };

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
 
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const items = activeTab === "users" ? filteredUsers : filteredCommunities;
    return items.slice(startIndex, endIndex);
  }, [activeTab, filteredUsers, filteredCommunities, currentPage, itemsPerPage]);

  const totalPages = useMemo(() => {
    const items = activeTab === "users" ? filteredUsers : filteredCommunities;
    return Math.ceil(items.length / itemsPerPage);
  }, [activeTab, filteredUsers, filteredCommunities, itemsPerPage]);

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

 
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };
 
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeTab]);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      if (users.length < 15) {
        addNewUser({
          name: `New User ${users.length + 1}`,
          nickname: `@newuser${users.length + 1}`,
          bio: "Newly added user with unique skills",
          avatar: "NU",
        });
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [users.length]);

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
        <h3 className={styles.resultsTitle}>
          {searchTerm ? "Search Results" : `All ${activeTab === "users" ? "Users" : "Communities"}`}
          <span className={styles.resultsCount}>
            ({activeTab === "users" ? filteredUsers.length : filteredCommunities.length} found)
          </span>
        </h3>

        {currentItems.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No {activeTab} found</p>
            <p>Try adjusting your search terms</p>
          </div>
        ) : (
          <>
            <div className={styles.resultsGrid}>
              {activeTab === "users" 
                ? currentItems.map((user) => (
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
                  ))
                : currentItems.map((community) => (
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
                  ))
              }
            </div>

            {/* Пагінація */}
            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button
                  className={styles.paginationBtn}
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                
                <div className={styles.paginationNumbers}>
                  {getPageNumbers().map((page) => (
                    <button
                      key={page}
                      className={`${styles.paginationBtn} ${
                        currentPage === page ? styles.paginationBtnActive : ""
                      }`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <button
                  className={styles.paginationBtn}
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchCommunityPage;