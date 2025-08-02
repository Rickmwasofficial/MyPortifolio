import React, { useState, useEffect } from 'react';
import Section from './Section';
import { BLOG_CONTENT } from '../constants';
import type { HashnodePost } from '../types';

const PostCard: React.FC<{ post: HashnodePost }> = ({ post }) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <a 
            href={post.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-dark-card rounded-xl overflow-hidden border border-dark-border transition-all duration-300 flex flex-col h-full group hover:border-dark-text-secondary hover:-translate-y-1"
        >
            <div className="relative">
                <img 
                    src={post.coverImage?.url || 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=800&auto=format&fit=crop'} 
                    alt={post.title} 
                    className="w-full h-48 object-cover aspect-video transition-transform duration-300 group-hover:scale-105" 
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs text-dark-text-secondary mb-2">{formatDate(post.publishedAt)}</p>
                <h3 className="text-lg font-bold mb-2 text-dark-text flex-grow">{post.title}</h3>
                <p className="text-sm text-dark-text-secondary mb-4 ">{post.brief}</p>
                 <span className="mt-auto text-xs font-semibold text-dark-text group-hover:underline">
                    Read More &rarr;
                </span>
            </div>
        </a>
    );
};

const SkeletonCard: React.FC = () => (
    <div className="bg-dark-card rounded-xl overflow-hidden border border-dark-border animate-pulse">
        <div className="w-full h-48 bg-dark-border"></div>
        <div className="p-6">
            <div className="h-2.5 bg-dark-border rounded-full w-32 mb-4"></div>
            <div className="h-4 bg-dark-border rounded-full w-full mb-2"></div>
            <div className="h-4 bg-dark-border rounded-full w-5/6 mb-4"></div>
            <div className="h-3 bg-dark-border rounded-full w-full mb-2"></div>
            <div className="h-3 bg-dark-border rounded-full w-full mb-4"></div>
            <div className="h-2.5 bg-dark-border rounded-full w-24"></div>
        </div>
    </div>
);

const Blog = () => {
    const [posts, setPosts] = useState<HashnodePost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            const query = `
                query Publication {
                  publication(host: "nsd.hashnode.dev") {
                    posts(first: 3) {
                      edges {
                        node {
                          id
                          title
                          brief
                          url
                          publishedAt
                          coverImage {
                            url
                          }
                        }
                      }
                    }
                  }
                }
            `;
            
            try {
                setLoading(true);
                setError(null);
                const response = await fetch('https://gql.hashnode.com/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query }),
                });

                const result = await response.json();

                if (result.errors) {
                    throw new Error(result.errors[0].message || "Failed to fetch posts.");
                }

                const fetchedPosts = result.data.publication.posts.edges.map((edge: any) => edge.node);
                setPosts(fetchedPosts);

            } catch (err: any) {
                setError(err.message);
                console.error("Error fetching Hashnode posts:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const renderContent = () => {
        if (loading) {
            return (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(3)].map((_, i) => <SkeletonCard key={i} />)}
                </div>
            );
        }
        
        if (error) {
            return (
                <div className="bg-dark-card border border-red-500/30 rounded-lg p-8 text-center max-w-2xl mx-auto">
                    <h3 className="text-xl font-bold text-red-400">Something went wrong</h3>
                    <p className="text-dark-text-secondary mt-2">
                        Could not fetch blog posts. Please try again later.
                    </p>
                    <p className="text-xs text-dark-text-secondary/50 mt-4">{error}</p>
                </div>
            );
        }

        if (posts.length === 0) {
             return (
                <div className="bg-dark-card border border-dark-border rounded-lg p-12 text-center max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold text-dark-text">No Posts Yet</h3>
                    <p className="text-dark-text-secondary mt-2">
                        I'm working on new articles. Stay tuned!
                    </p>
                </div>
            );
        }

        return (
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => <PostCard key={post.id} post={post} />)}
            </div>
        );
    };

    return (
        <Section id="blog" className="bg-dark-card/30">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold">{BLOG_CONTENT.title}</h2>
                <p className="text-lg text-dark-text-secondary mt-2">{BLOG_CONTENT.subtitle}</p>
            </div>
            
            {renderContent()}

            {!loading && !error && (
                 <div className="text-center mt-16">
                    <a 
                        href={BLOG_CONTENT.viewAll.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block px-8 py-3 font-semibold rounded-md border border-dark-text-secondary text-dark-text-secondary hover:bg-dark-text-secondary hover:text-dark-bg transition-colors duration-300"
                    >
                        {BLOG_CONTENT.viewAll.text}
                    </a>
                </div>
            )}
        </Section>
    );
};

export default Blog;