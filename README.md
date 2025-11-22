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

A projekt a *trunk-based development* módszert követi.

## Trunk (fő ág)

-   A fő ág a **master** branch, ez szolgál trunkként.

## Feature branch

-   Külön feature branch készült az új funkció demonstrálására:

        Hello-DevOps-World-from-Feature-Branch

## Egymásra épülő commitok

-   A projekt több, egymásra épülő commitot tartalmaz.
-   A commit üzenetek értelmesek, és a funkcionális változásokat
    tükrözik.

## Példa commit üzenet

    feat: add new feature button

Ez bizonyítja, hogy a fejlesztés elkülönített feature branch-en történt,
majd visszavezethető a trunk ágra.

------------------------------------------------------------------------

## Összegzés

A projekt teljesíti a feladat összes kötelező DevOps lépését:

-   React „Hello World" alkalmazás
-   Build és futtatás dokumentálva
-   Trunk-based Git workflow megvalósítva
-   Dockerfile működik
-   Image build és futtatás parancsai dokumentálva
-   Alkalmazás fut konténerből HTTP-n (http://localhost:8080)
