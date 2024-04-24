const fs = require('fs');
const path = require('path');
const ytdl = require('ytdl-core');

// URL do vídeo do YouTube que você deseja baixar
const videoUrl = 'https://youtu.be/Ex9HIqteOv4?si=2XA_m_4aZLuI0Ulk';

// Opções de download
const options = {
  quality: 'highest',
  //   filter: 'videoandaudio',
  filter: 'audioonly'
};


// Baixando o vídeo
ytdl(videoUrl, options)
  .pipe(fs.createWriteStream(path.join(__dirname, 'videos/Tu es o cristo.mp4')))
  .on('finish', () => {
    console.log('Download concluído');
  })
  .on('error', (err) => {
    console.error('Ocorreu um erro durante o download:', err);
  });
