FROM node:18

# Munkakönyvtár a konténerben
WORKDIR /workspace

# (A forráskódot a Dev Container bind mount-tal csatolja,
# ezért itt nem feltétlen kell COPY, de nem árt, ha benne marad.)
COPY package*.json ./

RUN npm install

# A VS Code Dev Containers / Codespaces mountolja a projektet ide:
# /workspace

