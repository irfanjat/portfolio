# Use nginx base image
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy website files to nginx directory
COPY index.html /usr/share/nginx/html/

EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
