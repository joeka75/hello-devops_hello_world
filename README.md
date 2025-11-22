## Hello DevOps -- React Hello World + Dockerizálás

Ez a projekt egy egyszerű, HTTP-n elérhető React alapú „Hello World"
alkalmazás, amelyen keresztül bemutatásra kerülnek az alapvető DevOps
lépések:

-   alkalmazás készítése,
-   buildelés,
-   Git / trunk-based development,
-   Dockerizálás,
-   konténer futtatása és elérhetősége HTTP-n.

------------------------------------------------------------------------

## Alkalmazás futtatása (development)

A projekt React alapokra épül. A fejlesztői futtatás:

## Build

    npm install
    npm run build

## Run (development)

    npm start

Az alkalmazás fejlesztői módban a következő címen érhető el:
http://localhost:3000

------------------------------------------------------------------------

## Docker

A projekt dockerizálva lett, az alábbi parancsokkal buildelhető és
futtatható.

## Docker image build

    docker build -t hello-devops-react:v1 .

## Docker container futtatás

    docker run -p 8080:80 hello-devops-react:v1

A konténer elindítása után az alkalmazás elérhető:

    http://localhost:8080

## A Dockerfile feladatai

-   A Node 18-alpine image segítségével buildeli a React alkalmazást
-   A buildelt statikus fájlokat NGINX szolgálja ki
-   A konténer indításakor automatikusan elindul az NGINX webszerver

------------------------------------------------------------------------

##  Git / Trunk-Based Development

A projekt a trunk-based development módszert követi.

## Trunk (fő ág)

-   A fő ág a master branch, ez szolgál trunkként.

## Feature branch

-   Külön feature branch készült az új funkció demonstrálására:

        hello-devops_hello_world_Branch

## Egymásra épülő commitok

-   A projekt több, egymásra épülő commitot tartalmaz.


## Példa commit üzenet

    Branch_button_add


------------------------------------------------------------------------

## Összegzés

-   React „Hello World" alkalmazás
-   Build és futtatás dokumentálva
-   Trunk-based Git workflow megvalósítva
-   Dockerfile működik
-   Image build és futtatás parancsai dokumentálva
-   Alkalmazás fut konténerből HTTP-n (http://localhost:8080)

+1 feladat

## Deploy lépések dokumentálva a README-ben

##  Felhő Deploy – Render.com (FREE tier)

A projekt deployolva lett a Render.com felhőszolgáltatásba az ingyenes csomag segítségével.

##  Szolgáltató
Render.com – Free Web Service tier

## Publikus URL
https://hello-devops-hello-world-1.onrender.com

## Deploy lépések

1. Bejelentkezés a https://render.com oldalra GitHub autentikációval.
2. New + Web Service létrehozása.
3. Forrásként a GitHub repository kiválasztása.
4. Environment / Runtime: Docker
5. Branch: master
6. Root Directory: ./
7. Plan: Free
8. Deploy Web Service megnyomása.
9. A Render automatikusan:
   - lehúzza a GitHub repót,
   - buildeli a Docker imaget,
   - futtatja az NGINX alapú konténert,
   - publikusan elérhetővé teszi az appot.

## Eredmény
Az alkalmazás sikeresen fut a Render felhőben, Docker konténerben, elérhető HTTP-n keresztül a publikus URL-en.

