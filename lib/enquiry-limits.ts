export const MAX_UPLOAD_SIZE = 3 * 1024 * 1024;
export const MAX_TOTAL_UPLOAD_SIZE = 4 * 1024 * 1024;
// Leave room for named fields and multipart headers below Vercel's 4.5 MB limit.
export const MAX_REQUEST_SIZE = MAX_TOTAL_UPLOAD_SIZE + 64 * 1024;
