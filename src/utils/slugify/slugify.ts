// Replace the spaces and special characters in the string with _
export const slugify = (source: string): string => {
    return source.toLowerCase().replace(/[^\w]+/g, '_')
}