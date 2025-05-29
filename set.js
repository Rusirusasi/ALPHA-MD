const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined 
    ? databasePath 
    : process.env.DATABASE_URL;


const config = {
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61Vy47iRhT9lVFtQYOf2CC1FD8wmIeB5mmiLAq7bMoYlymXbcyID8guyyiKNIqUXf4qXzCfEJnuzrSSyaQjxaty1dWtc+4959YHkBCcoRGqQPcDSCkuIEP1klUpAl2g50GAKGgCHzIIuuBkjjgu7ZeKc12PkbvaOK0IRduDujWVycFblMO2hybJUhmsHsCtCdJ8H2PvKwkNyUYJnGuON7RdNtrnYbEYVPwUacKy9BqTg6w5Ix+XmRA+gFudEWKKk7CXHtAJURiPUDWDmL4NvjpN90bl23t3u1WP/HYpSDtlF/MywW09CxU+OtLHNK5QrL0NfuWfF2E4FCcTIen1ffG0Q9HxKhu+o84G883gqOPj2RsegwN5gp/hMEG+7aOEYVa9ue6GmckYyarL4UB/nHtVo9FYDpepZpsVUfrzaLcr+kQU90fvbcAh9I6L/qU8in2HjjsG21xCvzNrbaUw40YcE4zA9afRyBpIr4HP6ItWjv+l7vb07G6vW5PZyqpx4af8duNGhzEfHF1fF5by8CBd5Ew6yRz3NviCIbqs37g0SqMf5qKyyo2QYxct8dKNqJtVioO5k4W6hcPP8CHL6ddQ5rNd2+37npUWYW/C7PjiZl5JeLrfzPZ0ftrSJcc9xqOx5/RKIVcPoeJfw/JYmPNUabfsiaU1GufIjsrAJSSJEzvZaeHDndERVbYPuvytCSgKccYoZJgk97223ATQLxbIo4jdywvCIOtIUHD0qLiUgTeUz4XtVo2oCB6TUcH4sTHV9TEZjC/lA2iClBIPZRnyBzhjhFYTlGUwRBnofnvvVE2aohNhaIh90AUdSWlziqTwqvRN9r48QJbBNH2fIAaaIKDkNEGgy2iOmuAeb1iyphi81dYFSzV0kxflnqhoPU3jFamtGjXD09OdS3xCGYOnFHR5RVJlvs2J8q35v8DQdMNUBInjVFPhtI7MKT2xbZmiyekm3+tY/wJDuX3XBAm6sCcV17UX+SYIMM3YKsnTmED/ReIvh9DzSJ6wRZV4Rr1AFHRfbSPGcBJmNbE8gdQ74AIZNQ/QDWCcoT/bjSjyX7g8jzCD+LUKx6I6GBqiAWrsdaK/lqYrtP9enfgexXcEQVEUVVQ6otrm6sj6oAkSWOcCiwMu4bsJpLCC7z59/PW3Tx9/+P7Txx9//v2nX+piPdOob/URgzjO6mY7UEmmbr83WsrSpNfva3aoGaEGPtN+MdOTWHGhEz6l9vhqreKUipqSqde2s47PY7Mzbh+sqtXRhGg30qWHLyQBXeD2jitoDbaBI8RWOoPEH+ANscQqyk4Hy8Ob9BDuymBGkqNA3d16uCodW7WDmKwP52l1pRY9a6ssLAgl6lhq59HENucP9W0+KrCHXl+2jPcrI9+ITkTS3kq3eK1FvIs6TqrQNXuFuj1rMH+M5rk1p1t+1kjgVFiq+VW5zPZrZYe5WSezzj2hY6HWqdWa69H6pD/b/D5m4ufxjp8NiO+/AUb3afncmn9r8BPuWobcrfkqxfP4/YcRpru0hA6ElaFe1kMIO+VUmU0a0XoHcdlaNMijV7TmDhEWIQK32g9pDFlA6Kl+ExKfkrt8KMlrXdtJQL72KGkru/dMPIYZ0z575Qv245WnqBkl6QBmB9AFs81R1mvdV1qaLhhkL84DWv0Nsxm4/QH4KepyoggAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Keith",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254743995989",     
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',    
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",                         
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no',     
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',  
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS: process.env.EVENTS || "yes",    
    BOT: process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ADM: process.env.ANTI_DELETE_MESSAGE || 'no',
    
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? new Sequelize({
            dialect: 'sqlite',
            storage: DATABASE_URL,
            logging: false,
        })
        : new Sequelize(DATABASE_URL, {
            dialect: 'postgres',
            ssl: true,
            protocol: 'postgres',
            dialectOptions: {
                native: true,
                ssl: { 
                    require: true, 
                    rejectUnauthorized: false 
                },
            },
            logging: false,
        })
};


let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;
