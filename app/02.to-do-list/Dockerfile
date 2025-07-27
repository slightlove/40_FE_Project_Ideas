# =========================================
# Dockerfile for Next.js (TypeScript) 專案
# =========================================
# 本檔案將專案建置為可於生產環境執行的 Docker 映像
# 步驟說明如下：

# 1. 使用官方 Node.js LTS 映像作為建置階段
FROM node:24-alpine AS base
# 設定工作目錄
WORKDIR /app

# 2. 複製 package.json 及 lock 檔，確保安裝依賴時快取有效
COPY package.json ./
# 若有 yarn.lock 或 pnpm-lock.yaml 也可一併複製（可依實際情況取消註解）
# COPY yarn.lock ./
# COPY pnpm-lock.yaml ./

# 3. 安裝專案依賴（使用 frozen-lockfile 確保鎖定版本）
RUN npm install --frozen-lockfile

# 4. 複製專案所有原始碼與設定檔
COPY . .

# 5. 執行 Next.js 專案建置，產生 .next 產物
RUN npm run build

# 6. 使用更小的 Node.js 映像作為最終執行環境，僅保留必要檔案
FROM node:24-alpine AS runner
# 設定工作目錄
WORKDIR /app
# 設定環境變數為 production
ENV NODE_ENV=production

# 只複製執行所需的檔案，減少映像體積
COPY --from=base /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/public ./public
COPY --from=base /app/next.config.mjs ./next.config.mjs
COPY --from=base /app/tsconfig.json ./tsconfig.json

# 7. 開放 3000 port 供外部存取
EXPOSE 3000
# 8. 預設啟動指令，啟動 Next.js 應用
CMD ["npm", "start"]
