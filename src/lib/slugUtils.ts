/**
 * Utility functions for generating URL-safe slugs
 */

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters except hyphens and spaces
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

export function generateUniqueSlug(title: string, existingSlugs: string[] = []): string {
  let baseSlug = generateSlug(title);
  
  // If the base slug is empty, use a fallback
  if (!baseSlug) {
    baseSlug = 'case-study';
  }
  
  let finalSlug = baseSlug;
  let counter = 1;
  
  // Ensure uniqueness by appending numbers if needed
  while (existingSlugs.includes(finalSlug)) {
    finalSlug = `${baseSlug}-${counter}`;
    counter++;
  }
  
  return finalSlug;
}

export function validateSlug(slug: string): boolean {
  // Check if slug is valid (contains only lowercase letters, numbers, and hyphens)
  return /^[a-z0-9-]+$/.test(slug) && slug.length > 0;
}