# MediaCollege Viborg

## Forudsætning

at du allerede har sem_galleries databsen i din lokale MongoDB.

## Kom igang

### 1. Hvis du ikke har installeret ``node_modules`` så kør kommandoen

```bash
npm install
```

### 2. Environement Variabler

Opret en `.env` fil i roden af projektet.

Indsæt følgende i filen.

```bash
MONGODB_URI=mongodb://127.0.0.1:27017/sem-galleries
```
*(note: Selve mongo URI´en skulle gerne pege på din local MONGODB installation. Se eventuelt Mongo Compass)*

Lav en kopi af filen og omdøb den til `.env.local` så du ender med at have to filer `.env` og `env.local`.

### 3. Assets

Mapperne `obscura` og `umbra` skal være placeret i public mappen.

[Download zip file](https://github.com/MCDM-Viborg-Documentation/hf-nextjs-sem/blob/main/assets/galleries.zip) eller kopier fra tidligere projekt.


### 4. Start udvikling serveren.

```bash
npm run dev
```

### 4. Åbn siden

Åbn siden på ``http:localhost:3000`` - Eller læs i terminalen hvis det skulle være en anden port end `3000`.






