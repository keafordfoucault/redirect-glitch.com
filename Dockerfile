# Sử dụng Node.js chính thức từ DockerHub làm image nền
FROM node:18

# Tạo thư mục làm việc trong container
WORKDIR /usr/src/app

# Copy file package.json và package-lock.json (nếu có) vào thư mục làm việc
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Copy toàn bộ mã nguồn ứng dụng vào thư mục làm việc
COPY . .

# Expose port mà ứng dụng sẽ chạy (3000 hoặc port khác tuỳ vào cấu hình ứng dụng của bạn)
EXPOSE 3000

# Lệnh để chạy ứng dụng
CMD ["npm", "start"]
