fetch('https://api.uwucoin.xyz/info') // Replace with the actual API URL
  .then(response => response.json())
  .then(data => {
    document.getElementById('height').innerText = data.height;
    document.getElementById('difficulty').innerText = data.difficulty;
    document.getElementById('tx_count').innerText = data.tx_count;
    document.getElementById('tx_pool_size').innerText = data.tx_pool_size;
    document.getElementById('last_known_block_index').innerText = data.last_known_block_index;
    document.getElementById('network_height').innerText = data.network_height;
    document.getElementById('hashrate').innerText = data.hashrate;
    document.getElementById('status').innerText = data.status;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
