# Hello DevOps – Beadandó projekt

Ez a projekt egy egyszerű Node.js + Express alapú webalkalmazás, amely a  
`http://localhost:8080` címen **"Hello DevOps World!"** üzenetet ad vissza.

A projekt célja az alap DevOps lépések bemutatása:

- alkalmazás fejlesztése
- buildelés
- verziókövetés (trunk-based development)
- dockerizálás
- DevContainer használata (kötelezően választott feladatrész)

---

## 1. Követelmények

A projekt futtatásához szükséges:

- Node.js 18+ (ajánlott)
- npm

Opcionálisan:
- Docker
- Visual Studio Code + Dev Containers bővítmény

---

## 2. Alkalmazás futtatása

Az alkalmazás Node.js + Express alapú.

### 2.1. Függőségek telepítése

```bash
npm install

### 2.2. Alkalmazás indítása

npm start

### 2.3. Elérés

Az alkalmazás futása után itt lesz elérhető:

http://localhost:8080

Várt válasz:
Hello DevOps World!

## 3. Buildelés

A projekt Node.js alapú, így nincs klasszikus build (kompilálás),
de a feladat követelménye szerint van build parancs:

npm run build

Ez a parancs csak tájékoztatást ad arról, hogy a projektnek nincs külön build folyamata,
ugyanakkor a build lépés dokumentált és futtatható.

## 4. Docker használata

A projekt dockerizálva lett, így konténerben is futtatható.

### 4.1. Docker image készítése

docker build -t hello-devops:v1 .

### 4.2. Docker konténer futtatása

docker run -p 8080:8080 hello-devops:v1

### 4.3. Elérés konténerből futtatva

A konténer futása után az app elérhető:

http://localhost:8080

## 5. Dev Container használata (kötelezően választott feladat)

A projekt tartalmaz egy .devcontainer mappát, amely lehetővé teszi,
hogy a projektet teljesen konténerizált fejlesztői környezetben futtasd.

A Dev Containerek segítségével:

nem kell Node.js-t lokálisan telepíteni,

minden fejlesztő pontosan ugyanazt a környezetet kapja,

a projektet Docker alapú izolált környezetben indíthatod.

### 5.1. Dev Container indítása VS Code-ban

Nyisd meg a projektet VS Code-ban.

Telepítsd a következő bővítményt:

Dev Containers (ms-vscode-remote.remote-containers)

Nyomd meg: Ctrl + Shift + P

Válaszd ki:

Dev Containers: Open Folder in Container...

Válaszd ki a projekt mappáját.

A konténer automatikusan felépül a .devcontainer konfiguráció alapján.

### 5.2. Futtatás Dev Containeren belül

A konténerben futtasd:

npm install
npm start

Az alkalmazás ezután elérhető lesz a gépeden:

http://localhost:8080

## 6. Projektstruktúra

hello-devops/
 ├─ .devcontainer/
 │   ├─ devcontainer.json
 │   └─ Dockerfile
 ├─ src/
 │   └─ index.js
 ├─ package.json
 ├─ Dockerfile
 ├─ .gitignore
 └─ README.md


