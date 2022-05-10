export const formatDate = (val) => new Date(val).toLocaleDateString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
});