export const STRAPI_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';

export async function fetchAPI(path) {
    const url = `${STRAPI_URL}/api${path}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Failed to fetch ${url}:`, error);
        return null;
    }
}

// Helpers for specific content types to keep components clean
export async function getHomepageData() {
    const data = await fetchAPI('/homepage?populate=*'); // Populate all relations
    return data?.data || null;
}

export async function getEvents() {
    const data = await fetchAPI('/events?sort=date:asc&populate=*');
    return data?.data || [];
}

export async function getProjects() {
    const data = await fetchAPI('/projects?populate=*');
    return data?.data || [];
}

export async function getArticles() {
    const data = await fetchAPI('/articles?sort=date:desc&populate=*');
    return data?.data || [];
}

export async function getTeam() {
    const data = await fetchAPI('/team-members?populate=*');
    return data?.data || [];
}

export async function getHistory() {
    const data = await fetchAPI('/history-items?sort=year:asc');
    return data?.data || [];
}

export async function getArticleById(documentId) {
    const data = await fetchAPI(`/articles/${documentId}?populate=*`);
    return data?.data || null;
}

export async function getProjectById(documentId) {
    const data = await fetchAPI(`/projects/${documentId}?populate=*`);
    return data?.data || null;
}
