'use client';

import { useState, useEffect } from 'react';
import { 
  getBlogPosts, 
  createBlogPost, 
  updateBlogPost, 
  deleteBlogPost, 
  BlogPost 
} from '@/lib/firestore';
import styles from './BlogManagement.module.css';

interface BlogFormData {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  tags: string;
  featured: boolean;
  published: boolean;
}

const initialFormData: BlogFormData = {
  title: '',
  excerpt: '',
  content: '',
  author: '',
  date: new Date().toISOString().split('T')[0],
  category: '',
  readTime: '',
  tags: '',
  featured: false,
  published: false
};

const categories = [
  'Study Abroad',
  'Universities',
  'Scholarships',
  'Visa Guide',
  'Student Life',
  'Test Prep',
  'Career Guidance',
  'Application Tips'
];

export default function BlogManagement() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState<BlogFormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const data = await getBlogPosts();
      setPosts(data);
    } catch (error) {
      console.error('Error loading posts:', error);
      setError('Failed to load blog posts. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const blogData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      };

      if (editingPost) {
        await updateBlogPost(editingPost.id!, blogData);
        setSuccess('Blog post updated successfully!');
      } else {
        await createBlogPost(blogData);
        setSuccess('Blog post created successfully!');
      }

      setFormData(initialFormData);
      setShowForm(false);
      setEditingPost(null);
      loadPosts();
    } catch (error: any) {
      setError(error.message || 'Failed to save blog post.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      date: post.date,
      category: post.category,
      readTime: post.readTime,
      tags: post.tags.join(', '),
      featured: post.featured || false,
      published: post.published
    });
    setShowForm(true);
  };

  const handleDelete = async (postId: string) => {
    if (!confirm('Are you sure you want to delete this blog post? This action cannot be undone.')) {
      return;
    }

    try {
      await deleteBlogPost(postId);
      setSuccess('Blog post deleted successfully!');
      loadPosts();
    } catch (error) {
      setError('Failed to delete blog post.');
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setEditingPost(null);
    setShowForm(false);
    setError('');
    setSuccess('');
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'Unknown';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="31.416" strokeDashoffset="31.416">
              <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>
              <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>
        <p>Loading blog posts...</p>
      </div>
    );
  }

  return (
    <div className={styles.blogManagement}>
      <div className={styles.header}>
        <h2>Blog Management</h2>
        <button 
          className={styles.addButton}
          onClick={() => setShowForm(true)}
          disabled={showForm}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Add New Post
        </button>
      </div>

      {error && (
        <div className={styles.alert + ' ' + styles.alertError}>
          {error}
        </div>
      )}

      {success && (
        <div className={styles.alert + ' ' + styles.alertSuccess}>
          {success}
        </div>
      )}

      {showForm && (
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h3>{editingPost ? 'Edit Blog Post' : 'Create New Blog Post'}</h3>
            <button className={styles.closeButton} onClick={resetForm}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="title">Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter blog post title"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="author">Author *</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  required
                  placeholder="Author name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="readTime">Read Time *</label>
                <input
                  type="text"
                  id="readTime"
                  name="readTime"
                  value={formData.readTime}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 5 min read"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="date">Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>

            </div>

            <div className={styles.formGroup}>
              <label htmlFor="excerpt">Excerpt *</label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                required
                rows={3}
                placeholder="Brief description of the blog post"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="content">Content *</label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                required
                rows={10}
                placeholder="Full blog post content"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="tags">Tags</label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                placeholder="Separate tags with commas (e.g., study abroad, scholarships)"
              />
            </div>

            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                />
                <span className={styles.checkmark}></span>
                Featured Post
              </label>

              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="published"
                  checked={formData.published}
                  onChange={handleInputChange}
                />
                <span className={styles.checkmark}></span>
                Published
              </label>
            </div>

            <div className={styles.formActions}>
              <button type="button" onClick={resetForm} className={styles.cancelButton}>
                Cancel
              </button>
              <button type="submit" disabled={submitting} className={styles.submitButton}>
                {submitting ? 'Saving...' : (editingPost ? 'Update Post' : 'Create Post')}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className={styles.postsContainer}>
        <h3>All Blog Posts ({posts.length})</h3>
        
        {posts.length === 0 ? (
          <div className={styles.emptyState}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>No blog posts yet. Create your first post!</p>
          </div>
        ) : (
          <div className={styles.postsGrid}>
            {posts.map((post) => (
              <div key={post.id} className={styles.postCard}>
                <div className={styles.postHeader}>
                  <div className={styles.postBadges}>
                    {post.featured && <span className={styles.featuredBadge}>Featured</span>}
                    <span className={`${styles.statusBadge} ${post.published ? styles.published : styles.draft}`}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </div>
                </div>

                <div className={styles.postContent}>
                  <div className={styles.postMeta}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.readTime}>{post.readTime}</span>
                  </div>
                  
                  <h4 className={styles.postTitle}>{post.title}</h4>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  
                  <div className={styles.postFooter}>
                    <div className={styles.postAuthor}>
                      <span>By {post.author}</span>
                      <span className={styles.postDate}>{post.date}</span>
                    </div>
                    
                    <div className={styles.postActions}>
                      <button 
                        onClick={() => handleEdit(post)}
                        className={styles.editButton}
                        title="Edit post"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      
                      <button 
                        onClick={() => handleDelete(post.id!)}
                        className={styles.deleteButton}
                        title="Delete post"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <polyline points="3,6 5,6 21,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}