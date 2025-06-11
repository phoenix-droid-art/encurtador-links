function shortenLink() {
  const originalLink = document.getElementById('originalLink').value;
  if (!originalLink || !originalLink.startsWith('http')) {
    alert('Por favor, insira um link válido começando com http ou https.');
    return;
  }

  const scriptUrl = 'https://script.google.com/macros/s/AKfycbxXKkNYyiNHpuwKwzkSuTNaxSBpM-aLvs9Pqo2ivVZTafBpEoV0UddbctbUN3yAu4wO/exec'; // Substitua pela URL do Apps Script
  fetch(`${scriptUrl}?longUrl=${encodeURIComponent(originalLink)}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('shortenedLink').innerHTML = 
        `Link encurtado: <a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>`;
    })
    .catch(error => {
      alert('Erro ao encurtar o link.');
      console.error(error);
    });
}